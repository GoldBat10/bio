import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: isHovering ? '40px' : '20px',
                height: isHovering ? '40px' : '20px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                transition: 'width 0.2s, height 0.2s',
                zIndex: 9999,
                mixBlendMode: 'difference'
            }}
        />
        <div 
             style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '4px',
                height: '4px',
                backgroundColor: 'white',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                zIndex: 10000
             }}
        />
    </>
  );
};

export default CustomCursor;
