# 대전스마트물류센터

대전스마트물류센터 관리 시스템을 위한 Next.js 기반 웹 애플리케이션

## 🚀 기술 스택

- **Framework**: Next.js 15.5.4 (App Router + Turbopack)
- **Runtime**: React 18.3.1
- **Language**: TypeScript 5
- **UI Library**: Ant Design 5.27.4
- **Styling**: Tailwind CSS 4
- **Table Library**: Tabulator 6.3.1
- **Icons**: @ant-design/icons
- **Date Library**: Day.js 1.11.18

## 📦 주요 기능

### ✨ UI/UX

- 심플하고 직관적인 레이아웃 (헤더 + 컨텐츠)
- 모달 시스템 (다양한 크기 및 스타일 지원)
- 커스텀 Tabulator 테이블 컴포넌트
- 한국어 UI 지원 (Ant Design 한국어 locale)
- 반응형 디자인 (모바일/데스크톱 지원)

### 🔐 인증 시스템

- **로그인 페이지**: 비디오 배경과 모달 기반 로그인
- **계정 찾기**: 아이디 찾기 / 비밀번호 변경 탭 기능
- **회원가입**: 이메일 기반 회원가입 모달
- **SNS 로그인**: 카카오톡, 네이버 연동 지원
- **비밀번호 관리**: 비밀번호 변경 및 재설정

### 📊 대시보드

- 물류 현황 실시간 모니터링
- 그룹별 필터링
- 재고 및 오류 코드 추적

### 🎨 컴포넌트 데모

- **폼 컴포넌트**: 다양한 상태의 입력 필드 (정상/에러/비활성화)
- **버튼 컴포넌트**: 다양한 타입과 크기의 버튼
- **모달 컴포넌트**: 계정 관련 모달들 (아이디 찾기, 회원가입 등)
- **삭제 버튼**: 입력 필드 내 삭제 기능

### 🔧 사용자 관리

- 비밀번호 변경
- 역할 기반 접근 제어
- 사용자 정보 수정

## 🛠️ 설치 및 실행

### 로컬 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (포트: 3002)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### Docker 환경

#### 개발 환경

```bash
# 개발 환경 컨테이너 실행
docker-compose up dev

# 또는
docker-compose up
```

#### 프로덕션 환경

```bash
# 프로덕션 빌드 및 실행
docker-compose --profile production up prod
```

#### Docker 명령어

```bash
# 백그라운드 실행
docker-compose up -d

# 컨테이너 중지
docker-compose down

# 로그 확인
docker-compose logs -f

# 이미지 재빌드
docker-compose build --no-cache
```

## 📁 프로젝트 구조

```
daejeon-smart-logistics/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── components-demo/    # 컴포넌트 데모 페이지
│   │   ├── layout/             # 레이아웃 데모 페이지
│   │   ├── log-in/             # 로그인 페이지
│   │   ├── modal-basic/        # 모달 예제 페이지
│   │   ├── table-examples/     # 테이블 예제 페이지
│   │   ├── globals.css         # 전역 스타일
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 홈 페이지
│   │   └── favicon.ico         # 파비콘
│   ├── components/
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   │   ├── Header.tsx      # 헤더
│   │   │   └── LoginWrap.tsx   # 로그인 래퍼
│   │   ├── popup/              # 모달 컴포넌트
│   │   │   ├── FindAccount.tsx # 계정 찾기
│   │   │   ├── JoinUser.tsx    # 회원가입
│   │   │   ├── SearchSuccess.tsx # 아이디 찾기 결과
│   │   │   ├── PwChangeSuccess.tsx # 비밀번호 변경 성공
│   │   │   └── ModalDefault.tsx # 기본 모달
│   │   ├── ui/                 # 공통 UI 컴포넌트
│   │   │   ├── Modal.tsx       # 모달 래퍼
│   │   │   ├── Icon.tsx        # 아이콘 컴포넌트
│   │   │   ├── TabulatorTable.tsx # Tabulator 테이블
│   │   │   ├── index.ts        # UI 컴포넌트 export
│   │   │   └── TabulatorTable.md # 테이블 문서
│   │   └── AntdWarningFilter.tsx # Ant Design 경고 필터
│   ├── hooks/
│   │   └── useFilter.ts        # 커스텀 훅
│   ├── lib/
│   │   └── antd.ts             # Ant Design 설정 (한국어 locale)
│   ├── styles/                 # CSS 모듈
│   │   ├── modal.css           # 모달 스타일
│   │   ├── form.css            # 폼 스타일
│   │   ├── content.css         # 컨텐츠 스타일
│   │   └── tabulator.css       # Tabulator 스타일
│   └── config/
│       ├── pages.ts            # 페이지 설정
│       └── menuConfig.ts       # 메뉴 설정
├── public/
│   ├── icons/                  # SVG 아이콘
│   │   ├── ico-*.svg           # 각종 아이콘들
│   │   ├── Ribbon.png          # 리본 이미지
│   │   ├── menu/               # 메뉴 아이콘
│   │   └── README.md           # 아이콘 설명
│   ├── images/                 # 이미지
│   │   ├── bg-login*.png       # 로그인 배경
│   │   ├── img-*.png           # 각종 이미지
│   │   └── logo.svg            # 로고
│   └── videos/                 # 비디오 (로그인 배경)
│       ├── bg-movie.mp4        # 배경 비디오
│       └── bg-movie.png        # 비디오 썸네일
├── Dockerfile                  # Docker 설정
├── docker-compose.yml          # Docker Compose 설정
└── package.json                # 의존성 및 스크립트

```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: `#171A1C` (검은색)
- **Secondary**: `#D70051` (핑크)
- **Border**: `#C7CDD1` (회색)
- **Background**: `#F4F5F6` (연한 회색)

### 폰트

- **기본 폰트**: Pretendard (한글/영문)
- **대체 폰트**: Inter, sans-serif

### 버튼 크기

- **Small**: 24px
- **Default**: 32px
- **Large**: 58px
- **Modal**: 48px

## 🔧 환경 변수

`.env.local` 파일을 생성하여 환경 변수를 설정하세요:

```env
# API URL (필요시)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 📝 개발 가이드

### 코드 스타일

- **ESLint**: 코드 품질 검사
- **Prettier**: 코드 포맷팅 (저장 시 자동 포맷팅)
- 포맷팅 규칙:
  - 세미콜론 사용
  - 싱글 쿼트 사용
  - 탭 크기: 2칸
  - 최대 줄 길이: 100자
  - Trailing comma: ES5

### 포맷팅 명령어

```bash
# 전체 파일 포맷팅
npm run format

# 포맷팅 체크 (수정하지 않음)
npm run format:check
```

### 커밋 컨벤션

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `style`: 스타일 변경
- `refactor`: 코드 리팩토링
- `docs`: 문서 수정

## 🆕 최신 업데이트

### v1.2.0 (2024-12-19)

#### ✨ 새로운 기능

- **로그인 시스템 완전 개편**
  - 비디오 배경과 모달 기반 로그인 UI
  - 아이디 찾기 / 비밀번호 변경 탭 기능
  - SNS 로그인 지원 (카카오톡, 네이버)
  - 회원가입 모달 시스템

- **컴포넌트 데모 페이지**
  - 다양한 상태의 폼 컴포넌트 (정상/에러/비활성화)
  - 입력 필드 삭제 버튼 기능
  - 버튼 컴포넌트 다양한 타입과 크기

- **모달 시스템 개선**
  - 계정 찾기 결과 모달
  - 비밀번호 변경 성공 모달
  - 그라데이션 테두리와 블러 효과

#### 🔧 개선사항

- 폼 컴포넌트 CSS 스타일링 개선
- 반응형 디자인 최적화
- TypeScript 타입 안정성 향상
- 코드 구조 개선 및 리팩토링

#### 🐛 버그 수정

- Form Item name 충돌 해결
- useState와 initialValues 동기화
- 모달 렌더링 최적화

## 🐛 알려진 이슈

현재 알려진 이슈는 없습니다.

## 📄 라이선스

Private

## 👥 기여자

- 대전스마트물류센터 개발팀

## 📞 문의

프로젝트 관련 문의사항은 개발팀에 문의해주세요.
