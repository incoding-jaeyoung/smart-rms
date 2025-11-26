'use client';
import { Button } from 'antd';
import Image from 'next/image';
import PopupDefault from './PopupDefault';

interface PopupDefaultBatteryProps {
  open: boolean;
  onClose: () => void;
}

export default function PopupDefaultBattery({ open, onClose }: PopupDefaultBatteryProps) {
  return (
    <PopupDefault type="default" open={open} onClose={onClose}>
      <div className="default-popup-content">
        <h2>
          배터리가 5%이하입니다. <br />
          충전이 필요합니다.
        </h2>
        <div className="mt-6">
          <p>장비ID 00000000</p>
          <p>장비ID 00000000</p>
        </div>
      </div>
      <div className="popup-btn-wrap">
        <Button type="primary" className="" onClick={onClose}>
          알람 관리 설정
        </Button>
      </div>
    </PopupDefault>
  );
}
