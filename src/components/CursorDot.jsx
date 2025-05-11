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
    <div className="fixed left-0 top-0 w-100vw h-1vh cursor-none pointer-events-none">
      <div style={{
        left: position.x,
        top: position.y,
        backgroundColor: '#f00',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      }} className="absolute -translate-1/2 size-[1.2rem] rounded-[50%] ease-out transition-transform duration-700">
      </div>
    </div> 
  )
}