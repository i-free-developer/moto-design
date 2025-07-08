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
    const scrollDistance = 1
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > scrollDistance || scrollY - lastScrollY < -scrollDistance)) {
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

function useHoverHandler() {
  const [isHovered, setIsHovered] = useState(false);
  return {isHovered, setIsHovered}
}

function isElementInViewport(item) {
  const rect = item.getBoundingClientRect()
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
}

function useScreenRatio() {
  const designedSmallWidth = 750; // 设计稿宽度
  const designedBigWidth = 1920; // 设计稿宽度
  const baseSize = 100; // 基准值 (1rem = 100px)
  const [isMobileDevice, setIsMobileDevice] = useState(false)
  const [bigScreenRatioInt, setBigScreenRatioInt] = useState(1)
  const [bigScreenRatioDecimal, setBigScreenRatioDecimal] = useState(1.0)
  const [smallScreenRatioInt, setSmallScreenRatioInt] = useState(100)
  const [smallScreenRatioDecimal, setSmallScreenRatioDecimal] = useState(1.0)

  function resizeScreen() {
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth <= designedSmallWidth) {
      setIsMobileDevice(true)
      let sRem = (baseSize * (windowWidth / designedSmallWidth)).toFixed(2) + 'px'
      if (document.documentElement.style.fontSize != sRem) {document.documentElement.style.fontSize = sRem;}
    } else if (windowWidth <= designedBigWidth) {
      setIsMobileDevice(false)
      let bRem = (baseSize * (windowWidth / designedBigWidth)).toFixed(2) + 'px'
      if (document.documentElement.style.fontSize != bRem) {document.documentElement.style.fontSize = bRem;}
      // document.documentElement.style.fontSize = baseSize * bigScreenRatioRaw + 'px';
    } else {
      setIsMobileDevice(false)
      if (document.documentElement.style.fontSize != '100px') {document.documentElement.style.fontSize = baseSize * 1 + 'px'} 
    }
    setScreenRatios()
  }

  function setScreenRatios() {
    let windowWidth = document.documentElement.clientWidth;
    if (windowWidth <= designedSmallWidth) {
      let smallScreenRatio = windowWidth / designedSmallWidth;
      let smallScreenRatioDecimalRaw = parseFloat((windowWidth / designedSmallWidth).toFixed(2))
      // console.log('resizeSmallScreen', smallScreenRatio, smallScreenRatioDecimalRaw, Math.round(smallScreenRatio * 100))
      setSmallScreenRatioInt(Math.round(smallScreenRatio * 100))
      setSmallScreenRatioDecimal(smallScreenRatioDecimalRaw)
    } else if (windowWidth <= designedBigWidth) {
      let bigScreenRatio = windowWidth / designedBigWidth;
      let bigScreenRatioDecimalRaw = parseFloat((windowWidth / designedBigWidth).toFixed(2))
      setBigScreenRatioInt(Math.round(bigScreenRatio * 100))
      setBigScreenRatioDecimal(bigScreenRatioDecimalRaw)
    } else {
      setBigScreenRatioInt(100)
      setBigScreenRatioDecimal(1.0)
    }
  }

  useEffect(() => {
    window.addEventListener('load', () => { requestAnimationFrame(resizeScreen) })
    window.addEventListener('resize', () => { requestAnimationFrame(resizeScreen) })

    return () => {
      window.removeEventListener('load', resizeScreen);
      window.removeEventListener('resize', resizeScreen);
    };
  }, []);
  return {isMobileDevice, bigScreenRatioInt, bigScreenRatioDecimal, smallScreenRatioInt, smallScreenRatioDecimal}
}

function useSmallScreenRatio() {
  const designedSmallWidth = 750; // 设计稿宽度
  const baseSize = 100; // 基准值 (1rem = 100px)
  const [smallScreenRatioInt, setSmallScreenRatioInt] = useState(100)
  const [smallScreenRatioDecimal, setSmallScreenRatioDecimal] = useState(1.0)
  
  function resizeSmallScreen() {
    let windowWidth = document.documentElement.clientWidth;

    let smallScreenRatio = windowWidth / designedSmallWidth;
    let smallScreenRatioDecimalRaw = parseFloat((windowWidth / designedSmallWidth).toFixed(2))
    console.log('resizeSmallScreen', smallScreenRatio, smallScreenRatioDecimalRaw, Math.round(smallScreenRatio * 100))
    setSmallScreenRatioInt(Math.round(smallScreenRatio * 100))
    setSmallScreenRatioDecimal(smallScreenRatioDecimalRaw)
  }

  useEffect(() => {
    window.addEventListener('load', () => { requestAnimationFrame(resizeSmallScreen) })
    window.addEventListener('resize', () => { requestAnimationFrame(resizeSmallScreen) })

    return () => {
      window.removeEventListener('load', resizeSmallScreen);
      window.removeEventListener('resize', resizeSmallScreen);
    }
  }, [])
  return {smallScreenRatioInt, smallScreenRatioDecimal}
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

  return (<span ref={odometerRef} className="odometer min-w-content" />);
}

export { ScrollToTop, RandomInt, UseThrottle, useScrollDirection, useScrollTo, useDrawerHandler, isElementInViewport, OdometerItem, useScreenRatio, useSmallScreenRatio, useHoverHandler }
