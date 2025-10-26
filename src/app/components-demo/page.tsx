'use client';

import { useState } from 'react';
import { Button, Form, Input, Select, Space, Checkbox, Radio, Switch, DatePicker } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import Image from 'next/image';
export default function ComponentsDemoPage() {
  const [form] = Form.useForm();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (values: unknown) => {
    console.log('Form values:', values);
  };

  return (
    <div className="contents">
      {/* 버튼 섹션 */}
      <section className="demo-section">
        <h3 className="demo-title">Buttons</h3>

        {/* 버튼 타입 */}
        <div className="demo-block">
          <h4 className="demo-subtitle">Button Types</h4>
          <Space wrap>
            <Button type="primary">Primary</Button>
            <Button type="default">Default</Button>
            <Button type="text">Text</Button>
          </Space>
        </div>

        {/* 버튼 사이즈 */}
        <div className="demo-block">
          <h4 className="demo-subtitle">Button Sizes</h4>
          <Space wrap align="center">
            <Button type="primary" size="large" className="!w-50">
              Large
            </Button>
            <Button type="primary" size="large" className="!w-50" disabled>
              Large
            </Button>
            <Button type="primary" size="middle" className="!w-50">
              Middle
            </Button>
            <Button type="primary" size="small" className="!w-50">
              Small
            </Button>
          </Space>
        </div>

        {/* 버튼 아이콘 */}
        <div className="demo-block">
          <h4 className="demo-subtitle">Buttons with Icons</h4>
          <Space wrap>
            <Button type="primary" icon={<PlusOutlined />}>
              Add new
            </Button>
            <Button icon={<EditOutlined />}>Edit</Button>
            <Button icon={<DeleteOutlined />}>Delete</Button>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
          </Space>
        </div>

        {/* 버튼 상태 */}
        <div className="demo-block">
          <h4 className="demo-subtitle">Button States</h4>
          <Space wrap>
            <Button type="primary">Normal</Button>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" disabled>
              Disabled
            </Button>
            <Button type="primary" danger>
              Danger
            </Button>
            <Button type="primary" danger disabled>
              Danger Disabled
            </Button>
          </Space>
        </div>

        {/* 아이콘 위치 */}
        <div className="demo-block">
          <h4 className="demo-subtitle">Icon Position</h4>
          <Space wrap>
            <Button type="primary" icon={<PlusOutlined />} iconPosition="start">
              Icon Start
            </Button>
            <Button type="primary" icon={<PlusOutlined />} iconPosition="end">
              Icon End
            </Button>
          </Space>
        </div>
      </section>

      {/* 폼 섹션 */}
      <section className="demo-section">
        <h3 className="demo-title">Form Components</h3>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ id: 'hongkildong123', password: 'password123' }}
        >
          {/* Input */}
          <div className="demo-block">
            <h4 className="demo-subtitle">Input</h4>
            <Space direction="vertical" style={{ width: '500px' }} size="large">
              <Form.Item name="id" className="login-input">
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
                />
              </Form.Item>
              <Form.Item name="id" className="login-input" help="아이디를 입력해주세요.">
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
                />
              </Form.Item>
              <Form.Item name="id" className="login-input">
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
                />
              </Form.Item>
              <Form.Item
                name="id"
                className="login-input"
                validateStatus="error"
                help="아이디를 입력해주세요."
              >
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
                />
              </Form.Item>
            </Space>
          </div>
          <div className="demo-block">
            <h4 className="demo-subtitle">Input Password</h4>
            <Space direction="vertical" style={{ width: '500px' }} size="large">
              <Form.Item name="password" className="login-input ">
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
                name="password"
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
              <Form.Item name="password" className="login-input " validateStatus="error">
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
                name="password"
                validateStatus="error"
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
            </Space>
          </div>

          {/* Select */}
          <div className="demo-block">
            <h4 className="demo-subtitle">Select</h4>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <Form.Item name="normalSelect" label="Normal Select" className="w-[400px]">
                <Select placeholder="Select option">
                  <Select.Option value="option1">Option 1</Select.Option>
                  <Select.Option value="option2">Option 2</Select.Option>
                  <Select.Option value="option3">Option 3</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="disabledSelect"
                label="Disabled Select"
                initialValue="option1"
                className="w-[400px]"
              >
                <Select placeholder="Select option" disabled>
                  <Select.Option value="option1">Option 1</Select.Option>
                  <Select.Option value="option2">Option 2</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="errorSelect"
                label="Select with Error"
                className="w-[400px]"
                validateStatus="error"
                help="Please select an option"
              >
                <Select placeholder="Select option">
                  <Select.Option value="option1">Option 1</Select.Option>
                  <Select.Option value="option2">Option 2</Select.Option>
                </Select>
              </Form.Item>
            </Space>
          </div>

          {/* Checkbox */}
          <div className="demo-block">
            <h4 className="demo-subtitle">Checkbox</h4>
            <Space direction="vertical" size="middle">
              <Form.Item name="normalCheckbox" valuePropName="checked">
                <Checkbox>Normal Checkbox</Checkbox>
              </Form.Item>

              <Form.Item name="disabledCheckbox" valuePropName="checked" initialValue={true}>
                <Checkbox disabled>Disabled Checkbox (Checked)</Checkbox>
              </Form.Item>

              <Form.Item name="disabledUnchecked" valuePropName="checked">
                <Checkbox disabled>Disabled Checkbox (Unchecked)</Checkbox>
              </Form.Item>

              <Form.Item name="checkboxGroup" label="Checkbox Group">
                <Checkbox.Group>
                  <Space direction="vertical">
                    <Checkbox value="option1">Option 1</Checkbox>
                    <Checkbox value="option2">Option 2</Checkbox>
                    <Checkbox value="option3">Option 3</Checkbox>
                  </Space>
                </Checkbox.Group>
              </Form.Item>
            </Space>
          </div>

          {/* Radio */}
          <div className="demo-block">
            <h4 className="demo-subtitle">Radio</h4>
            <Space direction="vertical" size="large">
              <Form.Item name="normalRadio" label="Normal Radio">
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="option1">Option 1</Radio>
                    <Radio value="option2">Option 2</Radio>
                    <Radio value="option3">Option 3</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item name="disabledRadio" label="Disabled Radio" initialValue="option1">
                <Radio.Group disabled>
                  <Space direction="vertical">
                    <Radio value="option1">Option 1</Radio>
                    <Radio value="option2">Option 2</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item name="horizontalRadio" label="Horizontal Radio">
                <Radio.Group>
                  <Radio value="option1">Option 1</Radio>
                  <Radio value="option2">Option 2</Radio>
                  <Radio value="option3">Option 3</Radio>
                </Radio.Group>
              </Form.Item>
            </Space>
          </div>

          {/* Switch */}
          <div className="demo-block">
            <h4 className="demo-subtitle">Switch</h4>
            <Space direction="vertical" size="middle">
              <Form.Item name="normalSwitch" valuePropName="checked" label="Normal Switch">
                <Switch />
              </Form.Item>

              <Form.Item
                name="checkedSwitch"
                valuePropName="checked"
                initialValue={true}
                label="Checked Switch"
              >
                <Switch />
              </Form.Item>

              <Form.Item name="disabledSwitch" valuePropName="checked" label="Disabled Switch">
                <Switch disabled />
              </Form.Item>

              <Form.Item
                name="disabledCheckedSwitch"
                valuePropName="checked"
                initialValue={true}
                label="Disabled Checked Switch"
              >
                <Switch disabled />
              </Form.Item>
            </Space>
          </div>

          {/* DatePicker */}
          <div className="demo-block">
            <h4 className="demo-subtitle">DatePicker</h4>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <Form.Item name="normalDate" label="Normal DatePicker" className="w-[400px]">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item name="disabledDate" label="Disabled DatePicker" className="w-[400px]">
                <DatePicker disabled style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                name="errorDate"
                label="DatePicker with Error"
                className="w-[400px]"
                validateStatus="error"
                help="Please select a date"
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Space>
          </div>
        </Form>
      </section>
    </div>
  );
}
