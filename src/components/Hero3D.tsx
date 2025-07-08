
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TechGrid = ({ position, size }: { position: [number, number, number], size: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      if (material && !Array.isArray(material)) {
        material.opacity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.1;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial 
        color="#2e9896" 
        wireframe 
        transparent 
        opacity={0.2}
      />
    </mesh>
  );
};

const FloatingElements = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <TechGrid position={[0, 0, -5]} size={20} />
      <TechGrid position={[0, 0, -10]} size={30} />
      <TechGrid position={[0, 0, -15]} size={40} />
    </group>
  );
};

const Hero3D = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#2e9896" />
            <FloatingElements />
          </Canvas>
        </Suspense>
      </div>

      <div className="container-width relative z-10 text-center">
        <div className="fade-in">
          <h1 className="heading-primary mb-6 text-white">
            World's First AI-Powered
            <br />
            <span className="text-accent-teal">Full Flight Simulator</span>
          </h1>
          
          <p className="body-text mb-8 max-w-2xl mx-auto text-gray-300 text-xl">
            Designed in India, crafted for the world
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Explore Simulators
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-teal to-transparent"></div>
    </section>
  );
};

export default Hero3D;
