'use client';

import { useState } from 'react';
import Login from '@/components/layout/LoginWrap';
import FindAccount from '@/components/popup/FindAccount';
import JoinUser from '@/components/popup/JoinUser';
import JoinUser2 from '@/components/popup/JoinUser2';
import TermsAgree from '@/components/popup/TermsAgree';
import PrivacyAgree from '@/components/popup/PrivacyAgree';
import ServiceAlarmAgree from '@/components/popup/ServiceAlarmAgree';
import SearchSuccess from '@/components/popup/SearchSuccess';
import PwChangeSuccess from '@/components/popup/PwChangeSuccess';
import { Button } from 'antd';

type PopupType =
  | 'FindAccount'
  | 'signup'
  | 'searchSuccess'
  | 'pwChangeSuccess'
  | 'JoinUser1'
  | 'JoinUser2'
  | 'TermsAgree'
  | 'PrivacyAgree'
  | 'ServiceAlarmAgree';

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

  const handleJoinUser1 = () => {
    setCurrentPopup('JoinUser1');
  };

  const handleJoinUser2 = () => {
    setCurrentPopup('JoinUser2');
  };

  const handleTermsAgree = () => {
    setCurrentPopup('TermsAgree');
  };

  const handlePrivacyAgree = () => {
    setCurrentPopup('PrivacyAgree');
  };

  const handleServiceAlarmAgree = () => {
    setCurrentPopup('ServiceAlarmAgree');
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
      {currentPopup === 'signup' && <JoinUser open={true} onClose={handleBackToLogin} />}
      {currentPopup === 'JoinUser1' && (
        <JoinUser2 type="email" open={true} onClose={handleBackToLogin} />
      )}
      {currentPopup === 'JoinUser2' && (
        <JoinUser2 type="sns" open={true} onClose={handleBackToLogin} />
      )}
      {currentPopup === 'TermsAgree' && <TermsAgree open={true} onClose={handleBackToLogin} />}
      {currentPopup === 'PrivacyAgree' && <PrivacyAgree open={true} onClose={handleBackToLogin} />}
      {currentPopup === 'ServiceAlarmAgree' && (
        <ServiceAlarmAgree open={true} onClose={handleBackToLogin} />
      )}
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
          회원가입 - step1
        </Button>
        <Button type="primary" onClick={handleJoinUser1}>
          회원가입 - 이메일
        </Button>
        <Button type="primary" onClick={handleJoinUser2}>
          회원가입 - sns
        </Button>
        <Button type="primary" onClick={handleTermsAgree}>
          서비스 이용약관 동의
        </Button>
        <Button type="primary" onClick={handlePrivacyAgree}>
          개인정보 처리방침 동의
        </Button>
        <Button type="primary" onClick={handleServiceAlarmAgree}>
          서비스 알람 수신 동의
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
