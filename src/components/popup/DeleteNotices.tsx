'use client';

import { Modal } from '@/components/ui';
import { DeleteFilled } from '@ant-design/icons';

interface DeleteNoticesProps {
  open: boolean;
  onClose: () => void;
}

export default function DeleteNotices({ open, onClose }: DeleteNoticesProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="Are you sure <br> you want to delete this notice?"
      size="small"
      confirmText="Delete"
      cancelText="Cancel"
      confirmIcon={<DeleteFilled />}
      className="confirm-modal"
    >
      <div className="confirm-modal-content">notice title...</div>
    </Modal>
  );
}
