# Studio Chorok - Customization & Deployment Guide / 사용자 설정 및 배포 가이드

> **Language Notice / 언어 안내**: This document is provided in both English and Korean. / 본 문서는 영문과 한글을 동시에 병기하여 제공됩니다.
> **Current Version / 현재 버전**: `1.4.0` (Pretendard & Pure Typography Edition)

---

## 1. Modifying Editorial Text Content / 텍스트 내용 수정 방법

### English
In version `1.4.0`, the HTML markup in [index.html](file:///d:/Git/Project/Studio-Chorok.github.io/index.html) holds the authentic, unabridged editorial text directly within each `.art-section` container.

To adjust any title or paragraph:
1. Open `index.html`.
2. Locate the target section (`#section-1` through `#section-5`).
3. Modify the `.editorial-title` (using `<span class="title-gradient">` for color accents, without italics) or `.editorial-text` elements directly:
   ```html
   <!-- Example: In index.html under #section-1 -->
   <div class="editorial-meta">
     <span class="editorial-tag">Overview</span>
   </div>
   <h1 class="editorial-title" id="title-1">
     <span class="title-gradient">Design & Development</span> Experts
   </h1>
   <p class="editorial-text">
     From UI/UX, printing, digital media, mobile apps, to mobile games, we provide innovative solutions across all areas.
   </p>
   ```
4. Save the file. Changes reflect immediately on browser reload.

### 한국어
`v1.4.0` 버전에서는 [index.html](file:///d:/Git/Project/Studio-Chorok.github.io/index.html) 파일의 각 `.art-section` 내부에 원본 텍스트가 직접 시맨틱 마크업으로 작성되어 있습니다.

텍스트를 수정하려면:
1. `index.html` 파일을 엽니다.
2. 수정할 섹션(`#section-1` ~ `#section-5`)을 찾습니다.
3. `.editorial-title` (이탤릭 대신 `<span class="title-gradient">` 태그 활용) 또는 `.editorial-text` 내부의 텍스트를 직접 편집합니다:
   ```html
   <!-- index.html 내 #section-1 예시 -->
   <div class="editorial-meta">
     <span class="editorial-tag">Overview</span>
   </div>
   <h1 class="editorial-title" id="title-1">
     <span class="title-gradient">Design & Development</span> Experts
   </h1>
   <p class="editorial-text">
     From UI/UX, printing, digital media, mobile apps, to mobile games, we provide innovative solutions across all areas.
   </p>
   ```
4. 저장 후 새로고침하면 브라우저에 즉시 반영됩니다.

---

## 2. Modifying Contact Email / 대표 이메일 주소 변경

1. In `index.html`: Update `studio.chorok@gmail.com` in the `mailto:` links, `#contact-email-link`, and header CTA.
2. In `js/main.js`: Update `const emailTarget = 'studio.chorok@gmail.com';` inside `_setupDirectEmailCopy()`.

---

## 3. Tuning Multi-Chromatic 3D Lighting & Sculpture / 3D 멀티 크로매틱 조명 및 조각품 튜닝

In [js/three-scene.js](file:///d:/Git/Project/Studio-Chorok.github.io/js/three-scene.js):
- **Accent Lighting (임팩트 조명 색상)**:
  - `this.cyanRimLight = new THREE.PointLight(0x00f2fe, ...)` (Electric Cyan)
  - `this.goldKeyLight = new THREE.PointLight(0xffb703, ...)` (Luminous Amber/Gold)
- **Particle Count (파티클 수량)**:
  `this.PARTICLE_COUNT = 2800;` in constructor.
- **Sculpture Geometry (중앙 3D 조각품 형태)**:
  Modify `THREE.TorusKnotGeometry(12, 1.8, 128, 32, 2, 3)` inside `_createSculpture()`.

---

## 4. GitHub Pages Deployment / GitHub Pages 배포

```bash
git add .
git commit -m "feat: upgrade to v1.3.0 (multi-chromatic 3D impact & clean category tags)"
git push origin main
```
Deploys automatically to `https://Studio-Chorok.github.io/` via GitHub Pages.
