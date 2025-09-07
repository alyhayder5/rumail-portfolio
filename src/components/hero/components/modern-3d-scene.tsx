'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, Suspense } from 'react';
import { Mesh, InstancedMesh, Color } from 'three';
import { RoundedBox, Sphere, Torus } from '@react-three/drei';

// Performance-optimized floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);
  const shapes = useMemo(() => {
    // Reduce shapes on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const shapeCount = isMobile ? 4 : 8;

    const shapes = [];
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        position: [
          (Math.random() - 0.5) * (isMobile ? 15 : 20),
          (Math.random() - 0.5) * (isMobile ? 15 : 20),
          (Math.random() - 0.5) * (isMobile ? 15 : 20),
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: (Math.random() * 0.5 + 0.3) * (isMobile ? 0.8 : 1),
        color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][
          Math.floor(Math.random() * 5)
        ],
        type: ['box', 'sphere', 'torus'][Math.floor(Math.random() * 3)],
      });
    }
    return shapes;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.children.forEach((child, index) => {
        child.rotation.x = state.clock.elapsedTime * (0.2 + index * 0.1);
        child.rotation.z = state.clock.elapsedTime * (0.1 + index * 0.05);
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <group
          key={index}
          position={shape.position as [number, number, number]}
          rotation={shape.rotation as [number, number, number]}
          scale={shape.scale}
        >
          {shape.type === 'box' && (
            <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
              <meshStandardMaterial
                color={shape.color}
                transparent
                opacity={0.6}
                metalness={0.3}
                roughness={0.4}
              />
            </RoundedBox>
          )}
          {shape.type === 'sphere' && (
            <Sphere args={[0.5, 16, 16]}>
              <meshStandardMaterial
                color={shape.color}
                transparent
                opacity={0.6}
                metalness={0.3}
                roughness={0.4}
              />
            </Sphere>
          )}
          {shape.type === 'torus' && (
            <Torus args={[0.5, 0.2, 8, 16]}>
              <meshStandardMaterial
                color={shape.color}
                transparent
                opacity={0.6}
                metalness={0.3}
                roughness={0.4}
              />
            </Torus>
          )}
        </group>
      ))}
    </group>
  );
}

// Performance-optimized particle system with instancing
function ParticleField() {
  const meshRef = useRef<InstancedMesh>(null);
  // Reduce particles on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 25 : 50;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      scales[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, scales };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.01;

      // Animate particles
      for (let i = 0; i < particleCount; i++) {
        const time = state.clock.elapsedTime;
        const offset = i * 0.1;
        meshRef.current.position.setY(Math.sin(time + offset) * 0.2);
      }
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <sphereGeometry args={[0.01, 6, 6]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
    </instancedMesh>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

// Main 3D scene component
export default function Modern3DScene() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]} // Further limit DPR on mobile
        performance={{ min: 0.5 }} // Reduce quality if FPS drops below 30
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        frameloop="always" // Keep animation running
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Optimized lighting setup */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.2}
            color="#3b82f6"
          />
          <pointLight position={[10, -10, 5]} intensity={0.2} color="#8b5cf6" />

          {/* 3D Elements */}
          <FloatingShapes />
          <ParticleField />

          {/* Central focal element with animation */}
          <RoundedBox
            args={[2, 2, 2]}
            radius={0.3}
            smoothness={4}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial
              color="#ffffff"
              transparent
              opacity={0.05}
              metalness={0.9}
              roughness={0.1}
            />
          </RoundedBox>
        </Suspense>
      </Canvas>
    </div>
  );
}
