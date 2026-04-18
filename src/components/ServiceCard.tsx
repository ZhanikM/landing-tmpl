import { useRef, useState, useCallback } from 'react';
import ServiceIcon3D from './ServiceIcon3D';

interface Service {
  title: string;
  description: string;
  features: string[];
  iconType: 'ai' | 'web' | 'cloud';
}

export default function ServiceCard({ service }: { service: Service }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  const handleMouseLeave = useCallback(() => setMouse({ x: 0, y: 0 }), []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-card-gradient rounded-xl p-8 h-full flex flex-col transition-shadow duration-500"
    >
      <ServiceIcon3D type={service.iconType} mouseX={mouse.x} mouseY={mouse.y} />
      <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground text-sm mb-6 flex-1">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((f) => (
          <li key={f} className="text-sm text-foreground/80 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary inline-block" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}
