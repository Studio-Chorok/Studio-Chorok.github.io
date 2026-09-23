/**
 * ==========================================================================
 * Studio Chorok - Multi-Chromatic Custom GLSL Shader & Atmospheric Engine
 * File: js/three-scene.js
 * Version: 1.5.0
 * Features:
 *   1. Custom GLSL Quantum Particle Shader (organic wave & soft falloff)
 *   2. Custom GLSL Fresnel Hologram Art Sculpture (iridescent prism refraction)
 *   3. Dynamic Scroll-Driven Atmospheric Transition (Bright Gallery -> Deep Void)
 * ==========================================================================
 */

class ThreeScene {
  constructor() {
    this.container = document.getElementById('webgl-canvas-container');
    this.scene = null;
    this.camera = null;
    this.renderer = null;

    // Atmospheric 3D Entities
    this.auroraParticles = null;
    this.particleUniforms = null;

    this.sculptureGroup = null;
    this.artSculpture = null;
    this.sculptureUniforms = null;
    this.innerGem = null;
    this.gemUniforms = null;
    this.outerHalo = null;

    // Dynamic Multi-chromatic Lights
    this.ambientLight = null;
    this.cyanRimLight = null;
    this.goldKeyLight = null;
    this.emeraldPulseLight = null;

    // Clocks and Loop States
    this.clock = null;
    this.animationFrameId = null;
    this.isVisible = true;

    // Cursor tracking
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;

    // Scroll state with gentle damping
    this.scrollProgress = 0;
    this.targetScrollProgress = 0;

    // Atmosphere Theme Progress: 0.0 (Bright Ethereal Gallery) -> 1.0 (Deep Void Black)
    this.themeProgress = 0.0;
    this.targetThemeProgress = 0.0;

    // Colors for Dynamic Atmospheric Blending
    this.colorBrightBg = new THREE.Color(0xf2f8f5); // Pale ethereal mint/frost
    this.colorDarkBg = new THREE.Color(0x030705);   // Deep obsidian void
    this.currentColorBg = this.colorBrightBg.clone();

    this.PARTICLE_COUNT = 3200;
  }

  /**
   * Initializes the GLSL shader 3D canvas and atmospheric render pipeline.
   */
  init() {
    if (!this.container || typeof THREE === 'undefined') {
      console.warn('[ThreeScene] Container or THREE missing.');
      return;
    }

    // 1. Scene & Dynamic Fog
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
    this.scene.fog = new THREE.FogExp2(0xf2f8f5, 0.007);

    // 2. Camera Setup (Soft portrait perspective with cinematic focal length)
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(48, aspect, 0.1, 1000);
    this.camera.position.set(0, 4, 82);
    this.camera.lookAt(0, 0, 0);

    // 3. High Performance Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(this.colorBrightBg, 1);
    this.container.appendChild(this.renderer.domElement);

    // 4. Dynamic Multi-Chromatic Lighting
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    this.scene.add(this.ambientLight);

    // Cyan Rim Light (High-tech accent)
    this.cyanRimLight = new THREE.PointLight(0x00f2fe, 2.8, 240);
    this.cyanRimLight.position.set(-45, 30, 35);
    this.scene.add(this.cyanRimLight);

    // Gold Key Light (Warm luxury contrast)
    this.goldKeyLight = new THREE.PointLight(0xffb703, 3.0, 240);
    this.goldKeyLight.position.set(45, -20, 45);
    this.scene.add(this.goldKeyLight);

    // Emerald Pulse Light
    this.emeraldPulseLight = new THREE.PointLight(0x00ff88, 2.4, 180);
    this.emeraldPulseLight.position.set(0, 5, 15);
    this.scene.add(this.emeraldPulseLight);

    // 5. Create Custom Shader Art Entities
    this._createShaderParticles();
    this._createShaderSculpture();

    // 6. Bind Events
    this._bindEvents();

    // 7. Start Render Loop
    this._animate();
    console.info('[ThreeScene] Custom GLSL Shader & Atmospheric Transition Initialized (v1.5.0).');
  }

  /**
   * Generates Quantum Nebula Particles powered by a custom GLSL ShaderMaterial.
   * Vertex shader handles harmonic undulating waves and breathing.
   * Fragment shader renders smooth Gaussian falloff with twinkle and multi-chromatic palette.
   * @private
   */
  _createShaderParticles() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.PARTICLE_COUNT * 3);
    const colors = new Float32Array(this.PARTICLE_COUNT * 3);
    const randoms = new Float32Array(this.PARTICLE_COUNT * 3); // phase, speed, sizeMultiplier

    // Color swatches: Emerald, Cyan, Gold, Violet
    const cEmerald = new THREE.Color(0x00d672);
    const cCyan = new THREE.Color(0x00c4fe);
    const cGold = new THREE.Color(0xedb43b);
    const cDeepMint = new THREE.Color(0x10845a);

    for (let i = 0; i < this.PARTICLE_COUNT; i++) {
      const idx = i * 3;
      // Cylindrical spatial distribution for natural framing
      const radius = 18 + Math.random() * 85;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 105;

      positions[idx] = Math.cos(theta) * radius;
      positions[idx + 1] = y;
      positions[idx + 2] = Math.sin(theta) * radius - 10;

      // Color distribution
      const dice = Math.random();
      let chosenColor;
      if (dice < 0.45) {
        chosenColor = cEmerald.clone().lerp(cDeepMint, Math.random() * 0.5);
      } else if (dice < 0.80) {
        chosenColor = cCyan.clone().lerp(cEmerald, Math.random() * 0.3);
      } else if (dice < 0.95) {
        chosenColor = cGold.clone();
      } else {
        chosenColor = new THREE.Color(0xa78bfa); // Cosmic Violet
      }

      colors[idx] = chosenColor.r;
      colors[idx + 1] = chosenColor.g;
      colors[idx + 2] = chosenColor.b;

      // Per-particle procedural variation
      randoms[idx] = Math.random() * Math.PI * 2; // initial phase
      randoms[idx + 1] = 0.4 + Math.random() * 0.8; // velocity multiplier
      randoms[idx + 2] = 1.0 + Math.random() * 2.2; // scale factor
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 3));

    // Custom GLSL Shader Uniforms
    this.particleUniforms = {
      uTime: { value: 0 },
      uScrollProgress: { value: 0 },
      uThemeProgress: { value: 0 }, // 0: Bright, 1: Dark
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
    };

    const vertexShader = `
      uniform float uTime;
      uniform float uScrollProgress;
      uniform float uThemeProgress;
      uniform float uPixelRatio;

      attribute vec3 aColor;
      attribute vec3 aRandom;

      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = aColor;

        // Harmonic organic wave displacement
        vec3 pos = position;
        float phase = aRandom.x;
        float speed = aRandom.y;
        float sizeMult = aRandom.z;

        // Wave oscillations in 3D
        float wave = sin(uTime * 0.8 * speed + pos.y * 0.05 + phase) * 2.5;
        float waveZ = cos(uTime * 0.6 * speed + pos.x * 0.04) * 2.2;
        pos.x += wave;
        pos.z += waveZ;

        // Subtle upward cosmic drift
        pos.y += sin(uTime * 0.3 + phase) * 1.5;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;

        // Particle size calculation with perspective attenuation
        float baseSize = mix(55.0, 75.0, uThemeProgress);
        gl_PointSize = (baseSize * sizeMult * uPixelRatio) / -mvPosition.z;

        // Twinkle shimmer factor
        float twinkle = 0.7 + 0.3 * sin(uTime * 2.5 * speed + phase * 3.0);
        // Alpha modulation based on theme progress (more opaque in dark void, soft in bright)
        float themeAlpha = mix(0.70, 0.95, uThemeProgress);
        vAlpha = twinkle * themeAlpha;
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying vec3 vColor;
      varying float vAlpha;
      uniform float uThemeProgress;

      void main() {
        // Compute circular Gaussian soft falloff from center of point
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;

        // Gaussian glow formula
        float strength = exp(-dist * dist * 9.0);

        // In bright mode, blend with subtle dark tint for high contrast, in dark mode keep pure glow
        vec3 finalColor = vColor;
        if (uThemeProgress < 0.5) {
          // Slight contrast enhancement in bright gallery mode
          finalColor = mix(finalColor * 0.85, finalColor, uThemeProgress * 2.0);
        }

        gl_FragColor = vec4(finalColor, strength * vAlpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: this.particleUniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      blending: THREE.NormalBlending, // NormalBlending allows visibility in both bright and dark modes
      depthWrite: false
    });

    this.auroraParticles = new THREE.Points(geometry, material);
    this.scene.add(this.auroraParticles);
  }

  /**
   * Creates an artistic centerpiece sculpture utilizing custom Fresnel & Iridescent GLSL shaders.
   * @private
   */
  _createShaderSculpture() {
    this.sculptureGroup = new THREE.Group();

    // 1. Organic Flowing Torus Knot Art Sculpture with Custom Fresnel Hologram Shader
    const knotGeom = new THREE.TorusKnotGeometry(12.5, 1.6, 160, 36, 2, 3);

    this.sculptureUniforms = {
      uTime: { value: 0 },
      uScrollProgress: { value: 0 },
      uThemeProgress: { value: 0 }, // 0: Bright, 1: Dark
      uRimColorCyan: { value: new THREE.Color(0x00f2fe) },
      uRimColorGold: { value: new THREE.Color(0xffd166) },
      uBaseColorEmerald: { value: new THREE.Color(0x059669) }
    };

    const knotVertexShader = `
      uniform float uTime;
      uniform float uScrollProgress;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vec4 mvPosition = viewMatrix * worldPos;
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const knotFragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform float uScrollProgress;
      uniform float uThemeProgress;
      uniform vec3 uRimColorCyan;
      uniform vec3 uRimColorGold;
      uniform vec3 uBaseColorEmerald;

      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Fresnel calculation: intensity increases at grazing angles
        float fresnel = 1.0 - max(dot(normal, viewDir), 0.0);
        float fresnelPow = pow(fresnel, 2.5);

        // Color shifting along height and normal
        float colorInterp = sin(vWorldPosition.y * 0.12 + uTime * 0.5) * 0.5 + 0.5;
        vec3 rimColor = mix(uRimColorCyan, uRimColorGold, colorInterp);

        // Adaptive base tone depending on Bright vs Dark atmosphere
        // In bright mode: elegant translucent glass prism; in dark mode: deep cosmic metallic wireframe
        vec3 baseToneBright = vec3(0.12, 0.35, 0.28);
        vec3 baseToneDark = vec3(0.02, 0.08, 0.05);
        vec3 baseTone = mix(baseToneBright, baseToneDark, uThemeProgress);

        // Combine base body with chromatic Fresnel glow
        vec3 finalColor = baseTone + rimColor * (fresnelPow * 1.6);

        // Wireframe-like atmospheric lattice pattern
        float pattern = sin(vWorldPosition.x * 2.0) * sin(vWorldPosition.y * 2.0) * sin(vWorldPosition.z * 2.0);
        if (pattern > 0.6) {
          finalColor += uRimColorCyan * 0.4;
        }

        float alpha = mix(0.75, 0.90, uThemeProgress);
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const knotMat = new THREE.ShaderMaterial({
      uniforms: this.sculptureUniforms,
      vertexShader: knotVertexShader,
      fragmentShader: knotFragmentShader,
      wireframe: true,
      transparent: true,
      depthWrite: false
    });

    this.artSculpture = new THREE.Mesh(knotGeom, knotMat);
    this.sculptureGroup.add(this.artSculpture);

    // 2. Inner Pulsating Crystal Core (Octahedron / Icosahedron)
    const gemGeom = new THREE.OctahedronGeometry(5.5, 0);
    this.gemUniforms = {
      uTime: { value: 0 },
      uThemeProgress: { value: 0 },
      uColor1: { value: new THREE.Color(0x00f2fe) },
      uColor2: { value: new THREE.Color(0x00ff88) }
    };

    const gemVertexShader = `
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec3 pos = position;
        // Breathing pulse
        float pulse = 1.0 + sin(uTime * 2.0) * 0.08;
        pos *= pulse;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const gemFragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform float uThemeProgress;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      varying vec3 vNormal;
      varying vec3 vViewPosition;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);

        float cycle = sin(uTime * 1.2) * 0.5 + 0.5;
        vec3 coreColor = mix(uColor1, uColor2, cycle);

        // Bright gallery: deep teal-cyan crystal; Dark void: glowing neon core
        vec3 finalColor = coreColor * (0.8 + fresnel * 1.5);
        gl_FragColor = vec4(finalColor, 0.85);
      }
    `;

    const gemMat = new THREE.ShaderMaterial({
      uniforms: this.gemUniforms,
      vertexShader: gemVertexShader,
      fragmentShader: gemFragmentShader,
      wireframe: true,
      transparent: true
    });

    this.innerGem = new THREE.Mesh(gemGeom, gemMat);
    this.sculptureGroup.add(this.innerGem);

    // 3. Delicate Outer Orbital Halo
    const haloGeom = new THREE.RingGeometry(22, 22.3, 120);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    this.outerHalo = new THREE.Mesh(haloGeom, haloMat);
    this.outerHalo.rotation.x = Math.PI * 0.45;
    this.sculptureGroup.add(this.outerHalo);

    this.scene.add(this.sculptureGroup);
  }

  /**
   * Sets the normalized scroll progress (0.0 to 1.0).
   * @param {number} progress
   */
  setScrollProgress(progress) {
    this.targetScrollProgress = Math.max(0, Math.min(1, progress));
  }

  /**
   * Sets the dynamic atmospheric theme progress:
   * 0.0 = Bright Luminous Gallery (Sections 1-4)
   * 1.0 = Deep Void Black (Section 5 Contact)
   * @param {number} themeFactor
   */
  setThemeProgress(themeFactor) {
    this.targetThemeProgress = Math.max(0, Math.min(1, themeFactor));
  }

  /**
   * Event listeners for cursor parallax and responsive viewport resize.
   * @private
   */
  _bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    window.addEventListener('resize', () => {
      if (!this.camera || !this.renderer) return;
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      if (this.particleUniforms) {
        this.particleUniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
      }
    });

    document.addEventListener('visibilitychange', () => {
      this.isVisible = !document.hidden;
      if (this.isVisible && !this.animationFrameId) {
        this.clock.start();
        this._animate();
      }
    });
  }

  /**
   * Main 60fps render loop with continuous shader uniforms update and theme interpolation.
   * @private
   */
  _animate() {
    if (!this.isVisible) {
      this.animationFrameId = null;
      return;
    }

    this.animationFrameId = requestAnimationFrame(() => this._animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Smooth Damping Interpolation (Scroll & Mouse)
    this.scrollProgress += (this.targetScrollProgress - this.scrollProgress) * 0.05;
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.04;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.04;

    // 2. Smooth Atmosphere Theme Interpolation (Bright -> Dark Void)
    this.themeProgress += (this.targetThemeProgress - this.themeProgress) * 0.06;

    // Dynamically update ClearColor and Fog
    this.currentColorBg.copy(this.colorBrightBg).lerp(this.colorDarkBg, this.themeProgress);
    this.renderer.setClearColor(this.currentColorBg, 1);
    this.scene.fog.color.copy(this.currentColorBg);

    // Light adjustments based on theme
    // In bright mode, ambient light is bright; in dark mode, ambient is subdued and rim lights pop
    this.ambientLight.intensity = THREE.MathUtils.lerp(1.4, 0.4, this.themeProgress);
    this.ambientLight.color.setRGB(
      THREE.MathUtils.lerp(1.0, 0.05, this.themeProgress),
      THREE.MathUtils.lerp(1.0, 0.15, this.themeProgress),
      THREE.MathUtils.lerp(1.0, 0.10, this.themeProgress)
    );

    // 3. Update Custom GLSL Shader Uniforms
    if (this.particleUniforms) {
      this.particleUniforms.uTime.value = elapsedTime;
      this.particleUniforms.uScrollProgress.value = this.scrollProgress;
      this.particleUniforms.uThemeProgress.value = this.themeProgress;
    }

    if (this.sculptureUniforms) {
      this.sculptureUniforms.uTime.value = elapsedTime;
      this.sculptureUniforms.uScrollProgress.value = this.scrollProgress;
      this.sculptureUniforms.uThemeProgress.value = this.themeProgress;
    }

    if (this.gemUniforms) {
      this.gemUniforms.uTime.value = elapsedTime;
      this.gemUniforms.uThemeProgress.value = this.themeProgress;
    }

    // 4. Subtle Ambient Kinetic Drift of 3D Sculpture
    if (this.sculptureGroup) {
      // Rotation reacting softly to time and scroll
      this.artSculpture.rotation.x = elapsedTime * 0.12 + this.scrollProgress * Math.PI * 0.8;
      this.artSculpture.rotation.y = elapsedTime * 0.16 + this.scrollProgress * Math.PI * 1.2;

      this.innerGem.rotation.x = -elapsedTime * 0.25;
      this.innerGem.rotation.y = elapsedTime * 0.35;

      this.outerHalo.rotation.z = elapsedTime * 0.08 + this.scrollProgress * Math.PI * 0.5;

      // Group position drift: subtle lateral float
      this.sculptureGroup.position.x = 8 + this.mouseX * 6;
      this.sculptureGroup.position.y = Math.sin(elapsedTime * 0.4) * 2.5 - this.mouseY * 4;
      this.sculptureGroup.position.z = -10 + this.scrollProgress * 15;
    }

    // 5. Dynamic Rim Lighting Orbit
    if (this.cyanRimLight && this.goldKeyLight) {
      const lightOrbitAngle = elapsedTime * 0.35 + this.scrollProgress * Math.PI;
      this.cyanRimLight.position.x = Math.cos(lightOrbitAngle) * 55;
      this.cyanRimLight.position.z = Math.sin(lightOrbitAngle) * 45 + 10;

      this.goldKeyLight.position.x = -Math.cos(lightOrbitAngle * 0.8) * 50;
      this.goldKeyLight.position.y = Math.sin(lightOrbitAngle * 0.6) * 35;
    }

    // 6. Camera Damping
    const targetCamZ = 82 - this.scrollProgress * 18;
    this.camera.position.z += (targetCamZ - this.camera.position.z) * 0.05;
    this.camera.position.x += (this.mouseX * 4 - this.camera.position.x) * 0.03;
    this.camera.position.y += (4 - this.mouseY * 3 - this.camera.position.y) * 0.03;
    this.camera.lookAt(0, 0, 0);

    // 7. Render
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Cleans up WebGL resources and event listeners.
   */
  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
  }
}

// Global Export
window.ThreeScene = ThreeScene;
