import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const AboutBg = () => {
  const shaderProps = {
    control: 'props',
    type: 'sphere',
    animate: 'on',
    cameraZoom: 9,
    cAzimuthAngle: 250,
    cPolarAngle: -170,

    positionX: 0,
    positionY: 0,
    rotationX: 0,
    positionZ: 0,
    rotationY: 0,
    rotationZ: 0,

    color1: '#6a5a7f',
    color2: '#371163',
    color3: '#15f800',
    // color3: '#66f87e',

    brightness: 1.45,
    grain: 'on',

    uAmplitude: 5,
    uDensity: 4,
    uFrequency: 3,
    uSpeed: 0.02,
    uStrength: 1.1,
    uTime: 0,

    // misc (pass-through; some keys may not exist in current TS types)
    // kept from URL for parity; cast to any below to avoid TS errors if type misses them
    // destination: 'onCanvas' as const,
    // embedMode: 'off' as const,
    // envPreset: 'city' as const,
    // format: 'gif' as const,
    // frameRate: 10,
    // gizmoHelper: 'hide' as const,
    // lightType: '3d' as const,
    // range: 'disabled' as const,
    // rangeStart: 0,
    // rangeEnd: 40,
    // reflection: 0.5,
    // shader: 'defaults' as const,
    // wireframe: false,
    // axesHelper: 'off' as const,
  };

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
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.7&cAzimuthAngle=170&cDistance=3.5&cPolarAngle=70&cameraZoom=1&color1=%23656567&color2=%23cfddff&color3=%23ffdefe&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=0.6&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=20&rotationY=-10&rotationZ=90&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.1&uStrength=3.4&uTime=0&wireframe=false"
      />

      {/* <ShaderGradient {...(shaderProps)} /> */}
    </ShaderGradientCanvas>

  );
};

export default AboutBg;
