'use client';

import { useMemo, useRef, useState, type RefObject } from 'react';
import ContentModal from '@/components/ui/ContentModal';
import Image from 'next/image';
import type { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface WeatherInfoProps {
  open: boolean;
  onCloseAction: () => void;
}

export default function WeatherInfo({ open, onCloseAction }: WeatherInfoProps) {
  const [activeTab, setActiveTab] = useState<'today' | 'weekly'>('today');

  const todayPrevRef = useRef<HTMLButtonElement | null>(null);
  const todayNextRef = useRef<HTMLButtonElement | null>(null);
  const weeklyPrevRef = useRef<HTMLButtonElement | null>(null);
  const weeklyNextRef = useRef<HTMLButtonElement | null>(null);

  const attachNavigation = (
    swiper: SwiperInstance | undefined,
    prevRef: RefObject<HTMLButtonElement>,
    nextRef: RefObject<HTMLButtonElement>
  ) => {
    setTimeout(() => {
      if (!swiper || !prevRef.current || !nextRef.current) return;
      const navigation = swiper.params?.navigation;
      if (navigation && typeof navigation !== 'boolean') {
        navigation.prevEl = prevRef.current;
        navigation.nextEl = nextRef.current;
      }
      swiper.navigation?.destroy();
      swiper.navigation?.init();
      swiper.navigation?.update();
    });
  };

  const todaySlides = useMemo(
    () => [
      { label: '지금', chance: '20%', temp: '24°' },
      { label: '오후6시', chance: '20%', temp: '24°' },
      { label: '오후7시', chance: '20%', temp: '24°' },
      { label: '오후8시', chance: '20%', temp: '24°' },
      { label: '오후9시', chance: '20%', temp: '24°' },
      { label: '오후10시', chance: '20%', temp: '24°' },
      { label: '오후11시', chance: '20%', temp: '24°' },
      { label: '오전12시', chance: '20%', temp: '24°' },
      { label: '오전1시', chance: '20%', temp: '24°' },
      { label: '오전2시', chance: '20%', temp: '24°' },
      { label: '오전3시', chance: '20%', temp: '24°' },
      { label: '오전4시', chance: '20%', temp: '24°' },
      { label: '오전5시', chance: '20%', temp: '24°' },
    ],
    []
  );

  const weeklySlides = useMemo(
    () => [
      { label: '지금', chance: '10%', temp: '25°' },
      { label: '내일', chance: '30%', temp: '22°' },
      { label: '목요일', chance: '60%', temp: '21°' },
      { label: '금요일', chance: '40%', temp: '23°' },
      { label: '토요일', chance: '50%', temp: '24°' },
      { label: '일요일', chance: '20%', temp: '26°' },
      { label: '월요일', chance: '15%', temp: '25°' },
      { label: '화요일', chance: '10%', temp: '25°' },
      { label: '수요일', chance: '30%', temp: '22°' },
    ],
    []
  );

  return (
    <ContentModal open={open} onCloseAction={onCloseAction}>
      <div className="modal-con-header"></div>
      <div className="modal-con-body">
        <div className="weather-info-wrap">
          <div className="weather-info-header">
            <div className="header-left">
              <p className="header-time">
                목요일 <span>17:09</span>
              </p>
              <p className="header-location">
                대전광역시 대화동 <span className="font-normal">|</span> 흐림
              </p>
            </div>
            <div className="header-right">
              <Image src="/icons/ico-weather-01.png" alt="흐림" width={120} height={120} />
              24
              <span>°</span>
            </div>
          </div>
          <div className="weather-info-summary white-box">
            <ul>
              <li>
                일출<b>05:55</b>
              </li>
              <li>
                일몰<b>17:55</b>
              </li>
            </ul>
            <ul className="!gap-4">
              <li>
                미세먼지<b className="good">매우좋음</b>
              </li>
              <li>
                초미세먼지<b className="bad">매우나쁨</b>
              </li>
            </ul>
            <ul>
              <li>
                최고<b>26°</b>
              </li>
              <li>
                최저<b>20°</b>
              </li>
            </ul>
          </div>
          <div className="weather-info-detail">
            <dl className="white-box">
              <dt>강수확률</dt>
              <dd>
                20
                <span>%</span>
              </dd>
            </dl>
            <dl className="white-box">
              <dt>강수량</dt>
              <dd>
                20
                <span>mm</span>
              </dd>
            </dl>
            <dl className="white-box">
              <dt>체감온도</dt>
              <dd>
                26
                <span className="mb-[20px] !text-2xl">°</span>
              </dd>
            </dl>
            <dl className="white-box">
              <dt>바람</dt>
              <dd>
                20
                <span>km/h</span>
              </dd>
            </dl>
          </div>
          <div className="weather-info-slider">
            <div className="slider-tab">
              <button
                type="button"
                className={activeTab === 'today' ? 'active' : ''}
                onClick={() => setActiveTab('today')}
              >
                오늘
              </button>
              <button
                type="button"
                className={activeTab === 'weekly' ? 'active' : ''}
                onClick={() => setActiveTab('weekly')}
              >
                주간
              </button>
            </div>
            <div className="slider-wrap">
              <div className={`slider-content ${activeTab === 'today' ? 'active' : ''}`}>
                <button
                  type="button"
                  ref={todayPrevRef}
                  className="slider-arrow weather-slider-prev"
                  aria-label="이전"
                >
                  ‹
                </button>
                <Swiper
                  modules={[Navigation]}
                  onSwiper={(swiper) => attachNavigation(swiper, todayPrevRef, todayNextRef)}
                  navigation={{
                    prevEl: todayPrevRef.current,
                    nextEl: todayNextRef.current,
                  }}
                  slidesPerView={7}
                  spaceBetween={20}
                >
                  {todaySlides.map((slide) => (
                    <SwiperSlide key={slide.label}>
                      <div className="slider-card glass">
                        <p className="time">{slide.label}</p>
                        <p className="icon">
                          <Image
                            src="/icons/ico-weather-01.png"
                            alt="흐림"
                            width={65}
                            height={65}
                          />
                          <span>{slide.chance}</span>
                        </p>
                        <p className="temp">{slide.temp}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  type="button"
                  ref={todayNextRef}
                  className="slider-arrow weather-slider-next"
                  aria-label="다음"
                >
                  ›
                </button>
              </div>

              <div className={`slider-content ${activeTab === 'weekly' ? 'active' : ''}`}>
                <button
                  type="button"
                  ref={weeklyPrevRef}
                  className="slider-arrow weather-slider-prev"
                  aria-label="이전"
                >
                  ‹
                </button>
                <Swiper
                  modules={[Navigation]}
                  onSwiper={(swiper) => attachNavigation(swiper, weeklyPrevRef, weeklyNextRef)}
                  navigation={{
                    prevEl: weeklyPrevRef.current,
                    nextEl: weeklyNextRef.current,
                  }}
                  slidesPerView={7}
                  spaceBetween={20}
                >
                  {weeklySlides.map((slide) => (
                    <SwiperSlide key={slide.label}>
                      <div className="slider-card glass">
                        <p className="time">{slide.label}</p>
                        <p className="icon">
                          <Image
                            src="/icons/ico-weather-01.png"
                            alt="흐림"
                            width={65}
                            height={65}
                          />
                          <span>{slide.chance}</span>
                        </p>
                        <p className="temp">{slide.temp}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  type="button"
                  ref={weeklyNextRef}
                  className="slider-arrow weather-slider-next"
                  aria-label="다음"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
          <ul className="update-time">
            <li>시간별예보 10.28. 09:00 업데이트</li>
            <li>주간예보 10.28. HH:MM 업데이트</li>
          </ul>
        </div>
      </div>
    </ContentModal>
  );
}
