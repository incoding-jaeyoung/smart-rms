'use client';
import { Modal } from '@/components/ui';
import { Form, Input } from 'antd';

interface ChangePasswordProps {
  open: boolean;
  onClose: () => void;
}

export default function ChangePassword({ open, onClose }: ChangePasswordProps) {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="아이디 찾기 / 비밀번호 변경"
      size="default"
      confirmText="Reset Password"
      cancelText="Cancel"
      className=""
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="flex flex-col gap-5">
          <Form.Item name="currentPassword" label="Current Password">
            <Input.Password placeholder="" className="!h-13" />
          </Form.Item>

          <Form.Item name="newPassword" label="New Password">
            <Input.Password placeholder="" className="!h-13" />
          </Form.Item>

          <Form.Item name="confirmPassword" label="Confirm New Password">
            <Input.Password placeholder="" className="!h-13" />
          </Form.Item>
        </div>
        <p className="caution-msg mt-3 flex items-center gap-1 px-2.5 text-red-500 font-medium">
          <img src="/icons/ico-caution.svg" alt="warning" />
          <span>Current password is incorrect</span>
        </p>
      </Form>
    </Modal>
  );
}
