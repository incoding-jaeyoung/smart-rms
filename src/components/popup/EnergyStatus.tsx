'use client';

import ContentModal from '@/components/ui/ContentModal';
import { Button, Select } from 'antd';
import Image from 'next/image';
import { useState } from 'react';

interface EnergyStatusProps {
  open: boolean;
  onCloseAction: () => void;
  onOpenDetail: () => void;
}

export default function EnergyStatusPopup({
  open,
  onCloseAction,
  onOpenDetail,
}: EnergyStatusProps) {
  const [activeRangeEnergy, setActiveRangeEnergy] = useState<'week' | 'month' | 'year'>('week');
  const [activeRangeCarbon, setActiveRangeCarbon] = useState<'week' | 'month' | 'year'>('week');
  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header"></div>
      <div className="modal-con-body">
        <div className="popup-content">
          <div className="contents-scroll">
            <div className="energy-summary">
              <dl className="energy-summary-item">
                <dt>
                  금일 누적
                  <br />
                  유효 전력량
                </dt>
                <dd>
                  120 <span>kWh</span>
                </dd>
              </dl>
              <dl className="energy-summary-item">
                <dt>
                  총 누적
                  <br />
                  유효 전력량
                </dt>
                <dd>
                  120 <span>kWh</span>
                </dd>
              </dl>
              <dl className="energy-summary-item">
                <dt>
                  금일 누적
                  <br />
                  탄소 배출량
                </dt>
                <dd>
                  20 <span>kgCO₂eq</span>
                </dd>
              </dl>
              <dl className="energy-summary-item">
                <dt>
                  총 누적
                  <br />
                  탄소 배출량
                </dt>
                <dd>
                  20 <span>kgCO₂eq</span>
                </dd>
              </dl>
            </div>
            <div className="rtu-list">
              <div className="rtu-item">
                <div className="rtu-item-header">
                  <h2>전령량계 (RTU1)</h2>
                  <p>
                    <span className="status ico-normal"></span>
                    정상 작동중
                  </p>
                  <button type="button" className="btn-detail">
                    물류장 맵 이동
                    <Image src="/icons/ico-map.svg" alt="" width={14} height={14} />
                  </button>
                </div>
                <ul className="rtu-item-list">
                  <li>
                    현재 A상 전압 <span>655.35 V</span>
                  </li>
                  <li>
                    현재 B상 전압 <span>50 V</span>
                  </li>
                  <li>
                    현재 C상 전압 <span>50 V</span>
                  </li>
                  <li>
                    현재 A상 전류 <span>50 V</span>
                  </li>
                  <li>
                    현재 B상 전류 <span>50 V</span>
                  </li>
                  <li>
                    현재 C상 전류 <span>50 V</span>
                  </li>
                </ul>
              </div>
              <div className="rtu-item">
                <div className="rtu-item-header">
                  <h2>1001</h2>
                  <p>
                    <span className="status ico-normal"></span>
                    정상 작동중
                  </p>
                  <button type="button" className="btn-detail">
                    물류장 맵 이동
                    <Image src="/icons/ico-map.svg" alt="" width={14} height={14} />
                  </button>
                </div>
                <ul className="rtu-item-list">
                  <li>
                    현재 A상 전압 <span>655.35 V</span>
                  </li>
                  <li>
                    현재 B상 전압 <span>50 V</span>
                  </li>
                  <li>
                    현재 C상 전압 <span>50 V</span>
                  </li>
                  <li>
                    현재 A상 전류 <span>50 V</span>
                  </li>
                  <li>
                    현재 B상 전류 <span>50 V</span>
                  </li>
                  <li>
                    현재 C상 전류 <span>50 V</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rtu-chart mt-[30px]">
              <div className="rtu-chart-item-header">
                <h2>전력량 추이</h2>
                <Select
                  placeholder="Select option"
                  defaultValue="option1"
                  className="select-small"
                  classNames={{ popup: { root: 'dropdown-small-select' } }}
                >
                  <Select.Option value="option1">유효 전력량</Select.Option>
                  <Select.Option value="option2">무효 전력량</Select.Option>
                </Select>
              </div>
              <div className="rtu-chart-container">
                <div className="rtu-chart-menu">
                  <div className="range-btn-group">
                    <button
                      type="button"
                      className={`range-btn ${activeRangeEnergy === 'week' ? 'active' : ''}`}
                      onClick={() => setActiveRangeEnergy('week')}
                    >
                      주간
                    </button>
                    <button
                      type="button"
                      className={`range-btn ${activeRangeEnergy === 'month' ? 'active' : ''}`}
                      onClick={() => setActiveRangeEnergy('month')}
                    >
                      월간
                    </button>
                    <button
                      type="button"
                      className={`range-btn ${activeRangeEnergy === 'year' ? 'active' : ''}`}
                      onClick={() => setActiveRangeEnergy('year')}
                    >
                      연간
                    </button>
                  </div>
                  {activeRangeEnergy === 'week' && (
                    <div className="range-date-group">
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-prev.svg" alt="" width={10} height={15} />
                      </button>
                      <span>09.21 - 09.27</span>
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-next.svg" alt="" width={10} height={15} />
                      </button>
                    </div>
                  )}
                  {activeRangeEnergy === 'month' && (
                    <div className="range-date-group">
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-prev.svg" alt="" width={10} height={15} />
                      </button>
                      <span>2025</span>
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-next.svg" alt="" width={10} height={15} />
                      </button>
                    </div>
                  )}
                  {activeRangeEnergy === 'year' && (
                    <div className="range-date-group">
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-prev.svg" alt="" width={10} height={15} />
                      </button>
                      <span>2024 - 2025</span>
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-next.svg" alt="" width={10} height={15} />
                      </button>
                    </div>
                  )}
                </div>
                {activeRangeEnergy === 'week' && (
                  <div className="rtu-chart-con">
                    <div className="chart-con" style={{ border: '1px solid red' }}>
                      style=border:1px solid red 삭제 <br />
                      주간 chart api 출력 영역
                    </div>
                  </div>
                )}
                {activeRangeEnergy === 'month' && (
                  <div className="rtu-chart-con">
                    <div className="chart-con" style={{ border: '1px solid red' }}>
                      style=border:1px solid red 삭제 <br />
                      월간 chart api 출력 영역
                    </div>
                  </div>
                )}
                {activeRangeEnergy === 'year' && (
                  <div className="rtu-chart-con">
                    <div className="chart-con" style={{ border: '1px solid red' }}>
                      style=border:1px solid red 삭제 <br />
                      연간 chart api 출력 영역
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="rtu-chart mt-5">
              <div className="rtu-chart-item-header">
                <h2>탄소 배출량</h2>
              </div>
              <div className="rtu-chart-container">
                <div className="rtu-chart-menu">
                  <div className="range-btn-group">
                    <button
                      type="button"
                      className={`range-btn ${activeRangeCarbon === 'week' ? 'active' : ''}`}
                      onClick={() => setActiveRangeCarbon('week')}
                    >
                      주간
                    </button>
                    <button
                      type="button"
                      className={`range-btn ${activeRangeCarbon === 'month' ? 'active' : ''}`}
                      onClick={() => setActiveRangeCarbon('month')}
                    >
                      월간
                    </button>
                    <button
                      type="button"
                      className={`range-btn ${activeRangeCarbon === 'year' ? 'active' : ''}`}
                      onClick={() => setActiveRangeCarbon('year')}
                    >
                      연간
                    </button>
                  </div>
                  {activeRangeCarbon === 'week' && (
                    <div className="range-date-group">
                      <button type="button" className="range-date-btn" disabled={true}>
                        <Image src="/icons/ico-date-prev.svg" alt="" width={10} height={15} />
                      </button>
                      <span>09.21 - 09.28</span>
                      <button type="button" className="range-date-btn" disabled={true}>
                        <Image src="/icons/ico-date-next.svg" alt="" width={10} height={15} />
                      </button>
                    </div>
                  )}
                  {activeRangeCarbon === 'month' && (
                    <div className="range-date-group">
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-prev.svg" alt="" width={10} height={15} />
                      </button>
                      <span>2025</span>
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-next.svg" alt="" width={10} height={15} />
                      </button>
                    </div>
                  )}
                  {activeRangeCarbon === 'year' && (
                    <div className="range-date-group">
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-prev.svg" alt="" width={10} height={15} />
                      </button>
                      <span>2024 - 2025</span>
                      <button type="button" className="range-date-btn">
                        <Image src="/icons/ico-date-next.svg" alt="" width={10} height={15} />
                      </button>
                    </div>
                  )}
                </div>
                {activeRangeCarbon === 'week' && (
                  <div className="rtu-chart-con">
                    <div className="chart-con" style={{ border: '1px solid red' }}>
                      style=border:1px solid red 삭제 <br />
                      주간 chart api 출력 영역
                    </div>
                  </div>
                )}
                {activeRangeCarbon === 'month' && (
                  <div className="rtu-chart-con">
                    <div className="chart-con" style={{ border: '1px solid red' }}>
                      style=border:1px solid red 삭제 <br />
                      월간 chart api 출력 영역
                    </div>
                  </div>
                )}
                {activeRangeCarbon === 'year' && (
                  <div className="rtu-chart-con">
                    <div className="chart-con" style={{ border: '1px solid red' }}>
                      style=border:1px solid red 삭제 <br />
                      연간 chart api 출력 영역
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bbs-footer !mt-auto">
            <div className="footer-menu">
              <Button type="default" className="">
                알람 관리 설정
              </Button>
              <Button
                type="default"
                className=""
                onClick={() => {
                  onCloseAction();
                  onOpenDetail();
                }}
              >
                데이터 집계
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentModal>
  );
}
