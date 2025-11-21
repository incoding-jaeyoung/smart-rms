'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui';

interface ContentModalProps {
  open: boolean;
  onCloseAction: () => void;
  children?: ReactNode;
  className?: string;
}

export default function ContentModal({
  open,
  onCloseAction,
  children,
  className,
}: ContentModalProps) {
  return (
    <Modal
      open={open}
      onCancel={onCloseAction}
      showFooter={false}
      title={undefined}
      showHeader={false}
      maskClosable={false}
      mask={true}
      wrapClassName="content-modal-wrap"
      className={`content-modal ${className ?? ''}`}
      width={1180}
    >
      <button
        type="button"
        className="content-modal__close"
        onClick={onCloseAction}
        aria-label="닫기"
      >
        <Image src="/icons/ico-close.svg" alt="닫기" width={30} height={30} />
      </button>
      <div className="content-modal__body">{children}</div>
    </Modal>
  );
}
