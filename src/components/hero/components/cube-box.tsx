'use client';

import { Canvas } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export default function CubeBox() {
  return (
    <>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 -z-10">
        <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <RoundedBox
            args={[1.28, 1.28, 1.28]}
            radius={0.2}
            smoothness={4}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial color="#FFBA00" />
          </RoundedBox>
        </Canvas>
      </div>

      <div className="absolute -top-6 -right-6 w-24 h-24 -z-10">
        <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <RoundedBox
            args={[0.96, 0.96, 0.96]}
            radius={0.15}
            smoothness={4}
            position={[0, 0, 0]}
          >
            <meshStandardMaterial color="#4f46e5" />
          </RoundedBox>
        </Canvas>
      </div>
    </>
  );
}
