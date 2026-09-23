# Studio Chorok - Changelog & Version History / 변경 이력 및 버전 기록

All notable changes to this project will be documented in this file following the [Semantic Versioning (SemVer)](https://semver.org/) specification.
본 프로젝트의 모든 중요한 변경 사항은 [시맨틱 버저닝(Semantic Versioning, SemVer)](https://semver.org/) 규격에 따라 본 문서에 기록됩니다.

- **Major (주 버전)**: Incompatible structural overhauls or architectural redesigns. / 하위 호환성이 깨지는 거대한 변경, 구조 재설계. (예: `1.0.0` -> `2.0.0`)
- **Minor (부 버전)**: Backward-compatible feature additions or enhancements. / 하위 호환성을 유지하면서 새로운 기능이 추가되는 경우. (예: `1.0.0` -> `1.1.0` -> `1.2.0`)
- **Patch (패치/수정)**: Backward-compatible bug fixes or minor cosmetic adjustments. / 기능 추가 없이 버그 수정, 오타 수정 등 사소한 변경. (예: `1.0.0` -> `1.0.1`)

---

## [1.5.0] - 2026-09-24

### Added & Artistic Breakthrough / 신규 기능 및 아티스틱 혁신
- **Custom GLSL Shader Pipeline (`js/three-scene.js v1.5.0`)**:
  - Implemented **Quantum Nebula Particle Shader** (`THREE.ShaderMaterial`): 3D procedural harmonic wave displacement and soft Gaussian falloff (`exp(-r*r*9.0)`) with per-particle twinkle shimmer.
  - Implemented **Holographic Fresnel Art Sculpture Shader**: Dynamic Fresnel iridescent glow (`pow(1.0 - dot(N, V), 2.5)`) refracting electric cyan and luminous gold along the organic 3D metallic Torus Knot.
  - 커스텀 GLSL 쉐이더 파이프라인 탑재: 3D 조화 파동과 가우시안 소프트 감쇠를 머금은 양자 성운 파티클 쉐이더 및 시점 각도에 따라 영롱하게 굴절·산란되는 홀로그래픽 프레넬 조각품 쉐이더 구현.
- **Dynamic Bright Gallery to Deep Void Atmospheric Transition (`js/three-scene.js`, `css/style.css`, `js/main.js`)**:
  - **Sections 1–4 (Overview, UI/UX, Branding, Engineering)**: Bathed in a luminous, ethereal bright gallery atmosphere (`#f2f8f5`), showcasing translucent prism art and high-contrast deep forest/emerald gradient Pretendard typography.
  - **Section 5 (Contact: Your Total Partner)**: Seamlessly transitions into a deep obsidian cosmic void (`#030705`), making radiant white typography, gold/cyan rim lights, and glowing emerald contact buttons dramatically pop.
  - 스크롤 진행에 따른 실시간 분위기 전환 시스템: 섹션 1~4는 맑고 우아한 밝은 갤러리 분위기로 연출하고, 섹션 5(Contact) 도달 시 깊고 신비로운 어두운 밤하늘(보이드 블랙)로 매끄럽게 페이드 전환.

---

## [1.4.0] - 2026-09-24

### Changed & Refined / 변경 및 디자인 정제
- **Unified Pretendard Typography System (`index.html`, `css/style.css`)**:
  - Replaced dual-font setup (Cormorant Garamond & Plus Jakarta Sans) with **Pretendard** as the single unified sans-serif font across all elements.
  - Completely eliminated all italic styling (`<em>` tags, `font-style: italic`), achieving a crisp, modern, and solid aesthetic.
  - 모든 서체를 **Pretendard** 단일 산세리프 체계로 전면 통일 및 이탤릭 스타일(`<em>`, `font-style: italic`) 전면 배제.
- **Pure Text Category Tags (No Oval, No Dot)**:
  - Removed the green dot indicator (`::before`) and the pill/oval background box from `.editorial-tag`.
  - Category tags now render as pure, luminous Cyan uppercase text (`#38bdf8`) with wide letter-spacing, maximizing minimalism.
  - 섹션 상단 태그 앞의 초록색 점과 타원형 테두리/배경을 완전히 제거하고, 순수 시안 텍스트 형태로만 간결하게 표시.
- **Removed Auxiliary Editorial Quote Frames**:
  - Completely deleted promotional quote boxes (e.g., *"Synthesizing aesthetics & engineering into singular harmony."*) from all sections to focus purely on the authentic core text.
  - 각 섹션에 부가적으로 배치되어 있던 장식용 인용구 및 프레임 박스를 완전히 삭제하여 핵심 텍스트 전달력 극대화.

---

## [1.3.0] - 2026-09-24

### Added & Enhanced / 신규 기능 및 비주얼 강화
- **Multi-Chromatic 3D Lighting & Particle Spectrum (`js/three-scene.js v1.3.0`)**:
  - Injected high-contrast accent colors: Electric Cyan (`#00f2fe`), Luminous Amber/Gold (`#ffd166`), and Cosmic Violet into the 3D particle aurora.
  - Implemented dynamic dual rim lighting (Electric Cyan point light & Luminous Gold point light) illuminating the metallic Torus Knot sculpture for exceptional physical depth.
  - Added an inner multi-chromatic gem core with color shifting along scroll progression.
- **Minimalist Category Tag Styling (`index.html`, `css/style.css`)**:
  - Removed section index prefixes (`01 / 05` through `05 / 05`) to eliminate visual clutter.
  - Styled category tags (`OVERVIEW`, `UI / UX INNOVATION`, `PRINTING & DIGITAL CONTENT`, etc.) with luminous cyan pill borders and emerald beacon dots.

---

## [1.2.1] - 2026-09-24

### Changed / 변경 사항
- **Official Contact Email Updated**:
  - Updated primary inquiry mailbox to `studio.chorok@gmail.com` across all templates, header CTA, footer links, and the direct clipboard copy handler.
  - 대표 문의 메일 주소를 `studio.chorok@gmail.com`으로 일괄 교체 (헤더 CTA, 섹션 5 컨택 박스, 푸터 및 클립보드 복사 엔진).

---

## [1.2.0] - 2026-09-23

### Major Enhancements & Artistic Refinements / 주요 개선 및 아티스틱 리파인먼트
- **Original Content Restored 100%**:
  - Restored the exact, unabridged English text for all 5 sections from the original site (`https://studio-chorok.github.io/`):
    - *Design & Development Experts*
    - *UI/UX Innovation*
    - *Printing & Digital Content*
    - *Mobile Apps & Game Development*
    - *Your Total Design & Development Partner*
- **English-Only Global Interface**:
  - Removed bilingual toggle, localized dictionaries, and language switchers to establish an uninterrupted, authentic high-end aesthetic.
- **Calm & Ethereal 3D Background Engine (`js/three-scene.js v1.2.0`)**:
  - Completely replaced dizzying camera fly-throughs and rapid rotations with a sublime, calm ambient 3D cosmos.
  - Implemented 2,400 gentle emerald aurora particles swirling in a cylindrical field.
  - Added a metallic wireframe Torus Knot geometric sculpture with an orbital halo that responds softly to scroll damping.
- **Artistic Editorial Layout & Typography (`css/style.css v1.2.0`)**:
  - Integrated Google Fonts' *Cormorant Garamond* for grand display headlines paired with *Plus Jakarta Sans*.
  - Fullscreen editorial composition with subtle index numbering (`01 / 05` ~ `05 / 05`) and right-side minimal vertical indicator.
- **Subtle Anime.js Transitions (`js/motion.js v1.2.0`)**:
  - Re-tuned animations to gentle, ink-dissolving fade-ins (`duration: 1400ms`, `cubicBezier(0.16, 1, 0.3, 1)`).

---

## [1.1.0] - 2026-09-23
- Dynamic 3D camera trajectory, direct email copy card, AI badge removal.

---

## [1.0.0] - 2026-09-23
- Initial major 3D interactive web release.

---

## [0.1.0] - Prior Baseline
- Basic static HTML prototype with simple background color transitions.
