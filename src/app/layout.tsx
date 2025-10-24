import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ConfigProvider, antdConfig } from '@/lib/antd';
import AntdWarningFilter from '@/components/AntdWarningFilter';

export const metadata: Metadata = {
  title: '대전스마트물류센터',
  description: '대전스마트물류센터 관리 시스템',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <AntdWarningFilter />
        <ConfigProvider {...antdConfig}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
