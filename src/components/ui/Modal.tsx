'use client';

import { Modal as AntModal, ModalProps as AntModalProps, Button } from 'antd';
import Image from 'next/image';
import { ReactNode } from 'react';

// 커스텀 모달의 추가 props 타입 정의
interface CustomModalProps extends Omit<AntModalProps, 'footer'> {
  title?: string; // 모달 제목
  children?: ReactNode; // 모달 내용
  onConfirm?: () => void; // 확인 버튼 클릭 핸들러
  onCancel?: () => void; // 취소 버튼 클릭 핸들러
  confirmText?: string; // 확인 버튼 텍스트
  cancelText?: string; // 취소 버튼 텍스트
  confirmLoading?: boolean; // 확인 버튼 로딩 상태
  showFooter?: boolean; // 푸터 표시 여부
  footer?: ReactNode; // 커스텀 푸터
  size?: 'small' | 'default' | 'large' | 'fullscreen';
  variant?: 'default' | 'centered' | 'drawer' | 'popup';
  draggable?: boolean; // 드래그 가능 여부
  className?: string; // 추가 CSS 클래스
  confirmIcon?: ReactNode; // 확인 버튼 아이콘
  cancelIcon?: ReactNode; // 취소 버튼 아이콘
  titleIcon?: ReactNode; // 제목 아이콘
  showHeader?: boolean; // 헤더 표시 여부
}

// 커스텀 모달 컴포넌트
export const Modal: React.FC<CustomModalProps> = ({
  title,
  children,
  onConfirm,
  onCancel,
  confirmText = 'Apply',
  cancelText = 'Cancel',
  confirmLoading = false,
  showFooter = true,
  footer,
  size = 'default',
  variant = 'default',
  className = '',
  confirmIcon,
  cancelIcon,
  titleIcon,
  showHeader = true,
  ...props
}) => {
  const { style: customStyle, width: customWidth, ...restProps } = props;

  // 모달 크기 설정
  const getModalSize = () => {
    switch (size) {
      case 'small':
        return { width: 500 };
      case 'large':
        return { width: 1180 };
      case 'fullscreen':
        return { width: '100vw', height: '100vh', top: 0, margin: 0 };
      default:
        return { width: 570 };
    }
  };

  // 모달 스타일 설정
  const getModalStyle = () => {
    const baseStyle = getModalSize();

    if (variant === 'centered') {
      return { ...baseStyle, top: '50%', transform: 'translateY(-50%)' };
    }

    if (variant === 'drawer') {
      return {
        ...baseStyle,
        top: 0,
        right: 0,
        height: '100vh',
        margin: 0,
        borderRadius: 0,
      };
    }

    return baseStyle;
  };

  // 기본 푸터 렌더링
  const renderFooter = () => {
    if (!showFooter) return null;

    if (footer) return footer;

    return (
      <div className="modal-btn-line">
        <Button onClick={onCancel} className="btn-modal" icon={cancelIcon}>
          {cancelText}
        </Button>
        <Button
          type="primary"
          className="btn-modal"
          onClick={onConfirm}
          loading={confirmLoading}
          icon={confirmIcon}
        >
          {confirmText}
        </Button>
      </div>
    );
  };

  return (
    <AntModal
      {...restProps}
      title={
        showHeader ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-7.5 w-full mb-7.5">
              <button className="modal-header-btn" onClick={onCancel} title="뒤로가기">
                <Image src="/icons/ico-back.svg" alt="뒤로가기" width={30} height={24} />
              </button>
              {title && (
                <div className="flex items-center w-full gap-2.5">
                  {titleIcon && <span>{titleIcon}</span>}
                  {title.includes('<br>') ? (
                    <div dangerouslySetInnerHTML={{ __html: title }} />
                  ) : (
                    <span>{title}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : undefined
      }
      open={props.open}
      onCancel={onCancel}
      footer={renderFooter()}
      width={customWidth ?? getModalSize().width}
      style={{ ...getModalStyle(), ...customStyle }}
      className={`custom-modal ${variant} ${className}`}
      destroyOnHidden={true}
      maskClosable={false}
      keyboard={true}
      centered={variant === 'centered'}
      // mask={false}
    >
      {children}
    </AntModal>
  );
};

export default Modal;
