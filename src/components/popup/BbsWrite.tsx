'use client';

import ContentModal from '@/components/ui/ContentModal';
import Image from 'next/image';
import { Button, Input } from 'antd';

interface BbsWriteProps {
  open: boolean;
  onCloseAction: () => void;
  onOpenList: () => void;
}

export default function BbsWritePopup({ open, onCloseAction, onOpenList }: BbsWriteProps) {
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
          <div className="bbs-write-form">
            <Input placeholder="제목을 입력해주세요" className="bbs-form" />
            {/* <div className="content-editer">에디터 삽입시 이 영역 사용</div> */}
            <Input.TextArea placeholder="내용을 입력해주세요" className="bbs-form !mt-[17px]" />
            <div className="file-upload">
              <p className="flex items-center gap-1 leading-none h-6 font-medium">
                첨부파일 보기 (최대 5개)
                <button type="button" className="my">
                  내 PC
                </button>
              </p>
              <div className="file-list">
                {/* <p className="file-msg">
                  <Image src="/icons/ico-file.svg" alt="" width={20} height={20} />
                  <span>파일을 마우스로 끌어오세요.</span>
                </p> */}
                <ul>
                  <li>
                    첨부파일
                    <button type="button">
                      <Image src="/icons/ico-delete-file.svg" alt="" width={18} height={18} />
                    </button>
                  </li>
                  <li>
                    첨부파일 _피디에프 첨부파일 피디에프 첨부파일 피디에프.pdf
                    <button type="button">
                      <Image src="/icons/ico-delete-file.svg" alt="" width={18} height={18} />
                    </button>
                  </li>
                  <li>
                    첨부파일 _피디에프.pdf
                    <button type="button">
                      <Image src="/icons/ico-delete-file.svg" alt="" width={18} height={18} />
                    </button>
                  </li>
                  <li>
                    첨부파일 _피디에프 첨부파일 피디에프 첨부파일 피디에프.pdf
                    <button type="button">
                      <Image src="/icons/ico-delete-file.svg" alt="" width={18} height={18} />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bbs-footer !mt-auto">
            <div className="footer-menu">
              <Button type="default" className="">
                취소
              </Button>
              <Button type="default" className="" htmlType="submit">
                등록
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
