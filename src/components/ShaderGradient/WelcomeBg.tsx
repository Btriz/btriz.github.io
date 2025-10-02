import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const HomeBg = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        transform: 'scale(1.8)',
        transformOrigin: 'center',
      }}
    >
      <ShaderGradient
        control="props"
        type="sphere"
        animate="on"
        cameraZoom={9}
        cAzimuthAngle={250}
        cPolarAngle={-170}

        positionX={0}
        positionY={0}
        rotationX={0}
        positionZ={0}
        rotationY={0}
        rotationZ={0}

        color1="#6a5a7f"
        color2="#371163"
        color3="#15f800"
        brightness={1.45}
        grain="on"
        uAmplitude={5}
        uDensity={4}
        uFrequency={3}
        uSpeed={0.02}
        uStrength={1.1}
        uTime={0}
      />
    </ShaderGradientCanvas>

  );
};

export default HomeBg;
