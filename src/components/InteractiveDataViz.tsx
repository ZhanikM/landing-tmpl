import { useEffect, useRef } from 'react';

/**
 * Lightweight 2D canvas data-viz: animated gradient mesh of nodes & links
 * that warps toward the pointer. Uses requestAnimationFrame, ResizeObserver,
 * IntersectionObserver, prefers-reduced-motion, and a capped DPR.
 *
 * Pure 2D canvas (not WebGL) — guaranteed to work on virtually any device,
 * with a graceful static fallback if 2D context can't be acquired.
 */
export default function InteractiveDataViz({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const NODE_COUNT = isMobile ? 28 : 70;
    const LINK_DIST = isMobile ? 110 : 150;
    const POINTER_RADIUS = isMobile ? 120 : 200;

    let width = 0;
    let height = 0;
    let raf = 0;
    let visible = true;
    let active = true;

    const pointer = { x: -9999, y: -9999, has: false };

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: Node[] = [];

    const seed = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 1 + Math.random() * 1.5,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      if (nodes.length === 0) seed();
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible || !active) return;

      ctx.clearRect(0, 0, width, height);

      // Update + draw nodes
      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
        }
        // Wrap
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;

        // Pointer attraction
        if (pointer.has) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          const r2 = POINTER_RADIUS * POINTER_RADIUS;
          if (d2 < r2) {
            const f = (1 - d2 / r2) * 0.6;
            n.vx += (dx / Math.sqrt(d2 + 0.01)) * f * 0.05;
            n.vy += (dy / Math.sqrt(d2 + 0.01)) * f * 0.05;
          }
        }
        // Damping
        n.vx *= 0.98;
        n.vy *= 0.98;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(220, 100%, 77%, 0.7)';
        ctx.fill();
      }

      // Draw links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.25;
            ctx.strokeStyle = `hsla(224, 100%, 70%, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Pointer glow
      if (pointer.has) {
        const grad = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          POINTER_RADIUS,
        );
        grad.addColorStop(0, 'hsla(224, 100%, 56%, 0.18)');
        grad.addColorStop(1, 'hsla(224, 100%, 56%, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }
    };

    // Events
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.has = true;
    };
    const onLeave = () => {
      pointer.has = false;
    };
    const onVisibility = () => {
      active = !document.hidden;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible = e.isIntersecting;
      },
      { threshold: 0.01 },
    );
    io.observe(canvas);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
}
