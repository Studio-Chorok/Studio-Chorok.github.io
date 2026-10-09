# Studio Chorok — Modern Minimalist Web Showcase / 모던 미니멀리스트 웹 쇼케이스

<div align="center">
  <img src="img/CI.png" alt="Studio Chorok Logo" width="260" />
  <br />
  <strong>Design & Development Experts</strong>
  <br /><br />
  <a href="https://Studio-Chorok.github.io/"><strong>🌐 Live Site Demo / 실서비스 데모 바로가기 »</strong></a>
</div>

---

> **Language Notice / 언어 안내**: This document is provided in both English and Korean. / 본 문서는 영문과 한글을 동시에 병기하여 제공됩니다.  
> **Current Version / 현재 버전**: `1.6.0` (CUBEOUT Privacy Policy Subpage Edition)

---

## 1. Project Overview / 프로젝트 개요

### English
**Studio Chorok (스튜디오 초록)** is a specialized design and digital engineering studio delivering innovative solutions across UI/UX, printing, digital media, mobile apps, and interactive games.

Version `1.6.0` introduces the official dedicated **Privacy Policy Subpage for the mobile game CUBEOUT: Stealth Escape**:
- **CUBEOUT Privacy Policy Subpage (`Game/CubeOut/Privacy/`)**:
  - Live Legal URL: [Game/CubeOut/Privacy/](file:///d:/Git/Project/Studio-Chorok.github.io/Game/CubeOut/Privacy/index.html)
  - Compliant with Google Play and Apple App Store privacy disclosure standards.
  - Covers local save policies, Google AdMob SDK disclosures, Apple Game Center leaderboards, In-App Purchase verification, and children's privacy.
  - Interactive client-side toggle between authentic English source text and Korean legal translation.
- **Interactive Ambient Spotlight (`#ambient-spotlight`)**: A smooth, real-time radial spotlight tracking cursor coordinates with fluid Lerp interpolation.
- **Custom GLSL Shader Engine**: Quantum Nebula particles and Holographic Fresnel metallic Torus Knot sculpture.
- **Dynamic Bright-to-Dark Atmospheric Shift**: Luminous bright gallery for Sections 1–4, seamless transition to deep obsidian void for Section 5 (Contact).
- **Minimalist Pretendard Typography**: Unified sans-serif system with strictly no italics and pure text category tags.
- **Direct Official Inquiry**: Direct one-click email copying for `studio.chorok@gmail.com`.

### 한국어
**스튜디오 초록(Studio Chorok)**은 UI/UX, 인쇄 브랜딩, 디지털 미디어, 모바일 앱 및 모바일 게임에 이르기까지 전 영역에서 혁신적인 솔루션을 제공하는 디자인 & 엔지니어링 스튜디오입니다.

`v1.6.0` 버전은 모바일 게임 **CUBEOUT: Stealth Escape 공식 개인정보처리방침 서브페이지**를 신설하여 앱스토어 배포 컴플라이언스를 완벽히 수립했습니다:
- **CUBEOUT 개인정보처리방침 서브페이지 (`Game/CubeOut/Privacy/`)**:
  - 실서비스 경로: [Game/CubeOut/Privacy/](file:///d:/Git/Project/Studio-Chorok.github.io/Game/CubeOut/Privacy/index.html)
  - 구글 플레이 및 애플 앱스토어의 개인정보 처리 공시 요구사항을 100% 충족.
  - 단말기 로컬 데이터 저장 원칙, Google AdMob 광고 SDK 연동, Apple Game Center 순위표, 인앱 결제(IAP) 검증, 아동 개인정보 보호 등 10개 조항 수록.
  - 공식 영문 원문 및 전문 한국어 번역 간의 실시간 토글 인터랙션 제공.
- **마우스 반응형 앰비언트 스포트라이트 (`#ambient-spotlight`)**: 커서 좌표를 60fps 럴프(Lerp)로 부드럽게 추적하며 은은한 감성 조명을 연출.
- **커스텀 GLSL 쉐이더 엔진**: 양자 성운 파티클 및 프레넬 홀로그래픽 조각품 탑재.
- **스크롤 연동 실시간 분위기 전환 (Bright -> Deep Void)**: 맑은 갤러리 분위기(섹션 1~4)에서 딥 보이드 밤하늘(섹션 5 Contact)로 부드러운 페이드 전환.
- **프리텐다드(Pretendard) 단일 서체 및 순수 텍스트 태그**: 이탤릭을 완전히 배제한 단단하고 현대적인 산세리프 서체.
- **공식 문의 메일**: `studio.chorok@gmail.com` 원클릭 주소 복사 및 메일 앱 실행 지원.

---

## 2. Section Content Mapping / 섹션별 원문 텍스트 구성

1. **Category Tag: `OVERVIEW`**:
   - *Title*: `Design & Development Experts`
   - *Text*: *From UI/UX, printing, digital media, mobile apps, to mobile games, we provide innovative solutions across all areas.*
2. **Category Tag: `UI / UX INNOVATION`**:
   - *Title*: `UI/UX Innovation`
   - *Text*: *We prioritize user experience and create beautiful interfaces that boost business value.*
3. **Category Tag: `PRINTING & DIGITAL CONTENT`**:
   - *Title*: `Printing & Digital Content`
   - *Text*: *From branding materials to digital content, we deliver synergy across online and offline markets.*
4. **Category Tag: `MOBILE APPS & GAME DEVELOPMENT`**:
   - *Title*: `Mobile Apps & Game Development`
   - *Text*: *Excel in the smartphone era with outstanding apps and games that set you apart.*
5. **Category Tag: `YOUR TOTAL PARTNER`**:
   - *Title*: `Your Total Design & Development Partner`
   - *Text*: *Transform your ideas into reality! Trust us with every step from design to development.*
   - *Contact*: `studio.chorok@gmail.com`

---

## 3. How to Run Locally / 로컬 실행 방법

```bash
# Clone the repository / 저장소 복제
git clone https://github.com/Studio-Chorok/Studio-Chorok.github.io.git
cd Studio-Chorok.github.io

# Launch static server with Python / 파이썬 정적 웹 서버 실행
python -m http.server 8000
# Open http://localhost:8000 in your browser / 브라우저에서 접속
```

---

## 4. Pros & Cons Analysis / 장단점 비교 분석

### Advantages / 장점
1. **Elegant & Restrained Interactivity (절제되고 우아한 인터랙션)**:
   - Spotlight gently responds to the user without distracting from the authentic editorial message or causing visual fatigue.
   - 마우스를 따라 은은하게 피어나는 조명 효과가 시선의 피로감 없이 기분 좋은 감성적 피드백을 제공.
2. **Pure Artistic Focus (본연의 조각상 미학 집중)**:
   - Keeps the iconic metallic Torus Knot and custom GLSL Quantum Nebula particles at the center of attention.
   - 복잡한 모핑 대신 완성도 높은 코스믹 토러스 조각상과 양자 성운 파티클 쉐이더의 아름다움에 집중.
3. **Silky-Smooth 60fps Stability (실크 같은 프레임 안정성)**:
   - Lightweight CSS radial gradient updated via requestAnimationFrame Lerp loop with zero frame drops.
   - GPU 가속 기반으로 저사양 기기 및 모바일에서도 끊김 없이 60fps 유지.

### Considerations / 고려 사항
1. **Touchscreen Device Fallback (터치스크린 환경)**:
   - On touch devices without cursor tracking, spotlight defaults to a beautiful centered ambient aura (`50vw, 50vh`).
