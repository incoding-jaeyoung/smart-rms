'use client';

import { useState } from 'react';
import Login from '@/components/layout/LoginWrap';
import FindAccount from '@/components/popup/FindAccount';
import NewUser from '@/components/popup/JoinUser';
import SearchSuccess from '@/components/popup/SearchSuccess';
import PwChangeSuccess from '@/components/popup/PwChangeSuccess';
import { Button } from 'antd';

type PopupType = 'FindAccount' | 'signup' | 'searchSuccess' | 'pwChangeSuccess';

export default function LoginPage() {
  const [currentPopup, setCurrentPopup] = useState<PopupType | null>(null);
  const handleBackToLogin = () => {
    setCurrentPopup(null);
  };
  const handleFindAccount = () => {
    setCurrentPopup('FindAccount');
  };

  const handleSignup = () => {
    setCurrentPopup('signup');
  };

  const handleSearchSuccess = () => {
    setCurrentPopup('searchSuccess');
  };

  const handlePwChangeSuccess = () => {
    setCurrentPopup('pwChangeSuccess');
  };

  return (
    <div className="login-page">
      <div className="login-movie">
        {/* <video src="/videos/bg-movie.mp4" autoPlay muted loop /> */}
      </div>
      {!currentPopup && <Login handleFindAccount={handleFindAccount} />}
      {currentPopup === 'FindAccount' && <FindAccount open={true} onClose={handleBackToLogin} />}
      {currentPopup === 'signup' && <NewUser open={true} onClose={handleBackToLogin} />}
      {currentPopup === 'searchSuccess' && (
        <SearchSuccess open={true} onClose={handleBackToLogin} />
      )}
      {currentPopup === 'pwChangeSuccess' && (
        <PwChangeSuccess open={true} onClose={handleBackToLogin} />
      )}
      <div className="popup-list">
        <Button type="primary" onClick={handleFindAccount}>
          아이디 찾기
        </Button>
        <Button type="primary" onClick={handleSignup}>
          회원가입
        </Button>
        <Button type="primary" onClick={handleSearchSuccess}>
          아이디 찾기 결과
        </Button>
        <Button type="primary" onClick={handlePwChangeSuccess}>
          비밀번호 변경 성공
        </Button>
      </div>
    </div>
  );
}
