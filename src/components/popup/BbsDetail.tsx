'use client';

import ContentModal from '@/components/ui/ContentModal';
import Image from 'next/image';
import { Button } from 'antd';

interface BbsDetailProps {
  open: boolean;
  onCloseAction: () => void;
  onOpenList: () => void;
}

export default function BbsDetailPopup({ open, onCloseAction, onOpenList }: BbsDetailProps) {
  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header">
        <div className="flex items-center gap-1.5 w-[510px]">
          <button
            type="button"
            className="btn-back"
            onClick={() => {
              onCloseAction();
              onOpenList();
            }}
          >
            <Image src="/icons/ico-back.svg" alt="" width={30} height={30} />
            목록
          </button>
        </div>
      </div>
      <div className="modal-con-body">
        <div className="popup-content">
          <div className="bbs-view-title">
            <h2>
              글제목 텍스트 안에 이미지 복사 붙여넣기 글글제목 텍스트 안에 이미지 복사 붙여넣기
              글글제
            </h2>
            <p className="flex">
              <a href="#" target="_blank">
                <Image src="/icons/ico-file-text.svg" alt="" width={24} height={24} />
              </a>
              <a href="#" target="_blank">
                <Image src="/icons/ico-file-image.svg" alt="" width={24} height={24} />
              </a>
            </p>
          </div>
          <div className="content-viewer">
            <div className="content-header">
              <p className="title">
                홍길동 <span>(asdf***********)</span>
              </p>
              <p className="date">2025.09.24 08:36:20</p>
            </div>
            <div className="content-body">
              이미지는 첨부된 사이즈 그대로 들어가며 편집 불가합니다. 큰 이미지는 게시글 상세의
              width까지만 됩니다. 이미지는 첨부된 사이즈 그대로 들어가며 편집 불가합니다. 큰
              이미지는 게시글 상세의 width까지만 됩니다. 이미지는 첨부된 사이즈 그대로 들어가며 편집
              불가합니다. 큰 이미지는 게시글 상세의 width까지만 됩니다. 이미지는 첨부된 사이즈
              그대로 들어가며 편집 불가합니다. 큰 이미지는 게시글 상세의 width까지만 됩니다.
              <img src="/images/@img-thumb.png" alt="" />
            </div>
          </div>
          <div className="file-upload">
            <p className="flex items-center gap-1 leading-none h-6 font-medium">
              첨부파일 보기 (최대 5개)
            </p>
            <div className="file-list-down">
              <ul>
                <li>
                  <button type="button">
                    <Image src="/icons/ico-file.svg" alt="" width={18} height={18} />
                    첨부파일.txt
                  </button>
                </li>
                <li>
                  <button type="button">
                    <Image src="/icons/ico-file.svg" alt="" width={18} height={18} />
                    첨부파일 _피디에프.pdf
                  </button>
                </li>
                <li>
                  <button type="button">
                    <Image src="/icons/ico-file.svg" alt="" width={18} height={18} />
                    첨부파일 _피디에프 첨부파일 피디에프 첨부파일 피디에프.pdf{' '}
                  </button>
                </li>
                <li>
                  <button type="button">
                    <Image src="/icons/ico-file.svg" alt="" width={18} height={18} />
                    첨부파일 _피디에프.pdf{' '}
                  </button>
                </li>
                <li>
                  <button type="button">
                    <Image src="/icons/ico-file.svg" alt="" width={18} height={18} />
                    첨부파일 _피디에프 첨부파일 피디에프 첨부파일 피디에프.pdf{' '}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="bbs-footer !mt-auto">
            <div className="footer-menu">
              <Button type="default" className="">
                수정
              </Button>
              <Button type="default" className="" htmlType="submit">
                삭제
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
