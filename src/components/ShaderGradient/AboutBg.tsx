import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const AboutBg = () => {
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
    </ShaderGradientCanvas>

  );
};

export default AboutBg;
