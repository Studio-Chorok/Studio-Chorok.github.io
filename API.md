# Studio Chorok - Frontend Module Interface & API Specification / 프론트엔드 모듈 인터페이스 및 API 명세서

> **Language Notice / 언어 안내**: This document is provided in both English and Korean. / 본 문서는 영문과 한글을 동시에 병기하여 제공됩니다.
> **Current Version / 현재 버전**: `1.5.0` (Custom GLSL Shaders & Dynamic Atmospheric Transition Edition)

---

## 1. Module Overview / 모듈 개요

| Module / 모듈 | Class / 클래스 | File / 파일 | Responsibility / 담당 역할 |
| :--- | :--- | :--- | :--- |
| **3D Shader Engine** | `ThreeScene` | `js/three-scene.js` | Custom GLSL Quantum particle shader, Fresnel holographic sculpture & dynamic theme interpolation / 커스텀 GLSL 양자 파티클 쉐이더, 프레넬 홀로그래픽 조각품 및 실시간 테마 보간 |
| **Motion Manager** | `MotionManager` | `js/motion.js` | Restrained Anime.js transitions & section progress synchronization / 절제된 Anime.js 트랜지션 및 진행도 인디케이터 동기화 |
| **App Controller** | `AppController` | `js/main.js` | Scroll event tracking, proximity-based theme dispatch & clipboard copy / 스크롤 이벤트 추적, 근접도 기반 테마 디스패치 및 클립보드 복사 |

---

## 2. ThreeScene API (`js/three-scene.js v1.5.0`)

### Class Definition / 클래스 정의
```typescript
interface IThreeScene {
  init(): void;
  setScrollProgress(progress: number): void;
  setThemeProgress(themeFactor: number): void;
  destroy(): void;
}
```

### Methods / 메서드 상세

#### `init(): void`
- **EN**: Sets up the WebGL renderer, perspective camera (48° FOV), ambient light, and two multi-chromatic point lights (`cyanRimLight`, `goldKeyLight`, `emeraldPulseLight`). Generates 3,200 custom GLSL Quantum Nebula particles, metallic Torus Knot with Fresnel Hologram shader, and inner breathing crystal. Starts the 60fps render loop.
- **KO**: WebGL 렌더러, 원근 카메라(화각 48도), 조명 시스템 및 3,200개의 커스텀 GLSL 양자 성운 파티클과 프레넬 홀로그램 조각품을 초기화하고 60fps 렌더 루프를 가동합니다.

#### `setScrollProgress(progress: number): void`
- **EN**: Smoothly feeds normalized scroll progress (`0.0` to `1.0`), applying kinetic rotation, camera depth damping, and orbital rim light motion.
- **KO**: 정규화된 스크롤 진행도(`0.0` ~ `1.0`)를 전달받아 조각품의 회전, 카메라 뎁스 감쇠, 림라이트 궤도 이동을 적용합니다.

#### `setThemeProgress(themeFactor: number): void`
- **EN**: Linearly interpolates the atmosphere between Bright Ethereal Gallery (`0.0`) and Deep Void Black (`1.0`). Dynamically morphs `renderer.setClearColor()`, `scene.fog`, ambient light intensity, and shader uniforms (`uThemeProgress`).
- **KO**: 밝은 갤러리 분위기(`0.0`)와 깊은 보이드 블랙 밤하늘(`1.0`) 사이를 실시간 선형 보간합니다. 캔버스 배경색, 안개 농도, 조명 밝기 및 쉐이더 유니폼(`uThemeProgress`)을 부드럽게 감쇠 전환합니다.

#### `destroy(): void`
- **EN**: Cancels the animation frame, removes window listeners, and disposes of Three.js buffers and renderer elements.
- **KO**: 렌더 루프를 중지하고 리스너 및 WebGL 버퍼 자원을 해제합니다.

---

## 3. MotionManager API (`js/motion.js v1.2.0`)

### Class Definition / 클래스 정의
```typescript
interface IMotionManager {
  init(): void;
  animateSection(sectionElement: HTMLElement): void;
  updateActiveNavDot(activeIndex: number): void;
}
```

### Methods / 메서드 상세
- `animateSection(sectionElement: HTMLElement)`: Executes a graceful, slow-dissolve Anime.js timeline (`duration: 1400ms`, `cubicBezier(0.16, 1, 0.3, 1)`) on section category tags, titles, and editorial paragraphs.
- `updateActiveNavDot(activeIndex: number)`: Updates right-side floating navigation dots (`Overview`, `UI/UX`, `Branding`, `Mobile`, `Contact`) and header active links.

---

## 4. AppController API (`js/main.js v1.2.1`)

### Class Definition / 클래스 정의
```typescript
interface IAppController {
  init(): void;
}
```

### Methods / 메서드 상세
- `init()`: Bootstraps 3D and motion sub-systems, binds scroll progress, registers section IntersectionObservers, and binds one-click clipboard copying (`studio.chorok@gmail.com`).
- `_setupDirectEmailCopy()`: Copies `studio.chorok@gmail.com` to user clipboard and pops the emerald toast notice for 2.8 seconds.
