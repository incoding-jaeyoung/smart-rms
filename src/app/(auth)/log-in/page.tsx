'use client';

import { useState, useEffect } from 'react';
import LogIn from '@/components/popup/LogIn';
import { Button } from 'antd';

export default function LoginPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsLoginModalOpen(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="login-page">
        <div className="login-movie absolute top-0 left-0 w-full h-full">
          <video
            src="/videos/bg-movie.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-movie absolute top-0 left-0 w-full h-full">
        <video
          src="/videos/bg-movie.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>
      <LogIn open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      {/* 팝업 호출 임시 버튼 */}
      <div className="popup-list">
        <Button type="primary" onClick={() => setIsLoginModalOpen(true)}>
          로그인 팝업 호출
        </Button>
        <Button type="primary" onClick={() => setIsLoginModalOpen(true)}>
          로그인 팝업 호출
        </Button>
      </div>
    </div>
  );
}
