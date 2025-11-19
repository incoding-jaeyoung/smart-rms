'use client';

import ContentModal from '@/components/ui/ContentModal';
import { Button } from 'antd';

interface EnergyStatusProps {
  open: boolean;
  onCloseAction: () => void;
  onOpenDetail: () => void;
}

export default function EnergyStatusPopup({
  open,
  onCloseAction,
  onOpenDetail,
}: EnergyStatusProps) {
  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header"></div>
      <div className="modal-con-body">
        <div className="popup-content">
          데이터 컨텐츠 영역
          <div className="bbs-footer !mt-auto">
            <div className="footer-menu">
              <Button type="default" className="">
                알람 관리 설정
              </Button>
              <Button
                type="default"
                className=""
                onClick={() => {
                  onCloseAction();
                  onOpenDetail();
                }}
              >
                데이터 집계
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
