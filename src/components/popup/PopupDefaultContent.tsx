'use client';
import { Button } from 'antd';
import Image from 'next/image';
import PopupDefault from './PopupDefault';

interface PopupDefaultContentProps {
  open: boolean;
  onClose: () => void;
}

export default function PopupDefaultContent({ open, onClose }: PopupDefaultContentProps) {
  return (
    <PopupDefault type="default" open={open} onClose={onClose}>
      <Image src="/icons/ico-warning.svg" alt="" width={50} height={50} className="mx-auto mb-10" />
      <div className="default-popup-content">
        <h2>RTU_2 작동 중지</h2>
        <p className="mt-10 !font-semibold">
          습도 심각 단계 이벤트 감지 <br /> A3 구역 00번 센서
        </p>
        <p className="mt-10 !font-semibold">
          습도 심각 단계 이벤트 감지 <br /> A3 구역 00번 센서
        </p>
        <p className="mt-10 !font-semibold">
          습도 심각 단계 이벤트 감지 <br /> A3 구역 00번 센서
        </p>
        <p className="mt-10 !font-semibold">
          습도 심각 단계 이벤트 감지 <br /> A3 구역 00번 센서
        </p>
        <p className="mt-10 !font-semibold">
          습도 심각 단계 이벤트 감지 <br /> A3 구역 00번 센서
        </p>
        <p className="mt-10 !font-semibold">
          습도 심각 단계 이벤트 감지 <br /> A3 구역 00번 센서
        </p>
        <p className="mt-10 !font-semibold">
          습도 심각 단계 이벤트 감지 <br /> A3 구역 00번 센서
        </p>
      </div>
      <div className="popup-btn-wrap">
        <Button type="primary" className="" onClick={onClose}>
          오류 및 이벤트 관리
        </Button>
      </div>
    </PopupDefault>
  );
}
