# Studio Chorok - Frontend Module Interface & API Specification / 프론트엔드 모듈 인터페이스 및 API 명세서

> **Language Notice / 언어 안내**: This document is provided in both English and Korean. / 본 문서는 영문과 한글을 동시에 병기하여 제공됩니다.
> **Current Version / 현재 버전**: `1.4.0` (Pretendard & Pure Typography Edition)

---

## 1. Module Overview / 모듈 개요

| Module / 모듈 | Class / 클래스 | File / 파일 | Responsibility / 담당 역할 |
| :--- | :--- | :--- | :--- |
| **3D Engine** | `ThreeScene` | `js/three-scene.js` | Multi-chromatic cosmic aurora, dual rim lighting, Torus Knot sculpture & inner gem / 멀티 크로매틱 코스믹 오로라, 듀얼 림라이트, 토러스 조각품 및 내부 보석 코어 |
| **Motion Manager** | `MotionManager` | `js/motion.js` | Restrained Anime.js transitions & section progress synchronization / 절제된 Anime.js 트랜지션 및 진행도 인디케이터 동기화 |
| **App Controller** | `AppController` | `js/main.js` | Scroll event tracking, intersection observers & clipboard copy dispatch / 스크롤 이벤트 추적, 인터섹션 옵저버 및 클립보드 복사 디스패치 |

---

## 2. ThreeScene API (`js/three-scene.js v1.3.0`)

### Class Definition / 클래스 정의
```typescript
interface IThreeScene {
  init(): void;
  setScrollProgress(progress: number): void;
  destroy(): void;
}
```

### Methods / 메서드 상세

#### `init(): void`
- **EN**: Builds the WebGL renderer, perspective camera (50° FOV for portrait focus), ambient light, and two multi-chromatic point lights (`cyanRimLight`, `goldKeyLight`, `emeraldPulseLight`). Generates 2,800 multi-colored aurora particles, metallic wireframe Torus Knot, and an inner pulsating gem. Begins the 60fps ambient render loop.
- **KO**: WebGL 렌더러, 원근 카메라(화각 50도), 앰비언트 라이트 및 3개의 멀티 크로매틱 조명(`cyanRimLight`, `goldKeyLight`, `emeraldPulseLight`)을 설정합니다. 2,800개의 멀티 컬러 오로라 파티클, 메탈릭 토러스 조각품 및 내부 보석 코어를 생성하고 60fps 렌더 루프를 가동합니다.

#### `setScrollProgress(progress: number): void`
- **EN**: Smoothly feeds normalized scroll progress (`0.0` to `1.0`). Applies dynamic color shifting on the inner gem, multi-chromatic rim light motion, and gentle camera depth damping without dizzying rotational leaps.
- **KO**: 정규화된 스크롤 진행도(`0.0` ~ `1.0`)를 전달받아 내부 보석 코어의 색상 변이, 듀얼 림라이트 위치 이동, 실크 같은 카메라 뎁스 감쇠를 적용합니다.

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
