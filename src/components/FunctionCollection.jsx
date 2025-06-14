import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from 'react'

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

function isElementInViewport(item) {
  const rect = item.getBoundingClientRect()
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

function useScreenRatio() {
  const designedSmallWidth = 750; // 设计稿宽度
  const designedBigWidth = 1920; // 设计稿宽度
  const [smallScreenRatio, setSmallScreenRatio] = useState(100)
  const [bigScreenRatio, setBigScreenRatio] = useState(100)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    const baseSize = 100; // 基准值 (1rem = 100px)
  
    function setRem() {
      let windowWidth = document.documentElement.clientWidth;
      
      if (windowWidth <= 750) {
        const smallScreenRatio = windowWidth / designedSmallWidth;
        document.documentElement.style.fontSize = baseSize * smallScreenRatio + 'px';
        setSmallScreenRatio(Math.round(smallScreenRatio * 100))
        setIsMobileDevice(true)
      } else {
        document.documentElement.style.fontSize = '16px';
      }

      if (windowWidth >= 1920) {
        const bigScreenRatio = windowWidth / designedBigWidth;
        setBigScreenRatio(Math.round(bigScreenRatio * 100))
      }
      // console.log('onload setRem', baseSize, windowWidth, designWidth)
    }

    window.addEventListener('load', () => { requestAnimationFrame(setRem) })
    window.addEventListener('resize', () => { requestAnimationFrame(setRem) })

    return () => {
      window.removeEventListener('load', setRem);
      window.removeEventListener('resize', setRem);
    };
  }, [document.documentElement.clientWidth]);

  return {isMobileDevice, smallScreenRatio, bigScreenRatio}
}

import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';

function OdometerItem ({ value, format = '(,ddd)', duration = 2500 }) {
  const odometerRef = useRef(null);
  const odometerInstance = useRef(null);

  useEffect(() => {
    if (odometerRef.current && !odometerInstance.current) {
      odometerInstance.current = new Odometer({
        el: odometerRef.current,
        value: 0,
        format,
        theme: 'default',
        duration
      });
    }

    // 更新值
    if (odometerInstance.current) { odometerInstance.current.update(value); }

    // 清理函数
    return () => {
      if (odometerInstance.current) {
        // odometerInstance.current.destroy();
        odometerInstance.current = null;
      }
    };
  }, [value]);

  return (<span ref={odometerRef} className="odometer" />);
}

export { ScrollToTop, RandomInt, UseThrottle, useScrollDirection, useScrollTo, useDrawerHandler, isElementInViewport, OdometerItem, useScreenRatio }
