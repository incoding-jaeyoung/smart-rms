export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  closable?: boolean;
}

export const menuLabels: { [key: string]: string } = {
  dashboard: '대시보드',
  'logistics-info': '물류 정보',
  inventory: '재고 관리',
  'order-management': '주문 관리',
  warehouse: '창고 관리',
  report: '리포트',
  setup: '설정',
  notice: '공지사항',
};

export const getMenuLabel = (menuKey: string): string => {
  return menuLabels[menuKey] || menuKey;
};
