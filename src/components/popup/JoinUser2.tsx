'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui';
import { Form, Input, Button, Image, Checkbox } from 'antd';

interface JoinUser2Props {
  open: boolean;
  onClose: () => void;
  type: string;
}

export default function JoinUser2({ type, open, onClose }: JoinUser2Props) {
  const [form] = Form.useForm();
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [sns, setSns] = useState('hongkildong@gmail.com');

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
        {/* 아이디 */}
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            id: '',
            password: '',
            passwordRepeat: '',
            name: '',
            phone: '',
            email: '',
            code: '',
            sns: 'hongkildong@gmail.com',
          }}
          className="login-input no-margin"
        >
          <div className="flex flex-row justify-center">
            <Form.Item name="num" className="login-input w-288" help="사용가능한 아이디입니다.">
              <Input
                placeholder="아이디"
                value={id}
                onChange={(e) => setid(e.target.value)}
                className="success"
                suffix={<></>}
              />
            </Form.Item>
            <Button className="ml-1 tiny" type="primary" size="large" disabled={!id}>
              중복확인
            </Button>
          </div>

          <Form.Item
            name="password"
            // validateStatus="error"
            help="최대 13자, 대문자 포함, 연속된 숫자 3자 이상 금지, 특수기호 !@#$%^&*()_+-="
            className="login-input "
          >
            <Input.Password
              placeholder="비밀번호 입력"
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

          <Form.Item name="name" className="login-input">
            <Input
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="success"
              suffix={<></>}
            />
          </Form.Item>

          <Form.Item name="phone" className="login-input">
            <Input
              placeholder="핸드폰 번호"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/[^0-9]/g, ''));
                form.setFieldValue('phone', e.target.value.replace(/[^0-9]/g, ''));
              }}
              className="success"
              suffix={<></>}
            />
          </Form.Item>
          {type === 'email' ? (
            // 이메일일 경우
            <>
              <div className="flex flex-row justify-center">
                <Form.Item name="email" className="login-input w-288">
                  <Input
                    placeholder="이메일 입력"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="success"
                    suffix={<></>}
                  />
                </Form.Item>
                <Button className="ml-1 tiny" type="primary" size="large" disabled={!email}>
                  인증코드 발송
                </Button>
              </div>

              <div className="flex flex-row justify-center relative">
                <Form.Item name="code" className="login-input w-288">
                  <Input
                    placeholder="인증코드"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="success"
                    suffix={<span className="text-[13px] text-gray-500">4:59</span>}
                  />
                </Form.Item>
                <Button className="ml-1 tiny" type="primary" size="large" disabled={!code}>
                  확인
                </Button>
                <div className="err-msg absolute -bottom-1 left-0">
                  “인증코드 입력시간이 초과되었습니다. 재전송 버튼을 눌러주시기 바랍니다.“
                </div>
              </div>
              <p className="code-restart">
                인증 코드가 오지 않았나요? <Button type="text">재전송</Button>
              </p>
            </>
          ) : (
            // sns일 경우
            <Form.Item name="sns" className="login-input">
              <Input
                value={sns}
                className="success no-icon"
                suffix={<span className="text-[13px] text-gray-500">카카오톡 인증완료</span>}
                disabled
              />
            </Form.Item>
          )}
        </Form>

        <ul className="agree-con mb-4">
          <li>
            <Form.Item name="terms" valuePropName="terms">
              <Checkbox>이용약관 및 개인정보 처리방침에 동의합니다. (필수)</Checkbox>
            </Form.Item>
            <Button type="text">
              <Image src="/icons/ico-arrow-right2.svg" alt="보기" preview={false} />
            </Button>
          </li>
          <li>
            <Form.Item name="alarm" valuePropName="alarm">
              <Checkbox>서비스 알람 수신에 동의합니다.(선택)</Checkbox>
            </Form.Item>
            <Button type="text">
              <Image src="/icons/ico-arrow-right2.svg" alt="보기" preview={false} />
            </Button>
          </li>
        </ul>

        <Button type="primary" size="large" disabled>
          가입하기
        </Button>

        <p className="bottom-msg">
          이미 계정이 있으신가요? <Button type="text">로그인</Button>
        </p>
      </div>
    </Modal>
  );
}
