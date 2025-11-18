'use client';

import ContentModal from '@/components/ui/ContentModal';
import { Button, Input } from 'antd';

interface BbsProps {
  open: boolean;
  onCloseAction: () => void;
}

export default function BbsPopup({ open, onCloseAction }: BbsProps) {
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
      <div className="modal-con-body">asdasd</div>
    </ContentModal>
  );
}
