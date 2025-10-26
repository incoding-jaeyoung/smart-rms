'use client';

import { useState } from 'react';
import { Button } from 'antd';
import ModalDefault from '@/components/popup/ModalDefault';
import FindAccount from '@/components/popup/FindAccount';
import NewUser from '@/components/popup/JoinUser';
import SearchSuccess from '@/components/popup/SearchSuccess';
import PwChangeSuccess from '@/components/popup/PwChangeSuccess';

export default function ModalBasicPage() {
  const [sampleModal, setSampleModal] = useState(false);
  const [newUserModal, setNewUserModal] = useState(false);
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [findAccountModal, setFindAccountModal] = useState(false);
  const [joinUserModal, setJoinUserModal] = useState(false);
  const [searchSuccessModal, setSearchSuccessModal] = useState(false);
  const [pwChangeSuccessModal, setPwChangeSuccessModal] = useState(false);
  return (
    <div className="p-8 flex flex-col gap-5 bg-zinc-800 min-h-screen">
      <h2 className="text-2xl font-bold text-white">Account Modal</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">Default Modal</h3>
          <p className="text-sm text-gray-600 mb-4">기본 모달</p>
          <Button type="primary" onClick={() => setSampleModal(true)} block>
            Open Modal
          </Button>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white">Account Modal</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">아이디 찾기 / 비밀번호 변경</h3>
          <p className="text-sm text-gray-600 mb-4">아이디 찾기 </p>
          <Button type="primary" onClick={() => setFindAccountModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">아이디 찾기 결과</h3>
          <p className="text-sm text-gray-600 mb-4">아이디 찾기 결과</p>
          <Button type="primary" onClick={() => setSearchSuccessModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">비밀번호 변경 성공</h3>
          <p className="text-sm text-gray-600 mb-4">비밀번호 변경 성공</p>
          <Button type="primary" onClick={() => setPwChangeSuccessModal(true)} block>
            Open Modal
          </Button>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="font-semibold mb-2">회원가입</h3>
          <p className="text-sm text-gray-600 mb-4">이메일 가입</p>
          <Button type="primary" onClick={() => setJoinUserModal(true)} block>
            Open Modal
          </Button>
        </div>
      </div>

      {/* 모달 컴포넌트들 */}
      <ModalDefault open={sampleModal} onClose={() => setSampleModal(false)} />
      <FindAccount open={findAccountModal} onClose={() => setFindAccountModal(false)} />
      <NewUser open={joinUserModal} onClose={() => setJoinUserModal(false)} />
      <SearchSuccess open={searchSuccessModal} onClose={() => setSearchSuccessModal(false)} />
      <PwChangeSuccess open={pwChangeSuccessModal} onClose={() => setPwChangeSuccessModal(false)} />
    </div>
  );
}
