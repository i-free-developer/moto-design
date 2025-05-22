import { useState, useEffect } from 'react';

export default function CursorsDot() {
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
      <div style={{transform: `translate(${position.x}px, ${position.y}px)`}}
      className="absolute -translate-1/2 border rounded-[50%] size-[2rem] ease-out transition-transform duration-400 ease-in-out"></div>
      
      <div style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        backgroundColor: '#000',
        boxShadow: '0 0 6px rgba(0,0,0,0.3)',
      }} className="absolute -translate-1/2 size-[0.8rem] rounded-[50%] ease-out transition-transform duration-200 ease-in-out">
      </div>
    </div> 
  )
}