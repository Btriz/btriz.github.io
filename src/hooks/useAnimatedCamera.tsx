import { useRef, useEffect, useState, useCallback } from 'react';

const useAnimatedCamera = (
  target: [number, number, number],
  lerp = 0.10,
  threshold = 0.01,
  initial: [number, number, number] = [0, 0, 20],
) => {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>(initial);
  const [cameraReady, setCameraReady] = useState(false);
  const frameRef = useRef<number | null>(null);
  const currentRef = useRef<[number, number, number]>(initial);

  const distance = useCallback(
    (a: [number, number, number], b: [number, number, number]) =>
      Math.sqrt(
        (a[0] - b[0]) ** 2 +
        (a[1] - b[1]) ** 2 +
        (a[2] - b[2]) ** 2,
      ),
    [],
  );

  useEffect(() => {
    setCameraReady(false);
    currentRef.current = cameraPosition;

    function animate() {
      const current = currentRef.current;
      const next: [number, number, number] = [
        current[0] + (target[0] - current[0]) * lerp,
        current[1] + (target[1] - current[1]) * lerp,
        current[2] + (target[2] - current[2]) * lerp,
      ];

      setCameraPosition(next);
      currentRef.current = next;

      if (distance(next, target) > threshold) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCameraPosition(target);
        setCameraReady(true);
      }
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target[0], target[1], target[2], lerp, threshold, distance]);

  return { cameraPosition, cameraReady };
};

export default useAnimatedCamera;
