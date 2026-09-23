# Studio Chorok - Technical Wiki & Function Reference / 기술 위키 및 함수 상세 레퍼런스

> **Language Notice / 언어 안내**: This document is provided in both English and Korean. / 본 문서는 영문과 한글을 동시에 병기하여 제공됩니다.
> **Current Version / 현재 버전**: `1.4.0` (Pretendard & Pure Minimalist Tag Edition)

---

## 1. Multi-Chromatic 3D Engine Internals (`three-scene.js v1.3.0`)

### 1.1 Multi-Chromatic Aurora Color Distribution
- **Color Bands**:
  - `45%`: Signature Emerald (`#00ff88`) blended with Deep Forest (`#064e3b`).
  - `35%`: Electric Cyan (`#00f2fe`) blended with Azure Emerald.
  - `15%`: Luminous Amber / Gold (`#ffd166`).
  - `5%`: Cosmic Violet / Magenta (`#c084fc`).
- **Effect (EN)**:
  Breaks the monochromatic monotony by injecting striking high-contrast jewel tones into the cosmic aurora, producing an immediate luxury impression.
- **효과 (KO)**:
  단조로운 단색 초록 톤에서 탈피하여 밤하늘의 보석처럼 빛나는 일렉트릭 시안, 럭셔리 골드, 코스믹 바이올렛 입자들을 정밀 배합하여 강렬하고 매혹적인 시각적 대비(Visual Contrast)를 창출합니다.

### 1.2 Dual Rim Lighting Physics
```javascript
// Dynamic Multi-chromatic Rim Lights
this.cyanRimLight = new THREE.PointLight(0x00f2fe, 3.2, 220); // Electric Cyan
this.goldKeyLight = new THREE.PointLight(0xffb703, 3.5, 240); // Luminous Amber/Gold
```
- **Description (EN)**:
  Positions two distinct high-intensity chromatic light sources opposite to each other. As the metallic wireframe Torus Knot rotates, its edges catch both electric cyan and golden specular highlights simultaneously, yielding stunning sculptural depth.
- **설명 (KO)**:
  서로 마주보는 위치에 일렉트릭 시안과 럭셔리 앰버/골드의 상반된 고광도 조명을 배치합니다. 메탈릭 토러스 조각품이 회전함에 따라 모서리에 시안과 골드의 림라이트가 동시에 교차 반사되어 압도적인 입체감을 형성합니다.

---

## 2. Pretendard Typography & Pure Minimalist Tag System (`style.css v1.4.0`)

- **Single Sans-Serif Font System (`Pretendard`)**:
  - Unified all display headlines, section tags, body copy, and UI controls under **Pretendard**.
  - Completely omitted italic styles (`font-style: normal`, no `<em>` elements) for a robust, modern, and uncluttered visual presence.
  - 전 서체를 **Pretendard** 단일 산세리프 체계로 통일하고 이탤릭체를 완전히 배제하여 현대적이고 단단한 가독성 확보.
- **Pure Text Category Tags (No Oval, No Dot)**:
  - Removed decorative green beacons (`::before`) and oval background containers from `.editorial-tag`.
  - Tags render purely as crisp uppercase Cyan typography (`#38bdf8`) with wide letter spacing:
    - `OVERVIEW`
    - `UI / UX INNOVATION`
    - `PRINTING & DIGITAL CONTENT`
    - `MOBILE APPS & GAME DEVELOPMENT`
    - `YOUR TOTAL PARTNER`
  - 초록색 점과 타원형 테두리/배경을 제거하여 순수한 시안 텍스트로만 정갈하게 구성.
- **Elimination of Auxiliary Quote Frames**:
  - Removed all artificial quote frames (*"Synthesizing aesthetics & engineering into singular harmony."*) to direct 100% of reader attention to authentic core messages.
  - 부가적인 인용구 박스를 일체 제거하여 핵심 메시지에 집중.
- **Luminous Shimmer Title Gradient**:
  - `linear-gradient(135deg, #ffffff 10%, #00f2fe 45%, #00ff88 75%, #ffd166 100%)` applied cleanly to `.title-gradient` key terms.

---

## 3. Direct Inquiries Handler (`main.js v1.2.1`)

```javascript
// Asynchronous Clipboard Copy
AppController.prototype._setupDirectEmailCopy()
```
- Coordinates native `navigator.clipboard.writeText('studio.chorok@gmail.com')`.
- Displays the floating `#toast-notice` for 2.8 seconds, then slides out smoothly via CSS transforms.
