import React, { useRef, useEffect } from 'react';

interface Pixel {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

export const PixelBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let pixels: Pixel[] = [];
    const gridSize = 40; // Size of the grid cells
    
    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPixels();
    };

    const initPixels = () => {
      pixels = [];
      const columns = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      // Create a pixel for every grid intersection, but only activate some
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
           // 20% chance to exist initially
           if (Math.random() < 0.2) {
             pixels.push({
               x: i * gridSize,
               y: j * gridSize,
               size: gridSize - 2, // Slight gap
               opacity: Math.random(),
               speed: 0.005 + Math.random() * 0.02,
               color: Math.random() > 0.8 ? '#00f3ff' : '#2a2a2a' // Occasional neon pixel
             });
           }
        }
      }
    };

    const draw = () => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(5, 5, 7, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Randomly add new pixels to keep it alive
      if (Math.random() < 0.5) {
         const columns = Math.ceil(canvas.width / gridSize);
         const rows = Math.ceil(canvas.height / gridSize);
         const x = Math.floor(Math.random() * columns) * gridSize;
         const y = Math.floor(Math.random() * rows) * gridSize;
         
         pixels.push({
           x,
           y,
           size: gridSize - 2,
           opacity: 0,
           speed: 0.02 + Math.random() * 0.03,
           color: Math.random() > 0.9 ? '#bc13fe' : '#1a1a1a'
         });
      }

      // Update and draw pixels
      for (let i = pixels.length - 1; i >= 0; i--) {
        const p = pixels[i];
        
        // Pulse opacity
        p.opacity += p.speed;
        if (p.opacity >= 1 || p.opacity <= 0) {
          p.speed = -p.speed;
        }
        
        // Remove dead pixels occasionally if they get too invisible to save memory
        if (p.opacity <= 0 && Math.random() < 0.01) {
            pixels.splice(i, 1);
            continue;
        }

        ctx.fillStyle = p.color === '#2a2a2a' || p.color === '#1a1a1a' 
          ? `rgba(42, 42, 42, ${p.opacity * 0.5})` // Gray pixels are ghosts
          : p.color; // Neon pixels are solid-ish

        // Use global alpha for fading
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.fillRect(p.x, p.y, p.size, p.size);
        ctx.globalAlpha = 1.0;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};