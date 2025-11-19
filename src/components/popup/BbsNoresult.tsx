'use client';

import ContentModal from '@/components/ui/ContentModal';
import { Button, Input } from 'antd';

interface BbsNoresultProps {
  open: boolean;
  onCloseAction: () => void;
  onOpenWrite: () => void;
}

export default function BbsNoresultPopup({ open, onCloseAction, onOpenWrite }: BbsNoresultProps) {
  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header">
        <div className="flex items-center gap-1.5 w-[510px]">
          <Input placeholder="검색(제목 및 작성자)" className="input-content input-search" />
          <Button size="large" type="default" className="">
            검색
          </Button>
        </div>
      </div>
      <div className="modal-con-body">
        <div className="popup-content">
          <div className="noResult">검색결과가 없습니다.</div>
          <div className="bbs-footer">
            <div className="footer-menu">
              <Button
                type="default"
                className=""
                onClick={() => {
                  onCloseAction();
                  onOpenWrite();
                }}
              >
                글쓰기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
