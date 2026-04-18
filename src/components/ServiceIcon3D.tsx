import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Lightweight CSS/SVG-based "3D" service icons.
 *
 * Previously each card mounted its own <Canvas>. Combined with the hero scene
 * that pushed the browser past its WebGL context limit (typically 8–16) and
 * caused 3D elements to crash after a while. This implementation keeps the
 * premium glassy look while using zero WebGL contexts — purely CSS transforms,
 * SVG, and framer-motion. It still reacts to cursor parallax via mouseX/mouseY
 * passed from the parent card and supports gentle mobile-safe drag.
 */

interface Props {
  type: 'ai' | 'web' | 'cloud';
  mouseX?: number;
  mouseY?: number;
}

function useTilt(mouseX: number, mouseY: number) {
  const rotY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.6 });
  const rotX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    rotY.set(mouseX * 25);
    rotX.set(mouseY * -20);
  }, [mouseX, mouseY, rotY, rotX]);

  return { rotX, rotY };
}

function AIIcon({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const { rotX, rotY } = useTilt(mouseX, mouseY);
  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full h-full flex items-center justify-center"
    >
      <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-[0_0_12px_hsl(224_100%_56%/0.45)]">
        <defs>
          <linearGradient id="aiGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(224 100% 56%)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(220 100% 77%)" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <polygon
          points="40,8 68,24 68,56 40,72 12,56 12,24"
          fill="url(#aiGrad)"
          stroke="hsl(220 100% 77%)"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <polygon
          points="40,8 68,24 40,40 12,24"
          fill="hsl(220 100% 77% / 0.18)"
          stroke="hsl(220 100% 77% / 0.4)"
          strokeWidth="0.8"
        />
        <polygon
          points="40,40 68,24 68,56 40,72"
          fill="hsl(224 100% 56% / 0.25)"
          stroke="hsl(220 100% 77% / 0.4)"
          strokeWidth="0.8"
        />
        <line x1="40" y1="8" x2="40" y2="72" stroke="hsl(220 100% 77% / 0.35)" strokeWidth="0.6" />
      </svg>
    </motion.div>
  );
}

function WebIcon({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const { rotX, rotY } = useTilt(mouseX, mouseY);
  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      className="w-full h-full flex items-center justify-center"
    >
      <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-[0_0_12px_hsl(224_100%_56%/0.45)]">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0, ${i * 10}) skewX(-18)`}>
            <rect
              x="14"
              y={20 + i * 6}
              width="52"
              height="14"
              rx="2"
              fill={`hsl(224 100% 56% / ${0.25 + i * 0.18})`}
              stroke="hsl(220 100% 77% / 0.5)"
              strokeWidth="0.8"
            />
            {[0, 1, 2, 3].map((j) => (
              <line
                key={j}
                x1={14 + j * 13}
                y1={20 + i * 6}
                x2={14 + j * 13}
                y2={34 + i * 6}
                stroke="hsl(220 100% 77% / 0.25)"
                strokeWidth="0.5"
              />
            ))}
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

function CloudIcon({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const { rotX, rotY } = useTilt(mouseX, mouseY);
  return (
    <motion.div
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      className="w-full h-full flex items-center justify-center"
    >
      <svg viewBox="0 0 80 80" className="w-full h-full drop-shadow-[0_0_12px_hsl(224_100%_56%/0.45)]">
        <ellipse
          cx="40"
          cy="40"
          rx="28"
          ry="10"
          fill="none"
          stroke="hsl(224 100% 56%)"
          strokeWidth="2"
          strokeOpacity="0.75"
        />
        <ellipse
          cx="40"
          cy="40"
          rx="28"
          ry="10"
          transform="rotate(60 40 40)"
          fill="none"
          stroke="hsl(220 100% 77%)"
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />
        <ellipse
          cx="40"
          cy="40"
          rx="28"
          ry="10"
          transform="rotate(-60 40 40)"
          fill="none"
          stroke="hsl(220 100% 77%)"
          strokeWidth="1.5"
          strokeOpacity="0.55"
        />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle
              key={deg}
              cx={40 + Math.cos(rad) * 28}
              cy={40 + Math.sin(rad) * 10}
              r="2.2"
              fill="hsl(220 100% 77%)"
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

const icons = {
  ai: AIIcon,
  web: WebIcon,
  cloud: CloudIcon,
};

export default function ServiceIcon3D({ type, mouseX = 0, mouseY = 0 }: Props) {
  const Icon = icons[type];
  return (
    <div className="w-20 h-20 mb-4" style={{ perspective: 600 }}>
      <Icon mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
}
