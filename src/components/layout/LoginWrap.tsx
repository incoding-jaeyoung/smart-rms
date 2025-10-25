'use client';

import { Form, Input, Checkbox, Button } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

interface LoginProps {
  children?: React.ReactNode;
  handleResetPassword: () => void;
}

export default function Login({ children, handleResetPassword }: LoginProps) {
  const [form] = Form.useForm();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log('Login component rendered'); // 디버깅용

  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  return (
    <div className="login-wrap">
      <div className="login-content">
        <h1>
          Daejeon Smart Logistics <br /> Integrated Platform
        </h1>
        <p>대전 스마트물류 플랫폼</p>
      </div>
      <div className="ant-modal-content">
        <div className="ant-modal-body">
          <div className="login-modal-content">
            <h2>Welcome</h2>
            <p className="text">대전 스마트 물류 플랫폼에 오신걸 환영합니다.</p>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              {/* 아이디 입력 필드 */}
              <Form.Item
                name="username"
                // validateStatus="error"
                // help="아이디를 입력해주세요."
                className="login-input id-input h-[65px]"
              >
                <Input
                  placeholder="아이디"
                  className="h-[45px]"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  suffix={
                    <button
                      type="button"
                      onClick={() => {
                        setUsername('');
                        form.resetFields(['username']);
                      }}
                      className={`text-gray-400 hover:text-gray-600 transition-colors ${!username ? 'opacity-0 pointer-events-none' : ''}`}
                      title="삭제"
                    >
                      <Image src="/icons/ico-del-form.svg" alt="삭제" width={20} height={20} />
                    </button>
                  }
                />
              </Form.Item>

              {/* 비밀번호 입력 필드 */}
              <Form.Item
                name="password"
                // validateStatus="error"
                // help="비밀번호를 입력해주세요."
                className="login-input pw-input h-[65px]"
              >
                <Input.Password
                  placeholder="비밀번호"
                  size="large"
                  className="h-[45px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  suffix={
                    password && (
                      <button
                        type="button"
                        onClick={() => {
                          setPassword('');
                          form.resetFields(['password']);
                        }}
                      >
                        <Image src="/icons/ico-del-form.svg" alt="삭제" width={20} height={20} />
                      </button>
                    )
                  }
                />
              </Form.Item>

              {/* 아이디 기억하기 & 비밀번호 찾기 */}
              <div className="login-options">
                <Form.Item name="remember" valuePropName="checked" className="remember-checkbox">
                  <Checkbox>아이디 기억하기</Checkbox>
                </Form.Item>
                <div className="forgot-password">
                  <Button type="text" size="small" onClick={handleResetPassword}>
                    아이디 | 비밀번호를 잊으셨나요?
                  </Button>
                </div>
              </div>

              {/* 로그인 버튼 */}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-button">
                  Login
                </Button>
              </Form.Item>
            </Form>
            {/* SNS 로그인 */}
            <div className="sns-login">
              <p>SNS계정으로 간편 로그인/회원가입</p>
              <div className="sns-buttons">
                <button type="button" className="kakao-button">
                  <img src="/icons/ico-naver.svg" alt="네이버" />
                </button>
                <button type="button" className="naver-button">
                  <img src="/icons/ico-kakao.svg" alt="카카오톡" />
                </button>
              </div>
            </div>
            {/* 이메일 회원가입 */}
            <div className="email-signup">
              <button type="button">이메일을 통한 회원가입</button>
            </div>
            {/* 고객센터 */}
            <div className="customer-service">
              <p>로그인에 문제가 있으신가요? 고객센터 070-4132-6116</p>
            </div>
          </div>
        </div>
      </div>
      <div className="login-footer">
        <div>
          <p>
            ooo(도메인)은 대전산업단지 내 입주한 중소형 제조업체들이 공동으로 활용할 수 있도록
            설계된 혁신적인 물류 인프라입니다. 개별적으로는 구축하기 어려운 첨단 물류 시스템을
            공동으로 활용함으로써, 물류비를 획기적으로 줄이고 운영 효율성을 높일 수 있습니다.
          </p>
          <p>
            본 플랫폼은 정부지원사업을 통해 구축된 시스템으로, 국가의 지원과 검증을 바탕으로
            안정성과 신뢰성을 확보하여 중소·중견 제조업체들도 대기업 수준의 스마트 물류 서비스를
            부담 없이 이용할 수 있으며, 클라우드 기반의 확장성과 IoT·AI 기술을 결합한 실시간 물류
            최적화를 경험할 수 있습니다.
          </p>
        </div>
        <p className="flex items-center gap-1">
          <Image src="/images/img-company-01.png" alt="한국산업단지공단" width={136} height={34} />
          <Image src="/images/img-company-02.png" alt="산업통상부" width={144} height={32} />
        </p>
      </div>
    </div>
  );
}
