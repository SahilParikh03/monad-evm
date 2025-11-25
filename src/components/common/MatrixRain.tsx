import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to display (katakana, numbers, crypto symbols)
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF$₿Ξ';
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Array to track the y position of each column
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    // Purple color variations
    const colors = ['#C084FC', '#A855F7', '#8B5CF6', '#7C3AED', '#6D28D9'];

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = characters[Math.floor(Math.random() * characters.length)];

        // Random purple color with occasional bright highlights
        const colorIndex = Math.random() > 0.98 ? 0 : Math.floor(Math.random() * colors.length);
        ctx.fillStyle = colors[colorIndex];

        // Draw the character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        // Reset drop randomly or when it reaches bottom
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33); // ~30 FPS

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: 'black' }}
    />
  );
};

export default MatrixRain;
