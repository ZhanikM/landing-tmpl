import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function IcosahedronIcon() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.3;
    ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial
          color="#1E5EFF"
          transmission={0.6}
          thickness={1.5}
          roughness={0.1}
          metalness={0.1}
          ior={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.05, 0]} />
        <meshBasicMaterial color="#8EB8FF" wireframe transparent opacity={0.2} />
      </mesh>
    </Float>
  );
}

function GridPlanes() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.2;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={ref}>
        {[0, 0.4, 0.8].map((y, i) => (
          <mesh key={i} position={[0, y - 0.4, 0]} rotation={[-Math.PI / 6, 0, 0]}>
            <planeGeometry args={[1.6, 1.2, 4, 4]} />
            <meshPhysicalMaterial
              color="#1E5EFF"
              transmission={0.5}
              thickness={0.5}
              roughness={0.15}
              transparent
              opacity={0.3 + i * 0.15}
              side={THREE.DoubleSide}
              wireframe={i < 2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function TorusConstellation() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = clock.elapsedTime * 0.25;
    ref.current.rotation.y = clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.35}>
      <mesh ref={ref}>
        <torusGeometry args={[0.8, 0.25, 16, 32]} />
        <meshPhysicalMaterial
          color="#1E5EFF"
          transmission={0.6}
          thickness={1}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.75}
        />
      </mesh>
      <mesh ref={ref}>
        <torusGeometry args={[0.85, 0.27, 16, 32]} />
        <meshBasicMaterial color="#8EB8FF" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

const icons: Record<string, React.FC> = {
  ai: IcosahedronIcon,
  web: GridPlanes,
  cloud: TorusConstellation,
};

export default function ServiceIcon3D({ type }: { type: 'ai' | 'web' | 'cloud' }) {
  const Icon = icons[type];

  return (
    <div className="w-20 h-20 mb-4">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 3]} intensity={0.6} color="#8EB8FF" />
          <pointLight position={[-3, -3, -3]} intensity={0.3} color="#1E5EFF" />
          <Icon />
        </Suspense>
      </Canvas>
    </div>
  );
}
