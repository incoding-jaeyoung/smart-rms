// 페이지 목록 설정

export interface PageInfo {
  key: string;
  no: number;
  title: string;
  description: string;
  path: string;
  status: 'completed' | 'in-progress' | 'planned';
  screenId: string;
  message: string;
}

// 페이지 데이터 (키와 넘버 제외)
const PAGE_DATA = [
  {
    title: 'Layout Template',
    description: '빈 템플릿 페이지',
    path: '/layout',
    status: 'completed' as const,
    screenId: '-',
    message: '',
  },
  {
    title: 'Components Demo',
    description: '',
    path: '/components-demo',
    status: 'completed' as const,
    screenId: '-',
    message: '버튼과 폼의 상태(disable, error 등) 예제 페이지',
  },
  {
    title: 'Table Examples',
    description: 'Tabulator 테이블 예제',
    path: '/table-examples',
    status: 'completed' as const,
    screenId: '-',
    message: '',
  },
  {
    title: 'Modals',
    description: '모달 컴포넌트',
    path: '/modal-basic',
    status: 'completed' as const,
    screenId: '-',
    message: '',
  },
  {
    title: 'Log In',
    description: '',
    path: '/log-in',
    status: 'completed' as const,
    screenId: '',
    message: '',
  },
  {
    title: 'Dashboard',
    description: '',
    path: '/dashboard',
    status: 'completed' as const,
    screenId: '',
    message: '',
  },
];

// 자동으로 키와 넘버를 매기는 함수
export const PAGES: PageInfo[] = PAGE_DATA.map((page, index) => ({
  key: String(index + 1),
  no: index + 1,
  ...page,
}));
