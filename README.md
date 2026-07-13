# ⚾ KIA TIGERS GAME DAY ARCHIVE
> **나의 직관 기록과 KIA 타이거즈를 향한 팬심을 담은 웹 아카이브**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📌 프로젝트 개요
- **프로젝트명:** I AM (아이엠) - KIA TIGERS GAME DAY ARCHIVE
- **목적:** 바닐라 JS와 HTML/CSS를 활용하여 관심 주제를 매력적으로 소개하는 단일 페이지 웹 서비스(SPA) 구현
- **주요 내용:** V13을 향한 응원, 주요 선수(김도영, 양현종, 박재현) 소개, 명경기 직관 갤러리 및 팬 방명록

## 🖥️ 화면 미리보기
*(여기에 완성된 웹사이트의 메인 화면이나 다크 모드가 적용된 스크린샷 1~2장을 캡처해서 넣어주세요. 예: `![메인화면](./사진폴더/screenshot.png)`)*

## 💡 주요 기능 및 기술 스택

### 1. 동적 인터랙션 및 상태 관리 (JavaScript)
- **다크 모드 토글:** 사용자 테마를 고려하여 라이트/다크 모드 전환 기능을 구현하고, 직관적인 아이콘(☀️/🌙)으로 상태를 표시합니다.
- **팬 방명록 (Guestbook):** `localStorage`를 활용하여 브라우저를 새로고침해도 작성한 응원 메시지가 유지되도록 CRUD(작성/삭제/조회) 기능을 구현했습니다.
- **갤러리 모달 확대:** 갤러리 이미지 클릭 시 부드러운 스케일 업 애니메이션과 함께 이미지가 확대되는 모달(Modal) 창을 구현했습니다.
- **랜덤 응원 문구 & 스크롤 인디케이터:** 버튼 클릭 시 배열 내 텍스트를 `Math.random()`으로 무작위 렌더링하며, 현재 스크롤 위치를 계산(`scrollY / max`)하여 상단 프로그레스 바를 동적 업데이트합니다.

### 2. 세련된 UI/UX 및 애니메이션 (CSS)
- **Intersection Observer API:** 스크롤 시 뷰포트에 진입하는 요소에 CSS 클래스(`.visible`)를 추가하여 부드러운 페이드인/슬라이드업(`reveal`) 애니메이션을 구현했습니다. 성능을 위해 한 번 노출된 요소는 `unobserve` 처리합니다.
- **테마 변수 관리:** CSS 변수(`:root`)를 사용하여 KIA 타이거즈의 상징적인 컬러와 다크 모드 시의 색상값을 체계적으로 관리합니다.
- **반응형 웹 디자인 (RWD):** `@media` 쿼리를 활용해 모바일 환경(700px 이하)에서 네비게이션 숨김, 그리드 1열 재배치 등 모바일 친화적 레이아웃을 적용했습니다.

### 3. 웹 접근성(A11y) 고려
- 시스템의 '애니메이션 축소' 설정을 켠 사용자를 배려하여 `@media (prefers-reduced-motion: reduce)`를 적용했습니다.
- 스크린 리더 사용자를 위한 `aria-label`, 동적 콘텐츠 변경을 알리는 `aria-live="polite"`, 시각적으로만 숨기는 `sr-only` 유틸리티 클래스를 적극 활용했습니다.

## 📝 개발 주안점 및 회고 (What I Learned)
- 외부 라이브러리 없이 **순수 바닐라 JS만으로 스크롤 이벤트, DOM 조작, 로컬 스토리지를 활용한 데이터 관리**를 직접 구현하며 브라우저 동작 원리에 대한 이해도를 높였습니다.
- `IntersectionObserver`를 도입하여, 기존의 잦은 `scroll` 이벤트 리스너 호출로 인한 성능 저하(Reflow/Repaint) 문제를 방지하는 방법을 체감했습니다.
- 직관적인 사용자 경험을 위해 타이포그래피(`Black Han Sans` 포인트 폰트)와 색상 테마를 CSS 변수로 분리하여 유지보수성과 확장성을 높였습니다.

## 🚀 향후 업데이트 계획 (To-Do)
- [ ] KBO 오픈 API(또는 크롤링)를 활용한 최신 경기 결과 요약 연동
- [ ] 방명록 데이터를 백엔드(Firebase 등)와 연동하여 실제 다른 사용자들과 응원 메시지를 공유하는 기능 추가

## 📁 폴더 구조
```text
📦 Ssafy_I_AM
 ┣ 📂 사진폴더 (선수 사진 등 이미지 에셋)
 ┣ 📂 images (배경, 포스터, 갤러리 이미지)
 ┣ 📂 내가야구장을 좋아하는이유 (영상 및 이미지 리소스)
 ┣ 📜 index.html (메인 화면 및 구조)
 ┣ 📜 style.css (스타일링, 애니메이션, 다크모드)
 ┣ 📜 script.js (이벤트 로직 및 로컬 스토리지 관리)
 ┗ 📜 README.md (프로젝트 문서)