'use client';
import { Modal } from '@/components/ui';

interface ServiceAlarmAgreeProps {
  open: boolean;
  onClose: () => void;
}

export default function ServiceAlarmAgree({ open, onClose }: ServiceAlarmAgreeProps) {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onConfirm={onClose}
      title="서비스 알람 수신 동의"
      size="default"
      showFooter={false}
      className="account-modal"
    >
      <div className="agree-box">
        <div className="box-wrap">
          <p>
            대전 스마트물류 플랫폼은 다음과 같은 목적을 위하여 서비스 알림을 발송합니다. 동의하지
            않으셔도 기본 서비스 이용에는 제한이 없습니다.
          </p>
          <h2>1. 수신 목적</h2>
          <p>· 서비스 장애, 점검, 주요 정책 변경 등 서비스 공지 안내</p>
          <p>· 신규 기능, 이벤트, 설문 등 서비스 관련 정보 안내</p>
          <h2>2. 수신 항목 및 수단</h2>
          <p>· 이용자 정보: 회원가입 시 제공한 이름, 연락처, 이메일</p>
          <p>· 수신 수단: 문자메시지(SMS/LMS), 이메일, 알림톡, 앱 푸시 등</p>
          <h2>3. 보유 및 이용기간</h2>
          <p>· 서비스 알림 수신 동의 철회 또는 회원 탈퇴 시까지</p>
          <p>· 단, 관련 법령에 따라 보관이 필요한 경우 해당 법령에서 정한 기간 동안 보관</p>
          <h2>4. 동의 거부 권리 및 불이익 여부</h2>
          <p>· 이용자는 서비스 알림 수신에 대한 동의를 거부하실 수 있습니다.</p>
          <p>· 동의하지 않으시더라도 회원가입 및 기본 서비스 이용에는 어떠한 불이익도 없습니다.</p>
          <h2>5. 동의 철회 및 변경 방법</h2>
          <p>
            · 마이페이지 내 알림 설정 메뉴에서 수신 여부를 언제든지 변경하거나 철회하실 수 있습니다.
          </p>
          <p>· 또는 고객센터를 통해 수신 거부를 요청하실 수 있습니다.</p>
        </div>
      </div>
    </Modal>
  );
}
