import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

// 한국어 로케일 설정
dayjs.locale('ko');

export const antdConfig = {
  locale: koKR,
  theme: {
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 6,
    },
    components: {
      Modal: {
        motionDurationMid: '0s',
        motionDurationSlow: '0s',
      },
    },
  },
};

export { ConfigProvider };
