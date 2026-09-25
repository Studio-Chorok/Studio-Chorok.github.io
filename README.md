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
> **Current Version / 현재 버전**: `1.5.1` (Interactive Ambient Spotlight & Custom GLSL Edition)

---

## 1. Project Overview / 프로젝트 개요

### English
**Studio Chorok (스튜디오 초록)** is a specialized design and digital engineering studio delivering innovative solutions across UI/UX, printing, digital media, mobile apps, and interactive games.

Version `1.5.1` adds an **Interactive Mouse-Tracking Ambient Spotlight** over the authentic, elegant 3D atmosphere:
- **Interactive Ambient Spotlight (`#ambient-spotlight`)**: A smooth, real-time radial spotlight tracking cursor coordinates with fluid Lerp interpolation. It bathes the gallery atmosphere in a gentle mint/emerald sunray during Sections 1–4, and casts a radiant neon emerald/cyan glow in Section 5 (Deep Void).
- **Quantum Nebula Particle Shader**: Procedural 3D harmonic wave motion with soft Gaussian falloff, breathing and twinkling naturally across space.
- **Holographic Fresnel Sculpture Shader**: An organic 3D metallic Torus Knot refracting iridescent cyan and amber rim lights based on grazing viewing angles.
- **Dynamic Bright-to-Dark Atmospheric Shift**:
  - *Sections 1–4*: Luminous, ethereal bright gallery atmosphere (`#f2f8f5`) with translucent prism art and high-contrast deep forest/emerald gradient Pretendard typography.
  - *Section 5 (Contact)*: Automatically transitions into a deep obsidian cosmic void (`#030705`), dramatically illuminating radiant white typography and glowing emerald buttons.
- **Minimalist Pretendard Typography**: Unified sans-serif system with strictly no italics and pure text category tags.
- **Direct Official Inquiry**: Direct one-click email copying for `studio.chorok@gmail.com`.

### 한국어
**스튜디오 초록(Studio Chorok)**은 UI/UX, 인쇄 브랜딩, 디지털 미디어, 모바일 앱 및 모바일 게임에 이르기까지 전 영역에서 혁신적인 솔루션을 제공하는 디자인 & 엔지니어링 스튜디오입니다.

`v1.5.1` 버전은 기존의 정갈하고 우아한 3D 아트 씬 위에 **마우스 반응형 앰비언트 스포트라이트(Interactive Ambient Spotlight)**를 절제미 있게 추가하여 감성적인 인터랙션을 완성했습니다:
- **마우스 반응형 앰비언트 스포트라이트 (`#ambient-spotlight`)**: 커서의 움직임을 60fps 럴프(Lerp) 보간으로 매끄럽게 추적하며 배경과 텍스트를 은은하게 비추는 래디얼 조명 레이어. 밝은 테마에서는 온화한 에메랄드/민트 햇살을, 딥 보이드(Contact)에서는 영롱한 네온 에메랄드/시안 빛을 투사합니다.
- **양자 성운 파티클 쉐이더**: 절차적 3D 조화 진동과 가우시안 소프트 감쇠를 통해 우주 공간 속에서 유기적으로 유영하고 반짝이는 소프트 파티클 필드.
- **홀로그래픽 프레넬 조각품 쉐이더**: 시선 각도에 따라 일렉트릭 시안과 샴페인 골드가 영롱하게 굴절·산란되는 유기적 3D 메탈릭 토러스 아트 조각품.
- **스크롤 연동 실시간 분위기 전환 (Bright -> Deep Void)**:
  - *섹션 1~4*: 맑고 몽환적인 밝은 아트 갤러리 분위기(`#f2f8f5`) 속에서 투명한 프리즘 조각품과 딥 포레스트/에메랄드 그라디언트 텍스트가 극상의 가독성과 세련미를 제공.
  - *섹션 5 (Contact)*: 스크롤 도달 시 매끄럽게 깊고 신비로운 어두운 밤하늘(보이드 블랙 `#030705`)로 전환되어, 순백의 발광 텍스트와 에메랄드 컨택 버튼이 압도적인 몰입감 형성.
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
