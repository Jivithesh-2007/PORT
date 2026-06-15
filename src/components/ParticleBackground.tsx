import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  isDark: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

export function ParticleBackground({ isDark }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, rx: -1000, ry: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 65;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.1,
          targetAlpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smoothly update mouse inertia
      const mouse = mouseRef.current;
      if (mouse.rx === -1000) {
        mouse.rx = mouse.x;
        mouse.ry = mouse.y;
      } else {
        mouse.rx += (mouse.x - mouse.rx) * 0.1;
        mouse.ry += (mouse.y - mouse.ry) * 0.1;
      }

      const pColor = isDark ? '241, 245, 249' : '30, 41, 59';
      const lColor = isDark ? '242, 125, 38' : '242, 125, 38';

      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce bounds
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse attraction/repulsion interaction
        if (mouse.rx !== -1000) {
          const dx = mouse.rx - p.x;
          const dy = mouse.ry - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            // Pull subtle force
            p.x += (dx / dist) * force * 0.6;
            p.y += (dy / dist) * force * 0.6;

            // Increase alpha when close to mouse
            p.alpha += (0.8 - p.alpha) * 0.1;
          } else {
            p.alpha += (p.targetAlpha - p.alpha) * 0.05;
          }
        } else {
          p.alpha += (p.targetAlpha - p.alpha) * 0.05;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pColor}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (110 - dist) / 110 * 0.12 * (isDark ? 0.8 : 0.6);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      // Ambient radial lighting under the cursor
      if (mouse.rx !== -1000) {
        const gradient = ctx.createRadialGradient(
          mouse.rx, mouse.ry, 0,
          mouse.rx, mouse.ry, 300
        );
        const glowColor = isDark ? 'rgba(242, 125, 38, 0.09)' : 'rgba(242, 125, 38, 0.04)';
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.rx, mouse.ry, 300, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      id="particle-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: 0.6 }}
    />
  );
}
