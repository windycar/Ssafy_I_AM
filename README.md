# ⚾ KIA TIGERS GAME DAY ARCHIVE
> **나의 직관 기록과 KIA 타이거즈를 향한 팬심을 담은 웹 아카이브**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📌 프로젝트 개요
- **프로젝트명:** I AM (아이엠) - KIA TIGERS GAME DAY ARCHIVE
- **목적:** 바닐라 JS와 HTML/CSS를 활용하여 관심 주제를 매력적으로 소개하는 단일 페이지 웹 서비스(SPA) 구현
- **주요 내용:** V13을 향한 응원, 주요 선수(김도영, 양현종, 박재현) 소개, 명경기 직관 기록 및 갤러리

## 🖥️ 화면 미리보기
*(여기에 완성된 웹사이트 스크린샷 1~2장을 캡처해서 넣어주세요. 예: `![메인화면](./사진폴더/screenshot.png)`)*

## 💡 주요 기능 및 기술 스택

### 1. 동적 인터랙션 및 DOM 조작 (JavaScript)
- **랜덤 응원 문구 생성:** 하단 CTA 버튼 클릭 시, 배열에 저장된 텍스트 중 하나를 `Math.random()`으로 추출하여 화면에 즉각 렌더링.
- **스크롤 진행률 인디케이터:** 사용자의 스크롤 위치를 계산(`scrollY / max`)하여 상단 프로그레스 바의 너비(width)를 동적으로 업데이트.

### 2. 세련된 UI/UX 및 애니메이션 (CSS)
- **Intersection Observer API:** 스크롤 시 뷰포트에 요소가 진입하면 CSS 클래스(`.visible`)를 추가하여 부드러운 페이드인/슬라이드업(`reveal`) 애니메이션 구현. 성능 저하를 방지하기 위해 한 번 노출된 요소는 `unobserve` 처리.
- **반응형 웹 디자인 (RWD):** `@media` 쿼리를 활용해 모바일 환경(700px 이하)에서 네비게이션 숨김, 그리드 1열 재배치 등 모바일 친화적 레이아웃 적용.

### 3. 웹 접근성(A11y) 고려
- 시스템의 '애니메이션 축소' 설정을 켠 사용자를 배려하여 `@media (prefers-reduced-motion: reduce)` 적용.
- 스크린 리더 사용자를 위한 `aria-label` 및 동적 콘텐츠 변경을 알리는 `aria-live="polite"` 속성 활용.

## 📝 개발 주안점 및 회고 (What I Learned)
- 외부 라이브러리 없이 **순수 바닐라 JS만으로 스크롤 이벤트와 DOM 조작을 구현**하며 브라우저 렌더링 원리에 대한 이해도를 높였습니다.
- 특히 `IntersectionObserver`를 도입하여, 기존의 잦은 `scroll` 이벤트 리스너 호출로 인한 성능 저하(Reflow/Repaint) 문제를 어떻게 방지할 수 있는지 체감할 수 있었습니다.
- 직관적인 사용자 경험을 위해 타이포그래피(`Black Han Sans` 포인트 폰트)와 KIA 타이거즈의 상징적인 컬러값을 CSS 변수(`:root`)로 관리하여 유지보수성을 높였습니다.

## 🚀 향후 업데이트 계획 (To-Do)
- [ ] 다크 모드 / 라이트 모드 토글 기능 추가
- [ ] 갤러리 이미지 클릭 시 확대되는 모달(Modal) 창 구현
- [ ] KBO 오픈 API(또는 크롤링)를 활용한 최신 경기 결과 요약 연동

## 📁 폴더 구조
```text
📦 Ssafy_I_AM
 ┣ 📂 사진폴더 (경기 직관 이미지 및 에셋 리소스)
 ┣ 📜 index.html (메인 화면 및 이벤트 로직)
 ┗ 📜 README.md