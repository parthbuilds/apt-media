'use client';

import { useEffect, useRef } from 'react';
import { NeatGradient } from '@firecms/neat';
import type { NeatConfig } from '@firecms/neat';

export default function HeroGradient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    try {
      const config: NeatConfig = {
        colors: [
          {
            color: '#FF5373',
            enabled: true,
          },
          {
            color: '#FFC858',
            enabled: true,
          },
          {
            color: '#17E7FF',
            enabled: true,
          },
          {
            color: '#6D3BFF',
            enabled: true,
          },
          {
            color: '#f5e1e5',
            enabled: false,
          },
          {
            color: '#A8E6CF',
            enabled: false,
          },
        ],
        speed: 2,
        horizontalPressure: 2,
        verticalPressure: 5,
        waveFrequencyX: 2,
        waveFrequencyY: 2,
        waveAmplitude: 5,
        secondaryWaveEnabled: false,
        secondaryWaveFrequencyX: 3,
        secondaryWaveFrequencyY: 3,
        secondaryWaveAmplitude: 5,
        secondaryWaveSpeed: 0.6,
        secondaryWaveAngle: 1,
        shadows: 10,
        highlights: 8,
        colorBrightness: 1,
        colorSaturation: 10,
        wireframe: true,
        antialias: false,
        colorBlending: 6,
        backgroundColor: '#003FFF',
        backgroundAlpha: 1,
        grainScale: 0,
        grainSparsity: 0,
        grainIntensity: 0,
        grainSpeed: 0,
        resolution: 0.95,
        yOffset: 639,
        yOffsetWaveMultiplier: 3.5,
        yOffsetColorMultiplier: 3.5,
        yOffsetFlowMultiplier: 3.5,
        flowDistortionA: 0.4,
        flowDistortionB: 3,
        flowScale: 3.3,
        flowEase: 0.53,
        flowEnabled: false,
        enableProceduralTexture: false,
        transparentTextureVoid: false,
        textureMode: 'bitmap',
        bakeEdgeSoftness: 1,
        textureVoidLikelihood: 0.06,
        textureVoidWidthMin: 10,
        textureVoidWidthMax: 500,
        textureBandDensity: 0.8,
        textureColorBlending: 0.06,
        textureSeed: 333,
        textureEase: 0.6,
        proceduralBackgroundColor: '#003FFF',
        textureShapeTriangles: 20,
        textureShapeCircles: 15,
        textureShapeBars: 15,
        textureShapeSquiggles: 10,
        domainWarpEnabled: false,
        domainWarpIntensity: 0,
        domainWarpScale: 3,
        vignetteIntensity: 0,
        vignetteRadius: 0.8,
        fresnelEnabled: false,
        fresnelPower: 2,
        fresnelIntensity: 0.5,
        fresnelColor: '#FFFFFF',
        iridescenceEnabled: false,
        iridescenceIntensity: 0.5,
        iridescenceSpeed: 1,
        prismEdgeEnabled: false,
        prismEdgeIntensity: 0.5,
        prismEdgeThinness: 3,
        prismEdgeSpread: 1,
        prismEdgeSpeed: 0.5,
        prismEdgeRipple: 1,
        bloomIntensity: 0,
        bloomThreshold: 0.7,
        chromaticAberration: 0,
        shapeType: 'plane',
        shapeRotationX: 0,
        shapeRotationY: 0,
        shapeRotationZ: 0,
        shapeAutoRotateSpeedX: 0,
        shapeAutoRotateSpeedY: 0,
        sphereRadius: 15,
        torusRadius: 15,
        torusTube: 5,
        cylinderRadius: 10,
        cylinderHeight: 40,
        planeBend: 0,
        planeTwist: 0,
        silhouetteFade: 0.25,
        cylinderFade: 0.08,
        ribbonFade: 0.05,
        flatShading: true,
        cameraLock: true,
        cameraX: 0,
        cameraY: 0,
        cameraZ: 0,
        cameraRotationX: 0,
        cameraRotationY: 0,
        cameraRotationZ: 0,
        cameraZoom: 1,
      };

      gradientRef.current = new NeatGradient({
        ref: canvasRef.current,
        ...config,
      });

      const handleScroll = () => {
        if (gradientRef.current) {
          gradientRef.current.yOffset = 639 + window.scrollY;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        try {
          gradientRef.current?.destroy();
        } catch {
          // ignore cleanup errors if canvas already removed
        }
      };
    } catch (e) {
      console.warn('NeatGradient WebGL initialization error:', e);
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        id="gradient"
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
