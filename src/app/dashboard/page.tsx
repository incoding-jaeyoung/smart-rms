'use client';

import { useState } from 'react';
import Header, { HeaderMenuKey } from '@/components/layout/Header';
import WeatherInfo from '@/components/popup/WeatherInfo';
import BbsListPopup from '@/components/popup/BbsList';
import BbsWritePopup from '@/components/popup/BbsWrite';
import BbsDetailPopup from '@/components/popup/BbsDetail';
import BbsNoresultPopup from '@/components/popup/BbsNoresult';
import EnergyStatusPopup from '@/components/popup/EnergyStatus';
import PopupDefaultLayout from '@/components/popup/EnergyStatusDetail';
import PopupDefaultContent from '@/components/popup/PopupDefaultContent';
import PopupDefaultBattery from '@/components/popup/PopupDefaultBattery';
import Image from 'next/image';
import { useModal } from '@/lib/modal';

type PopupKey = string;

export default function DashboardPage() {
  const modal = useModal();
  const [currentPopup, setCurrentPopup] = useState<PopupKey | null>(null);
  const [isBbsWriteOpen, setBbsWriteOpen] = useState(false);
  const [isBbsDetailOpen, setBbsDetailOpen] = useState(false);
  const [isBbsNoresultOpen, setBbsNoresultOpen] = useState(false);
  const [isEnergyStatusDetailOpen, setEnergyStatusDetailOpen] = useState(false);
  const [isPopupDefaultOpen, setPopupDefaultOpen] = useState(false);
  const [isPopupDefaultContentOpen, setPopupDefaultContentOpen] = useState(false);
  const [isPopupDefaultBatteryOpen, setPopupDefaultBatteryOpen] = useState(false);
  const getIconSrc = (key: PopupKey, defaultSrc: string, activeSrc: string) =>
    currentPopup === key ? activeSrc : defaultSrc;
  const handleOpenPopup = (popupKey: PopupKey) => {
    setCurrentPopup((prev) => (prev === popupKey ? null : popupKey));
  };

  const handleClosePopup = () => {
    setCurrentPopup(null);
  };

  const handleOpenBbsWrite = () => {
    setBbsWriteOpen(true);
  };

  const handleCloseBbsWrite = () => {
    setBbsWriteOpen(false);
  };

  const handleOpenBbsDetail = () => {
    setBbsDetailOpen(true);
  };

  const handleCloseBbsDetail = () => {
    setBbsDetailOpen(false);
  };

  const handleOpenBbsNoresult = () => {
    setBbsNoresultOpen(true);
  };

  const handleCloseBbsNoresult = () => {
    setBbsNoresultOpen(false);
  };

  const handleOpenEnergyStatusDetail = () => {
    setEnergyStatusDetailOpen(true);
  };

  const handleCloseEnergyStatusDetail = () => {
    setEnergyStatusDetailOpen(false);
  };

  const handleOpenPopupDefault = () => {
    setPopupDefaultOpen(true);
  };

  const handleClosePopupDefault = () => {
    setPopupDefaultOpen(false);
  };

  const handleOpenPopupDefaultContent = () => {
    setPopupDefaultContentOpen(true);
  };

  const handleClosePopupDefaultContent = () => {
    setPopupDefaultContentOpen(false);
  };

  const handleOpenPopupDefaultBattery = () => {
    setPopupDefaultBatteryOpen(true);
  };

  const handleClosePopupDefaultBattery = () => {
    setPopupDefaultBatteryOpen(false);
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
              <Image src="/icons/ico-weather-01.png" alt="흐림" width={110} height={110} />
              <div className="weather-text">
                <p>
                  24<span>°</span>
                </p>
                <dl>
                  <dt>구름많고 빗방울 또는 눈날림</dt>
                  <dd>
                    <span>
                      최고 <b>26°</b>
                    </span>
                    <span>
                      최저 <b>20°</b>
                    </span>
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
                <span className="status ico-normal"></span>정상 작동중
              </p>
              <span className="ico-arrow"></span>
            </div>
            <div className="dashboard-btn-content">
              <dl>
                <dt>
                  <Image
                    src={getIconSrc(
                      'temperature',
                      '/icons/ico-dashboard-01.svg',
                      '/icons/ico-dashboard-01-w.svg'
                    )}
                    alt=""
                    width={15}
                    height={21}
                  />
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
                  <Image
                    src={getIconSrc(
                      'temperature',
                      '/icons/ico-dashboard-02.svg',
                      '/icons/ico-dashboard-02-w.svg'
                    )}
                    alt=""
                    width={24}
                    height={24}
                  />
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
                <span className="status ico-normal"></span>정상 작동중
              </p>
              <span className="ico-arrow"></span>
            </div>
            <div className="dashboard-btn-content">
              <dl>
                <dt>
                  <Image
                    src={getIconSrc(
                      'fire',
                      '/icons/ico-dashboard-03.svg',
                      '/icons/ico-dashboard-03-w.svg'
                    )}
                    alt=""
                    width={24}
                    height={24}
                  />
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
                  <Image
                    src={getIconSrc(
                      'fire',
                      '/icons/ico-dashboard-04.svg',
                      '/icons/ico-dashboard-04-w.svg'
                    )}
                    alt=""
                    width={24}
                    height={24}
                  />
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
            className={`glass ${currentPopup === 'power' ? 'active' : ''}  error`}
            onClick={() => handleOpenPopup('power')}
          >
            <div className="btn-header">
              <p>
                <span className="status ico-bad"></span>RTU1 + 작동 중지
              </p>
              <span className="ico-arrow"></span>
            </div>
            <div className="dashboard-btn-content">
              <dl>
                <dt>
                  <Image
                    src={getIconSrc(
                      'power',
                      '/icons/ico-dashboard-05.svg',
                      '/icons/ico-dashboard-05-w.svg'
                    )}
                    alt=""
                    width={24}
                    height={24}
                  />
                  금일 누적 전력량
                </dt>
                <dd className="text-[30px] h-[53px] font-semibold flex items-center gap-1">
                  <span className="tracking-[-2px]">2004</span>
                  <span className="text-[10px] leading-none font-medium">kWh</span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <Image
                    src={getIconSrc(
                      'power',
                      '/icons/ico-dashboard-06.svg',
                      '/icons/ico-dashboard-06-w.svg'
                    )}
                    alt=""
                    width={24}
                    height={24}
                  />
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
      <p className="copyright">Copyright © 2025 RMS PLATFORM. All Rights Reserved.</p>
      <WeatherInfo open={currentPopup === 'weather'} onCloseAction={handleClosePopup} />
      <EnergyStatusPopup
        open={currentPopup === 'power'}
        onCloseAction={handleClosePopup}
        onOpenDetail={handleOpenEnergyStatusDetail}
      />
      <BbsListPopup
        open={currentPopup === 'bbs'}
        onCloseAction={handleClosePopup}
        onOpenWrite={handleOpenBbsWrite}
        onOpenDetail={handleOpenBbsDetail}
      />
      <BbsWritePopup
        open={isBbsWriteOpen}
        onCloseAction={handleCloseBbsWrite}
        onOpenList={() => handleOpenPopup('bbs')}
      />
      <BbsDetailPopup
        open={isBbsDetailOpen}
        onCloseAction={handleCloseBbsDetail}
        onOpenList={() => handleOpenPopup('bbs')}
      />
      <BbsNoresultPopup
        open={isBbsNoresultOpen}
        onCloseAction={handleCloseBbsNoresult}
        onOpenWrite={handleOpenBbsWrite}
      />
      {/* 기본 모달 컨텐츠 */}
      <PopupDefaultContent
        open={isPopupDefaultContentOpen}
        onClose={handleClosePopupDefaultContent}
      />
      <PopupDefaultBattery
        open={isPopupDefaultBatteryOpen}
        onClose={handleClosePopupDefaultBattery}
      />
      {/* 기본 모달 레이아웃 */}
      <PopupDefaultLayout
        open={isEnergyStatusDetailOpen}
        onCloseAction={handleCloseEnergyStatusDetail}
      />
      <div className="sample fixed bottom-0 right-0 flex gap-2 text-black flex-col items-end z-[9999] p-4 bg-[#ffffff50]">
        <button type="button" onClick={handleOpenEnergyStatusDetail}>
          데이터 집계 모달 (EnergyStatusDetail)
        </button>
        <button type="button" onClick={handleOpenBbsNoresult}>
          빈 게시글 모달 (BbsNoresult)
        </button>
        <button type="button" onClick={handleOpenBbsDetail}>
          글상세 모달 (BbsDetail)
        </button>
        <button type="button" onClick={handleOpenBbsWrite}>
          글쓰기 모달 (BbsWrite)
        </button>
        <button
          type="button"
          onClick={() =>
            modal.showConfirm({
              title: '작성 중인 글이 있습니다. <br/> 취소하시겠습니까?',
              okText: '예',
              cancelText: '아니오',
              onOk: () => {
                modal.showError({ title: '게시글 작성이 취소되었습니다.', autoClose: 5000 });
              },
              onCancel: () => {},
            })
          }
        >
          확인 모달 (Confirm)
        </button>
        <button
          type="button"
          onClick={() =>
            modal.showSuccess({
              title: '게시글이 등록되었습니다.',
              autoClose: 5000,
            })
          }
        >
          성공 모달 (Success)
        </button>
        <button
          type="button"
          onClick={() =>
            modal.showError({
              title: '게시글 작성이 취소되었습니다.',
              autoClose: 5000,
            })
          }
        >
          에러 모달 (Error)
        </button>
        <button
          type="button"
          onClick={() =>
            modal.showWarning({
              title: '제목을 입력해주세요.<br/>제목은 최소 2자 이상 입력되어야 합니다.',
              autoClose: 5000,
            })
          }
        >
          경고 모달 (Warning)
        </button>
        <button type="button" onClick={handleOpenPopupDefaultContent}>
          기본 모달 (PopupDefault)
        </button>
        <button type="button" onClick={handleOpenPopupDefaultBattery}>
          기본 배터리 모달 (PopupDefaultBattery)
        </button>
      </div>
    </div>
  );
}
