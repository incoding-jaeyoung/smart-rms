'use client';

import { Modal } from '@/components/ui';
import { Form, Input, Checkbox, Button } from 'antd';

interface LogInProps {
  open: boolean;
  onClose: () => void;
}

export default function LogIn({ open, onClose }: LogInProps) {
  const [form] = Form.useForm();

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      title="대전 스마트 물류장에 오신걸 환영합니다."
      size="small"
      showFooter={false}
      noAnimation={true}
    >
      <div className="text-white">
        {/* 환영 메시지 */}
        <div className="text-center">
          <h2>대전 스마트 물류장에 오신걸 환영합니다.</h2>
          <p>계속하려면 로그인하세요.</p>
        </div>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* 아이디 입력 필드 */}
          <Form.Item name="username" validateStatus="error" help="아이디를 입력해주세요.">
            <Input placeholder="아이디를 입력해주세요" size="large" />
          </Form.Item>

          {/* 비밀번호 입력 필드 */}
          <Form.Item name="password" validateStatus="error" help="비밀번호를 입력해주세요.">
            <Input.Password placeholder="비밀번호를 입력해주세요" size="large" />
          </Form.Item>

          {/* 아이디 기억하기 & 비밀번호 찾기 */}
          <div className="login-options text-center">
            <Form.Item name="remember" valuePropName="checked" className="remember-checkbox">
              <Checkbox>아이디 기억하기</Checkbox>
            </Form.Item>
            <div className="forgot-password">
              <a href="#">아이디 | 비밀번호를 잊으셨나요?</a>
            </div>
          </div>

          {/* 로그인 버튼 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              로그인
            </Button>
          </Form.Item>
        </Form>

        {/* SNS 로그인 */}
        <div className="sns-login text-center">
          <p>SNS계정으로 간편 로그인/회원가입</p>
          <div className="sns-buttons">
            <Button className="kakao-button">
              <img src="/icons/kakao-icon.svg" alt="카카오톡" />
              카카오톡
            </Button>
            <Button className="naver-button">
              <img src="/icons/naver-icon.svg" alt="네이버" />
              네이버
            </Button>
          </div>
        </div>

        {/* 이메일 회원가입 */}
        <div className="email-signup text-center">
          <Button className="email-signup-button">이메일을 통한 회원가입</Button>
        </div>

        {/* 고객센터 */}
        <div className="customer-service text-center">
          <p>로그인에 문제가 있으신가요? 고객센터 070-4132-6116</p>
        </div>
      </div>
    </Modal>
  );
}
