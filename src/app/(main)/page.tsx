'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PAGES } from '@/config/pages';
import TabulatorTable, { TabulatorData, TabulatorColumn } from '@/components/ui/TabulatorTable';

// 페이지 데이터 타입 확장
interface PageTableData extends TabulatorData {
  no: number;
  title: string;
  description: string;
  status: string;
  screenId: string;
  key: string;
  path: string;
  message: string;
}

// 파일 리스트 페이지 컴포넌트
export default function HomePage() {
  const router = useRouter();

  // PAGES 데이터를 Tabulator 형식으로 변환
  const tableData: PageTableData[] = PAGES.map((page) => ({
    no: page.no,
    title: page.title,
    description: page.description,
    status: page.status,
    screenId: page.screenId,
    key: page.key,
    path: page.path,
    message: page.message,
  }));

  // 테이블 컬럼 정의
  const columns: TabulatorColumn[] = [
    {
      title: 'No',
      field: 'no',
      width: 80,
      hozAlign: 'center',
    },
    {
      title: 'Page Title',
      field: 'title',
      hozAlign: 'left',
      width: 250,
      formatter: (cell) => {
        const data = cell.getData() as PageTableData;
        return `
          <div>
            <div style="font-weight: 600; color: #111827;">${data.title}</div>
            <div style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">${data.description}</div>
          </div>
        `;
      },
    },
    {
      title: 'Status',
      field: 'status',
      width: 120,
      hozAlign: 'center',
      formatter: (cell) => {
        const status = cell.getValue() as string;
        let color = '#d1d5db';
        let text = '';

        switch (status) {
          case 'completed':
            color = '#10b981';
            text = 'Completed';
            break;
          case 'in-progress':
            color = '#3b82f6';
            text = 'In Progress';
            break;
          case 'planned':
            color = '#9ca3af';
            text = 'Planned';
            break;
        }

        return `<span style="display: inline-block; padding: 2px 8px; border-radius: 4px; background-color: ${color}20; color: ${color}; font-size: 0.875rem; font-weight: 500;">${text}</span>`;
      },
    },
    {
      title: 'Screen ID',
      field: 'screenId',
      width: 120,
      hozAlign: 'center',
    },
    {
      title: 'Action',
      field: 'key',
      width: 150,
      hozAlign: 'center',
      formatter: (cell) => {
        const data = cell.getData() as PageTableData;
        if (data.status === 'completed') {
          return `<button class="page-action-btn" data-key="${data.key}" data-title="${data.title}" data-path="${data.path}" style="padding: 0.25rem 0.75rem; background-color: #fff; color: black; border-radius: 0.375rem; border:1px solid #919BA3; cursor: pointer; font-size: 0.875rem;">페이지 이동</button>`;
        } else {
          return `<button disabled style="padding: 0.25rem 0.75rem; background-color: #e5e7eb; color: #9ca3af; border-radius: 0.375rem; border: none; cursor: not-allowed; font-size: 0.875rem;">작업 예정</button>`;
        }
      },
    },
    {
      title: 'Message',
      field: 'message',
      hozAlign: 'left',
      widthGrow: 1,
      formatter: 'html',
    },
  ];

  // 버튼 클릭 이벤트 핸들러 추가
  useEffect(() => {
    // 테이블 렌더링 후 버튼 이벤트 바인딩
    const timer = setTimeout(() => {
      const buttons = document.querySelectorAll('.page-action-btn');
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const path = target.getAttribute('data-path');

          if (path) {
            router.push(path);
          }
        });
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="contents">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Page List</h2>
        <p className="text-gray-600">개발된 페이지들을 확인하고 테스트할 수 있습니다.</p>
      </div>

      {/* 통계 카드 */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between ">
            <div>
              <p className="text-sm text-gray-600">Total Pages</p>
              <p className="text-2xl font-bold text-gray-900">{PAGES.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📄</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">
                {PAGES.filter((p) => p.status === 'completed').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Planned</p>
              <p className="text-2xl font-bold text-gray-600">
                {PAGES.filter((p) => p.status === 'planned').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 테이블 */}
      <div className="flex flex-grow gap-5 max-md:flex-col max-md:gap-2">
        <TabulatorTable data={tableData} columns={columns} className="max-md:!h-auto" />
        <div className="flex flex-col gap-5 flex-grow overflow-y-auto">
          <h3 className="text-lg font-bold text-gray-900">업데이트 사항</h3>
          <dl className="text-gray-600 flex flex-col gap-1">
            <dt className="text-sm font-bold text-gray-900">2025/11/00</dt>
            <dd className="text-gray-700">- 대전스마트물류센터 프로젝트</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
