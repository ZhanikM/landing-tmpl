import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function NetworkSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const { viewport } = useThree();

  useFrame(({ mouse, clock }) => {
    if (!meshRef.current) return;
    mouseRef.current.x = THREE.MathUtils.lerp(mouseRef.current.x, mouse.x * 0.3, 0.05);
    mouseRef.current.y = THREE.MathUtils.lerp(mouseRef.current.y, mouse.y * 0.3, 0.05);
    meshRef.current.rotation.y = clock.elapsedTime * 0.15;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;
    meshRef.current.position.x = mouseRef.current.x * viewport.width * 0.1;
    meshRef.current.position.y = mouseRef.current.y * viewport.height * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <Sphere args={[2, 64, 64]}>
          <MeshDistortMaterial
            color="#1E5EFF"
            emissive="#1E5EFF"
            emissiveIntensity={0.15}
            roughness={0.3}
            metalness={0.8}
            distort={0.25}
            speed={2}
            transparent
            opacity={0.85}
          />
        </Sphere>
        {/* Wireframe overlay */}
        <Sphere args={[2.05, 32, 32]}>
          <meshBasicMaterial
            color="#8EB8FF"
            wireframe
            transparent
            opacity={0.12}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function ParticleRing() {
  const ref = useRef<THREE.Points>(null);
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 3 + Math.random() * 0.5;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.8;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.08;
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.15;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#8EB8FF"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} color="#8EB8FF" />
          <pointLight position={[-5, -5, -5]} intensity={0.3} color="#1E5EFF" />
          <NetworkSphere />
          <ParticleRing />
        </Suspense>
      </Canvas>
    </div>
  );
}
