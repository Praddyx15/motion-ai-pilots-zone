
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SimpleShape = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  );
};

const Hero3D = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Simple 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse text-primary-blue">Loading...</div>
          </div>
        }>
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <SimpleShape position={[0, 0, 0]} color="#3b82f6" />
            <SimpleShape position={[2, 1, -1]} color="#10b981" />
            <SimpleShape position={[-2, -1, 1]} color="#f59e0b" />
          </Canvas>
        </Suspense>
      </div>

      {/* Content */}
      <div className="container-width relative z-10 text-center">
        <div className="fade-in">
          <h1 className="heading-primary mb-6">
            <span className="text-primary-blue">SIXTY MOTION</span>
            <br />
            <span className="text-white">SYSTEMS</span>
          </h1>
          
          <p className="body-text mb-8 max-w-2xl mx-auto text-gray-300">
            Next-generation flight simulation technology powered by advanced AI and precision engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Explore Simulators
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
