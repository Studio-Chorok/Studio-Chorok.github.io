# Studio Chorok - Customization & Deployment Guide / 사용자 설정 및 배포 가이드

> **Language Notice / 언어 안내**: This document is provided in both English and Korean. / 본 문서는 영문과 한글을 동시에 병기하여 제공됩니다.
> **Current Version / 현재 버전**: `1.6.0` (CUBEOUT Privacy Policy Subpage Edition)

---

## 1. Modifying Editorial Text Content / 텍스트 내용 수정 방법

### English
In version `1.6.0`, the HTML markup in [index.html](file:///d:/Git/Project/Studio-Chorok.github.io/index.html) holds the authentic editorial text directly within each `.art-section` container.

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
`v1.6.0` 버전에서는 [index.html](file:///d:/Git/Project/Studio-Chorok.github.io/index.html) 파일의 각 `.art-section` 내부에 원본 텍스트가 직접 시맨틱 마크업으로 작성되어 있습니다.

텍스트를 수정하려면:
1. `index.html` 파일을 엽니다.
2. 수정할 섹션(`#section-1` ~ `#section-5`)을 찾습니다.
3. `.editorial-title` (이탤릭 대신 `<span class="title-gradient">` 태그 활용) 또는 `.editorial-text` 내부의 텍스트를 직접 편집합니다.
4. 저장 후 새로고침하면 브라우저에 즉시 반영됩니다.

---

## 2. Modifying Contact Email / 대표 이메일 주소 변경

1. In `index.html`: Update `studio.chorok@gmail.com` in the `mailto:` links, `#contact-email-link`, and header CTA.
2. In `js/main.js`: Update `const emailTarget = 'studio.chorok@gmail.com';` inside `_setupDirectEmailCopy()`.
3. In `Game/CubeOut/Privacy/index.html`: Update the contact email in Section 10 and footer.

---

## 3. Tuning Custom GLSL Shaders & Atmospheric Transition / 쉐이더 및 분위기 전환 튜닝

In [js/three-scene.js](file:///d:/Git/Project/Studio-Chorok.github.io/js/three-scene.js):
- **Atmospheric Palette (분위기 색상 설정)**:
  - `this.colorBrightBg = new THREE.Color(0xf2f8f5)` : Bright gallery base color.
  - `this.colorDarkBg = new THREE.Color(0x030705)` : Deep void black base color.
- **Particle Gaussian Falloff (파티클 감쇠율)**:
  - Adjust `float strength = exp(-dist * dist * 9.0);` in `_createShaderParticles()`.
- **Sculpture Fresnel Power (조각품 프레넬 광택 강도)**:
  - Adjust `float fresnelPow = pow(fresnel, 2.5);` in `_createShaderSculpture()`.

---

## 4. Managing CUBEOUT Privacy Policy / CUBEOUT 개인정보처리방침 관리

### English
1. **File Location**: [Game/CubeOut/Privacy/index.html](file:///d:/Git/Project/Studio-Chorok.github.io/Game/CubeOut/Privacy/index.html)
2. **Editing Content**:
   - English source text is located under `<div id="content-en">`.
   - Korean translation text is located under `<div id="content-ko">`.
   - Update metadata (Effective Date, Document Version) in `.meta-grid` when amending terms for store compliance.
3. **App Store Submission URL**:
   - Provide `https://Studio-Chorok.github.io/Game/CubeOut/Privacy/` in App Store Connect and Google Play Console.

### 한국어
1. **파일 위치**: [Game/CubeOut/Privacy/index.html](file:///d:/Git/Project/Studio-Chorok.github.io/Game/CubeOut/Privacy/index.html)
2. **내용 수정 방법**:
   - 영문 원문은 `<div id="content-en">` 내부 조항을 편집합니다.
   - 한국어 번역문은 `<div id="content-ko">` 내부 조항을 편집합니다.
   - 개정 시 `.meta-grid`의 시행일자(Effective Date) 및 문서 버전(Document Version)을 업데이트합니다.
3. **스토어 심사 등록 URL**:
   - App Store Connect 및 Google Play Console의 개인정보처리방침 URL란에 `https://Studio-Chorok.github.io/Game/CubeOut/Privacy/`를 등록합니다.

---

## 5. GitHub Pages Deployment / GitHub Pages 배포

```bash
git add .
git commit -m "feat: add CUBEOUT privacy policy subpage (v1.6.0)"
git push origin main
```
Deploys automatically to `https://Studio-Chorok.github.io/` via GitHub Pages.
