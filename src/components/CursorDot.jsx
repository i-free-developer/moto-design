import { useState, useEffect } from 'react';

export default function CursorDot() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 w-100vw h-1vh cursor-none pointer-events-none z-200">
      <div style={{
        left: position.x,
        top: position.y,
      }} className="absolute -translate-1/2 border rounded-[50%] size-[2rem] ease-out transition-transform duration-1000 delay-300 transition-discrete ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
      <div style={{
        left: position.x,
        top: position.y,
        backgroundColor: '#000',
        boxShadow: '0 0 6px rgba(0,0,0,0.3)',
      }} className="absolute -translate-1/2 size-[0.8rem] rounded-[50%] ease-out transition-transform duration-600">
      </div>
    </div> 
  )
}

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};