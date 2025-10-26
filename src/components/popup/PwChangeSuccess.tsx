'use client';
import { Modal } from '@/components/ui';
import { Button } from 'antd';

interface PwChangeSuccessProps {
  open: boolean;
  onClose: () => void;
}

export default function PwChangeSuccess({ open, onClose }: PwChangeSuccessProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      size="default"
      showFooter={false}
      className="account-modal"
    >
      <div className="flex-grow flex flex-col">
        <div className="text-reset mt-60">
          비밀번호 변경이 완료되었습니다. <br /> 새로운 비밀번호로 로그인해주세요.
        </div>
        <Button type="primary" size="large" className="mt-auto">
          로그인 하러가기
        </Button>
        <p className="bottom-msg"></p>
      </div>
    </Modal>
  );
}
