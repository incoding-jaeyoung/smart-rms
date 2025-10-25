'use client';

import { useState } from 'react';
import Login from '@/components/layout/LoginWrap';
import ResetPassword from '@/components/popup/FindAccount';
import NewUser from '@/components/popup/JoinUser';
import { Button } from 'antd';

type PopupType = 'resetPassword' | 'signup';

export default function LoginPage() {
  const [currentPopup, setCurrentPopup] = useState<PopupType | null>(null);

  const handleResetPassword = () => {
    setCurrentPopup('resetPassword');
  };

  const handleSignup = () => {
    setCurrentPopup('signup');
  };

  const handleBackToLogin = () => {
    setCurrentPopup(null);
  };

  return (
    <div className="login-page">
      <div className="login-movie">
        {/* <video src="/videos/bg-movie.mp4" autoPlay muted loop /> */}
      </div>
      {!currentPopup && <Login handleResetPassword={handleResetPassword} />}
      {currentPopup === 'resetPassword' && (
        <ResetPassword open={true} onClose={handleBackToLogin} />
      )}
      {currentPopup === 'signup' && <NewUser open={true} onClose={handleBackToLogin} />}
      <div className="popup-list">
        <Button type="primary" onClick={handleResetPassword}>
          아이디 찾기
        </Button>
        <Button type="primary" onClick={handleSignup}>
          회원가입
        </Button>
      </div>
    </div>
  );
}
