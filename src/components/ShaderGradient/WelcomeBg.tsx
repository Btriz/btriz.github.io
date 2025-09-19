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
      {/* <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.9&color1=%236a5a7f&color2=%23371163&color3=%2315f800&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=0.6&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.5&rotationX=0&rotationY=-20&rotationZ=140&shader=defaults&type=sphere&uAmplitude=3&uDensity=2.9&uFrequency=5.5&uSpeed=0.1&uStrength=1.1&uTime=0&wireframe=false"
      /> */}

      {/* <ShaderGradient
        control="props"
        type="sphere"
        animate="on"
        cameraZoom={13}
        cAzimuthAngle={250}
        cPolarAngle={140}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={-20}
        rotationZ={140}
        color1="#6a5a7f"
        color2="#371163"
        color3="#15f800"
        uStrength={1.1}
        uDensity={2.9}
        uAmplitude={3}
        uFrequency={3}
        uSpeed={0.02}
        brightness={1.5}
        grain="on"
      /> */}

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
        // color3='#66f87e'

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
