import { useState, useEffect } from 'react';


export default function FollowCursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
    <div style={{
      position: 'fixed',
      pointerEvents: 'none',  // Allows clicks to pass through
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      cursor: 'none'          // Hide default cursor
    }}>
      <div style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',  // Center dot on cursor
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#f00',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.5s ease-out',
      }} />
    </div>
  );
}
