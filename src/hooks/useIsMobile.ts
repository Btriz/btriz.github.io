import { useState } from 'react';

const getIsMobile = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  return isMobileUA && hasTouch;
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  return isMobile;
};
