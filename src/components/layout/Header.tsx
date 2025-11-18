'use client';

import { Button } from 'antd';
import Image from 'next/image';

type HeaderMenuConfig = {
  id: 'bbs' | 'support' | 'userInfo' | 'system' | 'logout';
  label: string;
  icon?: string;
};

const HEADER_MENUS: ReadonlyArray<HeaderMenuConfig> = [
  { id: 'bbs', label: '유휴자원관리 게시판' },
  { id: 'support', label: '문의 및 지원' },
  { id: 'userInfo', label: '사용자 정보' },
  { id: 'system', label: '시스템관리' },
  { id: 'logout', label: '로그아웃', icon: '/icons/ico-logout.svg' },
];

export type HeaderMenuKey = HeaderMenuConfig['id'];

interface HeaderProps {
  activeMenu?: HeaderMenuKey | null;
  onMenuClick?: (menuId: HeaderMenuKey) => void;
}

export default function Header({ activeMenu = null, onMenuClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-wrap">
          <h1>대전 스마트물류 플랫폼</h1>
          <p>Daejeon Smart Logistics Integrated Platform</p>
        </div>

        <nav className="nav-menu">
          {HEADER_MENUS.map((menu) => (
            <Button
              key={menu.id}
              type="text"
              className={`nav-item ${activeMenu === menu.id ? 'active' : ''}`}
              onClick={() => onMenuClick?.(menu.id)}
            >
              {menu.label}
              {menu.icon && <Image src={menu.icon} alt={menu.label} width={24} height={24} />}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
