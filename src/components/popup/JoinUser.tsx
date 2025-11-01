'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui';
import { Form, Input, Select, Button } from 'antd';

interface JoinUserProps {
  open: boolean;
  onClose: () => void;
}

export default function JoinUser({ open, onClose }: JoinUserProps) {
  const [form] = Form.useForm();
  const [num, setNum] = useState('');
  const [act, setAct] = useState('');
  const [enterNum, setEnterNum] = useState(false);

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={() => form.submit()}
      title=""
      size="default"
      showFooter={false}
      className="account-modal"
    >
      <div className="flex-grow flex flex-col">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ num: '', act: undefined }}
          className="login-input no-margin"
        >
          <div className="flex flex-row justify-center mb-5">
            <Form.Item
              name="num"
              className="w-288"
              //validateStatus="error" 벨리데이션 실패 시
            >
              <Input
                placeholder="사업자번호 입력 (필수)"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                className="success"
                suffix={<></>}
                disabled={enterNum}
              />
            </Form.Item>
            <Button
              className="ml-1 tiny"
              type="primary"
              size="large"
              onClick={() => setEnterNum(true)}
              disabled={!num || enterNum}
            >
              번호확인
            </Button>
          </div>

          <Form.Item name="act" className="w-full">
            <Select placeholder="역할 선택 (필수)" onChange={(value) => setAct(value)}>
              <Select.Option value="1">화주(OWNER)</Select.Option>
              <Select.Option value="2">일반사용자 (공유사용자)</Select.Option>
            </Select>
          </Form.Item>

          <div className="err-msg">
            사업자등록번호가 올바르지 않습니다. 다시 입력해 주시기 바랍니다.
          </div>
        </Form>

        <Button type="primary" size="large">
          다음단계 <img className="ml-1" src="/icons/ico-arrow-right.svg" />
        </Button>

        <p className="bottom-msg">
          이미 계정이 있으신가요? <Button type="text">로그인</Button>
        </p>
      </div>
    </Modal>
  );
}
