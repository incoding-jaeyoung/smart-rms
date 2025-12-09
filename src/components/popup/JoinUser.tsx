'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui';
import { Form, Input, Select, Button, Space, DatePicker } from 'antd';
import { Dayjs } from 'dayjs';

interface JoinUserProps {
  open: boolean;
  onClose: () => void;
}

export default function JoinUser({ open, onClose }: JoinUserProps) {
  const [form] = Form.useForm();
  const [num, setNum] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);
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
          <Form.Item
            name="num"
            //validateStatus="error" 벨리데이션 실패 시
          >
            <Input
              placeholder="사업자번호 입력 (필수)"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              className=""
              suffix={<></>}
              // disabled={true}
            />
          </Form.Item>
          <div className="err-msg h-6 !mt-0 flex items-center">
            사업자등록번호가 올바르지 않습니다. 다시 입력해 주시기 바랍니다.
          </div>
          <Space direction="vertical" size={24}>
            <Form.Item>
              <Input
                placeholder="대표자명(필수)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=""
                suffix={<></>}
              />
            </Form.Item>
            <Form.Item name="date">
              <DatePicker
                placeholder="개업일자(필수)"
                value={date}
                onChange={(value) => setDate(value)}
                format="YYYY.MM.DD"
                className="join-user-date-picker"
                size="large"
              />
            </Form.Item>
            <Button
              type="primary"
              size="large"
              onClick={() => setEnterNum(true)}
              disabled={!num || enterNum}
            >
              사업자 번호 확인
            </Button>
            <Form.Item name="act" className="join-user-select">
              <Select placeholder="역할 선택 (필수)" onChange={(value) => setAct(value)}>
                <Select.Option value="1">화주(OWNER)</Select.Option>
                <Select.Option value="2">일반사용자 (공유사용자)</Select.Option>
              </Select>
            </Form.Item>
          </Space>
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
