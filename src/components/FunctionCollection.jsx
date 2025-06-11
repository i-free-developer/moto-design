import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react'

import { throttle } from 'lodash';

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

function UseThrottle(callback, delay) {
  const throttledFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return throttledFn;
}

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 15 || scrollY - lastScrollY < -15)) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]); // run when scroll direction changes

    return scrollDirection;
};

function useScrollTo() {
  return useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);
}

function useDrawerHandler() {
  const [drawerStatus, setDrawerStatus] = useState('initial')
  const handleClickDrawer = () => {
    let newStatus; 
    if (drawerStatus === 'initial' || drawerStatus === 'closed') { newStatus = 'opened' } 
    if (drawerStatus === 'opened') { newStatus = 'closed' }
    setDrawerStatus(newStatus)
  }

  const closeDrawer = () => {
    if (drawerStatus === 'opened') { setDrawerStatus('closed') }
  }
  
  return {drawerStatus, handleClickDrawer, closeDrawer}
}


export { ScrollToTop, RandomInt, UseThrottle, useScrollDirection, useScrollTo, useDrawerHandler }
