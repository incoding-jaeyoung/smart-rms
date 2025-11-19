import { App } from 'antd';
import { ReactNode, createElement } from 'react';

// App.useApp()을 사용하기 위한 헬퍼 함수
// 이 함수는 컴포넌트 내부에서 호출되어야 합니다
let modalInstance: ReturnType<typeof App.useApp> | null = null;

/**
 * 모달 인스턴스를 설정합니다 (컴포넌트 내부에서 호출)
 * @deprecated useModal 훅을 사용하는 것을 권장합니다
 */
export const setModalInstance = (instance: ReturnType<typeof App.useApp>) => {
  modalInstance = instance;
};
/**
 * 모달을 사용하기 위한 커스텀 훅
 * 모든 페이지에서 이 훅을 사용하면 됩니다
 *
 * @example
 * ```tsx
 * export default function MyPage() {
 *   const modal = useModal();
 *
 *   const handleClick = () => {
 *     modal.showConfirm({
 *       content: '삭제하시겠습니까?',
 *       onOk: () => console.log('삭제됨')
 *     });
 *   };
 * }
 * ```
 */
export const useModal = () => {
  const { modal } = App.useApp();

  return {
    showConfirm: (options: {
      title?: string | ReactNode;
      content: string | ReactNode;
      okText?: string;
      cancelText?: string;
      onOk?: () => void | Promise<void>;
      onCancel?: () => void;
    }) => {
      const title =
        typeof options.title === 'string' && options.title.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
          : options.title || '확인';

      const content =
        typeof options.content === 'string' && options.content.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
          : options.content;

      return modal.confirm({
        title: title,
        content: content,
        okText: options.okText || '예',
        cancelText: options.cancelText || '아니오',
        onOk: options.onOk,
        onCancel: options.onCancel,
        wrapClassName: 'alert-modal',
      });
    },
    showSuccess: (options: {
      title?: string | ReactNode;
      content: string | ReactNode;
      okText?: string;
      onOk?: () => void;
      autoClose?: number;
    }) => {
      const title =
        typeof options.title === 'string' && options.title.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
          : options.title || '성공';

      const content =
        typeof options.content === 'string' && options.content.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
          : options.content;

      const autoCloseDuration =
        typeof options.autoClose === 'number' ? options.autoClose : undefined;
      const modalRef = modal.success({
        title: title,
        content: content,
        okText: undefined,
        onOk: options.onOk,
        okButtonProps: { style: { display: 'none' } },
        cancelButtonProps: { style: { display: 'none' } },
        closable: false,
        mask: false,
        wrapClassName: 'alert-modal',
      });
      if (autoCloseDuration !== undefined) {
        setTimeout(() => {
          modalRef.destroy();
        }, autoCloseDuration);
      }
    },
    showError: (options: {
      title?: string | ReactNode;
      content: string | ReactNode;
      okText?: string;
      onOk?: () => void;
      autoClose?: number;
    }) => {
      const title =
        typeof options.title === 'string' && options.title.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
          : options.title || '오류';

      const content =
        typeof options.content === 'string' && options.content.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
          : options.content;

      const autoCloseDuration =
        typeof options.autoClose === 'number' ? options.autoClose : undefined;
      const modalRef = modal.error({
        title: title,
        content: content,
        okText: undefined,
        onOk: options.onOk,
        okButtonProps: { style: { display: 'none' } },
        cancelButtonProps: { style: { display: 'none' } },
        closable: false,
        mask: false,
        wrapClassName: 'alert-modal',
      });
      if (autoCloseDuration !== undefined) {
        setTimeout(() => {
          modalRef.destroy();
        }, autoCloseDuration);
      }
    },
    showWarning: (options: {
      title?: string | ReactNode;
      content: string | ReactNode;
      okText?: string;
      onOk?: () => void;
      autoClose?: number;
    }) => {
      const title =
        typeof options.title === 'string' && options.title.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
          : options.title || '경고';

      const content =
        typeof options.content === 'string' && options.content.includes('<br/>')
          ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
          : options.content;

      const autoCloseDuration =
        typeof options.autoClose === 'number' ? options.autoClose : undefined;
      const modalRef = modal.warning({
        title: title,
        content: content,
        okText: undefined,
        onOk: options.onOk,
        okButtonProps: { style: { display: 'none' } },
        cancelButtonProps: { style: { display: 'none' } },
        closable: false,
        mask: false,
        wrapClassName: 'alert-modal',
      });
      if (autoCloseDuration !== undefined) {
        setTimeout(() => {
          modalRef.destroy();
        }, autoCloseDuration);
      }
    },
  };
};

/**
 * 확인 모달 (Confirm)
 * @param options 모달 옵션
 * @returns Promise - 확인 시 resolve, 취소 시 reject
 */
export const showConfirm = (options: {
  title?: string | ReactNode;
  content: string | ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
}) => {
  if (!modalInstance) {
    throw new Error('setModalInstance must be called before using modal functions');
  }
  const title =
    typeof options.title === 'string' && options.title.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
      : options.title || '확인';

  const content =
    typeof options.content === 'string' && options.content.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
      : options.content;

  return modalInstance.modal.confirm({
    title: title,
    content: content,
    okText: options.okText || '확인',
    cancelText: options.cancelText || '취소',
    onOk: options.onOk,
    onCancel: options.onCancel,
    wrapClassName: 'alert-modal',
  });
};

/**
 * 정보 모달 (Info)
 */
/**
 * 성공 모달 (Success)
 */
export const showSuccess = (options: {
  title?: string | ReactNode;
  content: string | ReactNode;
  okText?: string;
  onOk?: () => void;
  autoClose?: number;
}) => {
  if (!modalInstance) {
    throw new Error('setModalInstance must be called before using modal functions');
  }
  const title =
    typeof options.title === 'string' && options.title.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
      : options.title || '성공';

  const content =
    typeof options.content === 'string' && options.content.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
      : options.content;

  const autoCloseDuration = typeof options.autoClose === 'number' ? options.autoClose : undefined;
  const modalRef = modalInstance.modal.success({
    title: title,
    content: content,
    okText: undefined,
    onOk: options.onOk,
    okButtonProps: { style: { display: 'none' } },
    cancelButtonProps: { style: { display: 'none' } },
    closable: false,
    mask: false,
    wrapClassName: 'alert-modal',
  });
  if (autoCloseDuration !== undefined) {
    setTimeout(() => {
      modalRef.destroy();
    }, autoCloseDuration);
  }
};

/**
 * 에러 모달 (Error)
 */
export const showError = (options: {
  title?: string | ReactNode;
  content: string | ReactNode;
  okText?: string;
  onOk?: () => void;
  autoClose?: number;
}) => {
  if (!modalInstance) {
    throw new Error('setModalInstance must be called before using modal functions');
  }
  const title =
    typeof options.title === 'string' && options.title.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
      : options.title || '오류';

  const content =
    typeof options.content === 'string' && options.content.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
      : options.content;

  const autoCloseDuration = typeof options.autoClose === 'number' ? options.autoClose : undefined;
  const modalRef = modalInstance.modal.error({
    title: title,
    content: content,
    okText: undefined,
    onOk: options.onOk,
    okButtonProps: { style: { display: 'none' } },
    cancelButtonProps: { style: { display: 'none' } },
    closable: false,
    mask: false,
    wrapClassName: 'alert-modal',
  });
  if (autoCloseDuration !== undefined) {
    setTimeout(() => {
      modalRef.destroy();
    }, autoCloseDuration);
  }
};

/**
 * 경고 모달 (Warning)
 */
export const showWarning = (options: {
  title?: string | ReactNode;
  content: string | ReactNode;
  okText?: string;
  onOk?: () => void;
  autoClose?: number;
}) => {
  if (!modalInstance) {
    throw new Error('setModalInstance must be called before using modal functions');
  }
  const title =
    typeof options.title === 'string' && options.title.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.title } })
      : options.title || '경고';

  const content =
    typeof options.content === 'string' && options.content.includes('<br/>')
      ? createElement('div', { dangerouslySetInnerHTML: { __html: options.content } })
      : options.content;

  const autoCloseDuration = typeof options.autoClose === 'number' ? options.autoClose : undefined;
  const modalRef = modalInstance.modal.warning({
    title: title,
    content: content,
    okText: undefined,
    onOk: options.onOk,
    okButtonProps: { style: { display: 'none' } },
    cancelButtonProps: { style: { display: 'none' } },
    closable: false,
    mask: false,
    wrapClassName: 'alert-modal',
  });
  if (autoCloseDuration !== undefined) {
    setTimeout(() => {
      modalRef.destroy();
    }, autoCloseDuration);
  }
};
