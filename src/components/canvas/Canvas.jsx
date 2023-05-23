import React, { useRef, useEffect } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // draw on the resized canvas here
      context.fillStyle = 'green';
      context.fillRect(0, 0, canvas.width, canvas.height);
    };
  
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return <canvas ref={canvasRef} width={300} height={300} />;
};

export default Canvas;