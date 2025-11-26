'use client';
import { Modal as AntModal } from 'antd';

interface PopupDefaultProps {
  open: boolean;
  onClose: () => void;
  type: string;
  children?: React.ReactNode;
}

export default function PopupDefault({ type, open, onClose, children }: PopupDefaultProps) {
  return (
    <AntModal
      open={open}
      onCancel={onClose}
      footer={null}
      closable
      maskClosable={false}
      wrapClassName="popup-default-wrap"
      className="popup-default"
      data-popup-type={type}
      zIndex={1999}
    >
      {children}
    </AntModal>
  );
}
