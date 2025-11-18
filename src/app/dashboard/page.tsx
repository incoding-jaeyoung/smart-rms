'use client';

import { useState } from 'react';
import Header, { HeaderMenuKey } from '@/components/layout/Header';
import WeatherInfo from '@/components/popup/WeatherInfo';
import BbsPopup from '@/components/popup/bbs';
import Image from 'next/image';

type PopupKey =
  | 'weather'
  | 'temperature'
  | 'humidity'
  | 'fire'
  | 'smoke'
  | 'power'
  | 'carbon'
  | 'logistics-map'
  | 'digital-twin'
  | 'dashboard'
  | 'daily-inout'
  | 'service'
  | 'shipping'
  | 'inventory'
  | HeaderMenuKey;

export default function DashboardPage() {
  const [currentPopup, setCurrentPopup] = useState<PopupKey | null>(null);

  const handleOpenPopup = (popupKey: PopupKey) => {
    setCurrentPopup((prev) => (prev === popupKey ? null : popupKey));
  };

  const handleClosePopup = () => {
    setCurrentPopup(null);
  };

  const headerMenuKeys: HeaderMenuKey[] = ['bbs', 'support', 'userInfo', 'system', 'logout'];
  const activeHeaderMenu = (
    headerMenuKeys.includes(currentPopup as HeaderMenuKey) ? (currentPopup as HeaderMenuKey) : null
  ) as HeaderMenuKey | null;

  return (
    <div className="dashboard-page">
      <div className="dashboard-movie">
        <Image
          src="/videos/bg-dashboard.png"
          alt="dashboard-movie"
          width={1920}
          height={1080}
          priority
        />
        {/* <video src="/videos/bg-dashboard.mp4" autoPlay muted loop /> */}
      </div>
      <Header activeMenu={activeHeaderMenu} onMenuClick={(menuId) => handleOpenPopup(menuId)} />
      <div className="dashboard-content">
        <div className="contents-left">
          <button
            type="button"
            className={`glass weather-btn ${currentPopup === 'weather' ? 'active' : ''}`}
            onClick={() => handleOpenPopup('weather')}
          >
            <div className="btn-header">
              <p>대전광역시 대화동 </p>
              <span className="ico-arrow"></span>
            </div>
            <div className="weather-info">
              <Image src="/icons/ico-weather-01.png" alt="흐림" width={116} height={116} />
              <div className="weather-text">
                <p>
                  24<span>°</span>
                </p>
                <dl>
                  <dt>흐림</dt>
                  <dd>
                    최고 <b>26°</b>
                  </dd>
                  <dd>
                    최저 <b>20°</b>
                  </dd>
                </dl>
              </div>
            </div>
          </button>
          <button
            type="button"
            className={`glass ${currentPopup === 'temperature' ? 'active' : ''}`}
            onClick={() => handleOpenPopup('temperature')}
          >
            <div className="btn-header">
              <p>
                <span className="status ico-ok"></span>정상 작동중
              </p>
              <span className="ico-arrow"></span>
            </div>
            <div className="dashboard-btn-content">
              <dl>
                <dt>
                  <Image src="/icons/ico-dashboard-01.svg" alt="" width={15} height={21} />
                  적정 온도
                </dt>
                <dd className="text-[30px] h-[36px] font-semibold flex items-center">
                  24 <span className="text-[13px] leading-normal self-start">°</span>
                </dd>
                <dd>
                  <a
                    href="#"
                    className="live-video"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      alert('실시간 영상 확인11');
                    }}
                  >
                    실시간 영상 확인
                  </a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <Image src="/icons/ico-dashboard-02.svg" alt="" width={24} height={24} />
                  적정 습도
                </dt>
                <dd className="text-[30px] h-[36px] font-semibold flex items-center">
                  50 <span className="text-[13px] leading-normal self-end">%</span>
                </dd>
                <dd>
                  <a
                    href="#"
                    className="live-video"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      alert('실시간 영상 확인11');
                    }}
                  >
                    실시간 영상 확인
                  </a>
                </dd>
              </dl>
            </div>
          </button>
          <button
            type="button"
            className={`glass ${currentPopup === 'fire' ? 'active' : ''}`}
            onClick={() => handleOpenPopup('fire')}
          >
            <div className="btn-header">
              <p>
                <span className="status ico-ok"></span>정상 작동중
              </p>
              <span className="ico-arrow"></span>
            </div>
            <div className="dashboard-btn-content">
              <dl>
                <dt>
                  <Image src="/icons/ico-dashboard-03.svg" alt="" width={24} height={24} />
                  불꽃
                </dt>
                <dd className="text-sm h-[36px] font-semibold flex items-center">이상없음</dd>
                <dd>
                  <a
                    href="#"
                    className="live-video"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      alert('실시간 영상 확인11');
                    }}
                  >
                    실시간 영상 확인
                  </a>
                </dd>
              </dl>
              <dl>
                <dt>
                  <Image src="/icons/ico-dashboard-04.svg" alt="" width={24} height={24} />
                  연기
                </dt>
                <dd className="text-[32px] h-[36px] font-semibold flex items-center gap-1.5">
                  A
                  <span className="text-xs leading-3.5 text-left">
                    A구역
                    <br />
                    연기발생
                  </span>
                </dd>
                <dd>
                  <a
                    href="#"
                    className="live-video"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      alert('실시간 영상 확인11');
                    }}
                  >
                    실시간 영상 확인
                  </a>
                </dd>
              </dl>
            </div>
          </button>
          <button
            type="button"
            className={`glass ${currentPopup === 'power' ? 'active' : ''}`}
            onClick={() => handleOpenPopup('power')}
          >
            <div className="btn-header">
              <p>
                <span className="status ico-ok"></span>정상 작동중
              </p>
              <span className="ico-arrow"></span>
            </div>
            <div className="dashboard-btn-content">
              <dl>
                <dt>
                  <Image src="/icons/ico-dashboard-05.svg" alt="" width={24} height={24} />
                  금일 누적 전력량
                </dt>
                <dd className="text-[30px] h-[53px] font-semibold flex items-center gap-1">
                  <span className="tracking-[-2px]">2004</span>
                  <span className="text-[10px] leading-none font-medium">kWh</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <Image src="/icons/ico-dashboard-06.svg" alt="" width={24} height={24} />
                  금일 누적 탄소량
                </dt>
                <dd className="text-[30px] h-[53px] font-semibold flex items-center gap-1">
                  <span className="tracking-[-2px]">2004</span>
                  <span className="text-[10px] leading-none font-medium">kgCO₂eq</span>
                </dd>
              </dl>
            </div>
          </button>
        </div>
        <div className="contents-right">
          <button
            type="button"
            className={currentPopup === 'logistics-map' ? 'active' : ''}
            onClick={() => handleOpenPopup('logistics-map')}
          >
            물류장 맵
            <Image src="/icons/ico-dashboard-r-01.svg" alt="" width={33} height={33} />
          </button>
          <button
            type="button"
            className={currentPopup === 'digital-twin' ? 'active' : ''}
            onClick={() => handleOpenPopup('digital-twin')}
          >
            DT
            <Image src="/icons/ico-dashboard-r-02.svg" alt="" width={33} height={33} />
          </button>
          <button
            type="button"
            className={currentPopup === 'dashboard' ? 'active' : ''}
            onClick={() => handleOpenPopup('dashboard')}
          >
            Logistics <br />
            Dashboard
            <Image src="/icons/ico-dashboard-r-03.svg" alt="" width={33} height={33} />
          </button>
          <button
            type="button"
            className={currentPopup === 'daily-inout' ? 'active' : ''}
            onClick={() => handleOpenPopup('daily-inout')}
          >
            오늘 입고 / <br />
            출고 현황
            <Image src="/icons/ico-dashboard-r-04.svg" alt="" width={33} height={33} />
          </button>
          <button
            type="button"
            className={currentPopup === 'service' ? 'active' : ''}
            onClick={() => handleOpenPopup('service')}
          >
            서비스 현황
            <Image src="/icons/ico-dashboard-r-05.svg" alt="" width={33} height={33} />
          </button>
          <button
            type="button"
            className={currentPopup === 'shipping' ? 'active' : ''}
            onClick={() => handleOpenPopup('shipping')}
          >
            출고 순위
            <Image src="/icons/ico-dashboard-r-06.svg" alt="" width={33} height={33} />
          </button>
          <button
            type="button"
            className={currentPopup === 'inventory' ? 'active' : ''}
            onClick={() => handleOpenPopup('inventory')}
          >
            안전재고 / <br />
            악성재고
            <Image src="/icons/ico-dashboard-r-07.svg" alt="" width={33} height={33} />
          </button>
        </div>
      </div>
      {currentPopup === 'weather' && <WeatherInfo open={true} onCloseAction={handleClosePopup} />}
      {currentPopup === 'bbs' && <BbsPopup open={true} onCloseAction={handleClosePopup} />}
    </div>
  );
}
