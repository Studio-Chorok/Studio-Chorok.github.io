# Studio Chorok - Technical Wiki & Function Reference / 기술 위키 및 함수 상세 레퍼런스

> **Language Notice / 언어 안내**: This document is provided in both English and Korean. / 본 문서는 영문과 한글을 동시에 병기하여 제공됩니다.
> **Current Version / 현재 버전**: `1.5.0` (Custom GLSL Shaders & Dynamic Atmospheric Transition Edition)

---

## 1. Custom GLSL Shader Pipeline Internals (`three-scene.js v1.5.0`)

### 1.1 Quantum Nebula Particle Shader
- **Vertex Wave Displacement (`GLSL`)**:
  ```glsl
  float wave = sin(uTime * 0.8 * speed + pos.y * 0.05 + phase) * 2.5;
  float waveZ = cos(uTime * 0.6 * speed + pos.x * 0.04) * 2.2;
  pos.x += wave;
  pos.z += waveZ;
  pos.y += sin(uTime * 0.3 + phase) * 1.5;
  ```
- **Fragment Soft Gaussian Falloff (`GLSL`)**:
  ```glsl
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);
  if (dist > 0.5) discard;
  float strength = exp(-dist * dist * 9.0);
  gl_FragColor = vec4(finalColor, strength * vAlpha);
  ```
- **Effect (EN)**:
  Eliminates square or harsh sprite borders. Each particle breathes, glides organically along a 3D harmonic field, and twinkles with soft-edged Gaussian luminance.
- **효과 (KO)**:
  거친 사각 스프라이트 경계를 완벽히 제거하고, 가우시안 곡선 감쇠를 통해 부드럽게 빛나는 소프트 파티클을 형성합니다. 입자들이 3D 조화 파동을 따라 유기적으로 유영하며 우아한 공간감을 창출합니다.

### 1.2 Holographic Fresnel Art Sculpture Shader
```glsl
// Fresnel Calculation at Grazing Angles
float fresnel = 1.0 - max(dot(normal, viewDir), 0.0);
float fresnelPow = pow(fresnel, 2.5);
vec3 rimColor = mix(uRimColorCyan, uRimColorGold, colorInterp);
vec3 finalColor = baseTone + rimColor * (fresnelPow * 1.6);
```
- **Description (EN)**:
  Calculates angle-dependent refraction where the edges of the metallic Torus Knot gleam with electric cyan and champagne gold highlights, resembling a contemporary light-art installation.
- **설명 (KO)**:
  시선 벡터와 표면 노멀의 내적을 기반으로 모서리 각도에 따라 일렉트릭 시안과 샴페인 골드의 림라이트가 영롱하게 굴절·산란되는 현대 미술관 조각품 느낌을 구현합니다.

---

## 2. Dynamic Atmospheric Transition Mechanics (`main.js` & `style.css`)

### 2.1 Scroll-Driven Proximity Interpolation
```javascript
// main.js: Dynamic Section 5 Proximity Factor
const startThreshold = windowHeight * 0.95;
const endThreshold = windowHeight * 0.25;
themeFactor = (startThreshold - currentPos) / (startThreshold - endThreshold);
```
- **EN**:
  When approaching Section 5, `themeFactor` smoothly interpolates from `0.0` (Bright Luminous Gallery `#f2f8f5`) to `1.0` (Deep Void Black `#030705`). The 3D background clear color, fog, ambient lighting, and CSS variables transition in tandem with zero jarring jumps.
- **KO**:
  섹션 5(Contact)에 접근함에 따라 `themeFactor`가 `0.0`(맑은 갤러리 분위기)에서 `1.0`(깊은 보이드 블랙)으로 부드럽게 보간됩니다. 3D 캔버스 배경색, 안개 농도, 조명 및 CSS 컬러 토큰이 완벽한 조화를 이루며 매끄럽게 페이드 전환됩니다.

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
