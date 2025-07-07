
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#3b82f6" 
        wireframe 
        opacity={0.6} 
        transparent 
      />
    </Sphere>
  );
};

const FloatingElements = () => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Box args={[0.5, 0.5, 0.5]} position={[3, 0, 0]}>
        <meshStandardMaterial color="#10b981" wireframe />
      </Box>
      <Torus args={[0.8, 0.2, 16, 32]} position={[-3, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" wireframe />
      </Torus>
      <Sphere args={[0.3, 16, 16]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </Sphere>
    </group>
  );
};

const Hero3D = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedSphere />
          <FloatingElements />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
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
