'use client';
import { Modal } from '@/components/ui';
import { Form, Input, Checkbox, Button } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

interface FindAccountProps {
  open: boolean;
  onClose: () => void;
}

export default function FindAccount({ open, onClose }: FindAccountProps) {
  const [form] = Form.useForm();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [activeTab, setActiveTab] = useState<'findId' | 'changePassword'>('findId');
  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="아이디 찾기 / 비밀번호 변경"
      size="default"
      showFooter={false}
      className="account-modal"
    >
      <div className="flex-grow flex flex-col">
        <div className="tab-buttons ">
          <Button
            type={activeTab === 'findId' ? 'primary' : 'default'}
            onClick={() => setActiveTab('findId')}
          >
            아이디 찾기
          </Button>
          <Button
            type={activeTab === 'changePassword' ? 'primary' : 'default'}
            onClick={() => setActiveTab('changePassword')}
          >
            비밀번호 변경
          </Button>
        </div>
        {/* 아이디 찾기 폼 */}
        {activeTab === 'findId' && (
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{ name: '', email: '' }}
          >
            <Form.Item
              name="email"
              className="login-input"
              // validateStatus="error"
            >
              <Input
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suffix={
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('');
                      form.resetFields(['email']);
                    }}
                    className={`${!email ? 'opacity-0 pointer-events-none' : ''}`}
                    title="삭제"
                  >
                    <Image src="/icons/ico-del-form.svg" alt="삭제" width={20} height={20} />
                  </button>
                }
              />
            </Form.Item>

            <Form.Item
              name="name"
              className="login-input"
              validateStatus="error"
              help="해당 사용자의 아이디를 찾을 수 없습니다."
            >
              <Input
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                suffix={
                  <button
                    type="button"
                    onClick={() => {
                      setName('');
                      form.resetFields(['name']);
                    }}
                    className={`${!name ? 'opacity-0 pointer-events-none' : ''}`}
                    title="삭제"
                  >
                    <Image src="/icons/ico-del-form.svg" alt="삭제" width={20} height={20} />
                  </button>
                }
              />
            </Form.Item>
            <Form.Item className="!mt-auto">
              <Button type="primary" size="large" htmlType="submit" disabled>
                확인
              </Button>
            </Form.Item>
            <p className="bottom-msg"></p>
          </Form>
        )}

        {/* 비밀번호 변경 폼 */}
        {activeTab === 'changePassword' && (
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{ id: 'hongkildong123', email: '', password: '', passwordRepeat: '' }}
          >
            <Form.Item name="id" className="login-input" validateStatus="error">
              <Input
                placeholder="아이디 입력"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="success"
                suffix={
                  <button
                    type="button"
                    onClick={() => {
                      setId('');
                      form.resetFields(['id']);
                    }}
                    className={`${!id ? 'opacity-0 pointer-events-none' : ''}`}
                    title="삭제"
                  >
                    <Image src="/icons/ico-del-form.svg" alt="삭제" width={20} height={20} />
                  </button>
                }
                disabled
              />
            </Form.Item>

            <Form.Item
              name="email"
              className="login-input"
              // validateStatus="error"
            >
              <Input
                placeholder="이메일 입력"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suffix={
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('');
                      form.resetFields(['email']);
                    }}
                    className={`${!email ? 'opacity-0 pointer-events-none' : ''}`}
                    title="삭제"
                  >
                    <Image src="/icons/ico-del-form.svg" alt="삭제" width={20} height={20} />
                  </button>
                }
              />
            </Form.Item>
            <div className="code-group mt-0.5">
              <Form.Item
                name="code"
                className="login-input !mt-0"
                // validateStatus="error"
                // help="인증코드 입력시간이 초과되었습니다. 재전송 버튼을 눌러주시기 바랍니다."
              >
                <Input
                  placeholder="인증코드"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  suffix={<span className="text-[13px] text-gray-500">4:59</span>}
                />
              </Form.Item>
              <Button
                type="primary"
                size="large"
                className="!w-32 flex-none !absolute right-0 top-0 !h-[45px]"
              >
                확인
              </Button>
            </div>
            <p className="bottom-msg">
              비밀번호가 기억나지 않으세요? <Button type="text">비밀번호 찾기</Button>
            </p>
            <Form.Item
              name="password"
              // validateStatus="error"
              help="최대 13자, 대문자 1자 포함, 특수기호 !@#$%^&*()_+-=, 연속된숫자 3자 이상 금지"
              className="login-input "
            >
              <Input.Password
                placeholder="비밀번호"
                size="large"
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
            <Form.Item
              name="passwordRepeat"
              validateStatus="error"
              help="비밀번호가 일치하지 않습니다."
              className="login-input"
            >
              <Input.Password
                placeholder="비밀번호 확인"
                size="large"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
                suffix={
                  passwordRepeat && (
                    <button
                      type="button"
                      onClick={() => {
                        setPasswordRepeat('');
                        form.resetFields(['passwordRepeat']);
                      }}
                    >
                      <Image src="/icons/ico-del-form.svg" alt="삭제" width={20} height={20} />
                    </button>
                  )
                }
              />
            </Form.Item>
            <div className="text-reset mt-28">
              인증코드 확인되었습니다. <br /> 비밀번호를 변경해주세요.
            </div>
            <Form.Item className="!mt-auto">
              <Button type="primary" size="large" htmlType="submit">
                계정 확인
              </Button>
              <Button type="primary" size="large">
                인증코드 발송
              </Button>
              <Button type="primary" size="large">
                다음단계
              </Button>
              <Button type="primary" size="large" disabled>
                변경하기
              </Button>
            </Form.Item>
            <p className="bottom-msg"></p>
          </Form>
        )}
      </div>
    </Modal>
  );
}
