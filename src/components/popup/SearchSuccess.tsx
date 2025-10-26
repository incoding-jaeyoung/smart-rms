'use client';
import { Modal } from '@/components/ui';
import { Button } from 'antd';

interface SearchSuccessProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchSuccess({ open, onClose }: SearchSuccessProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="휴대전화로 입력된 아이디가 있습니다."
      size="default"
      showFooter={false}
      className="account-modal"
    >
      <div className="flex-grow flex flex-col">
        <div className="user-id">
          <dl>
            <dt>hongkildong123</dt>
            <dd>2025.9.7 가입</dd>
          </dl>
        </div>
        <Button type="primary" size="large" className="mt-7">
          로그인 하러가기
        </Button>
        <p className="bottom-msg">
          비밀번호가 기억나지 않으세요? <Button type="text">비밀번호 찾기</Button>
        </p>
      </div>
    </Modal>
  );
}
