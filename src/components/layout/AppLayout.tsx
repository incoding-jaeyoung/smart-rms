'use client';

import { Layout } from 'antd';
import { ReactNode } from 'react';
import Header from './Header';

const { Content } = Layout;

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <Layout className="wrapper">
      {/* 상단 헤더 - 전체 너비 */}
      <Header />

      {/* 메인 컨텐츠 영역 */}
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
