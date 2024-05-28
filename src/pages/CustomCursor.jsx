import React, { useEffect, useRef, useState } from 'react';
import '../CustomCursor.css';

const CustomCursor = ({ defaultCursorImage, cursorSize }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      cursorRef.current.style.left = `${clientX}px`;
      cursorRef.current.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!defaultCursorImage) {
    return null;
  }

  return (
    <>
      <div
        className="custom-cursor"
        ref={cursorRef}
        style={{ 
          backgroundImage: `url(${ defaultCursorImage })`,
          width: cursorSize,
          height: cursorSize,
      }}
      />
  
    </>
  );
};

// const CustomCursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       cursorRef.current.style.left = `${clientX}px`;
//       cursorRef.current.style.top = `${clientY}px`;
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return <div className="custom-cursor" ref={cursorRef} />;
// };

export default CustomCursor;