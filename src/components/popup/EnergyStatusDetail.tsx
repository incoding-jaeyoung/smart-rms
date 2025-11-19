'use client';

import ContentModal from '@/components/ui/ContentModal';
import Image from 'next/image';

interface EnergyDetailProps {
  open: boolean;
  onCloseAction: () => void;
}

export default function EnergyDetailPopup({ open, onCloseAction }: EnergyDetailProps) {
  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header">
        <div className="flex items-center gap-1.5 w-[510px]">
          <button type="button" className="btn-back">
            <Image src="/icons/ico-back.svg" alt="" width={30} height={30} />
            목록
          </button>
        </div>
      </div>
      <div className="modal-con-body">
        <div className="popup-content">데이터 컨텐츠 영역</div>
      </div>
    </ContentModal>
  );
}
