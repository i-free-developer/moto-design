import { useLocation } from "react-router-dom";
import { useEffect, useCallback } from 'react'

import { throttle, debounce } from 'lodash';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [pathname]);

  return null;
}

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function useThrottle(callback, delay) {
  const throttledFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return throttledFn;
}

export { ScrollToTop, RandomInt, useThrottle }