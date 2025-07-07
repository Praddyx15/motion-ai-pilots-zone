
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SimulatorCapsule = () => {
  const capsuleRef = useRef<THREE.Group>(null);
  const legsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (capsuleRef.current) {
      capsuleRef.current.rotation.y += 0.005;
    }
    if (legsRef.current) {
      legsRef.current.children.forEach((leg, index) => {
        leg.rotation.z = Math.sin(state.clock.elapsedTime + index) * 0.1;
      });
    }
  });

  // Create 6DOF motion base legs
  const createLeg = (angle: number, index: number) => {
    const x = Math.cos(angle) * 3;
    const z = Math.sin(angle) * 3;
    
    return (
      <group key={index} position={[x, -2, z]}>
        {/* Lower leg */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.1, 0.15, 2]} />
          <meshStandardMaterial color="#2e9896" wireframe />
        </mesh>
        {/* Upper leg */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 1]} />
          <meshStandardMaterial color="#004443" wireframe />
        </mesh>
        {/* Joint */}
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#2e9896" wireframe />
        </mesh>
      </group>
    );
  };

  const legs = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    legs.push(createLeg(angle, i));
  }

  return (
    <group>
      {/* Motion Base Platform */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.3]} />
        <meshStandardMaterial color="#004443" wireframe />
      </mesh>
      
      {/* 6DOF Legs */}
      <group ref={legsRef}>
        {legs}
      </group>
      
      {/* Simulator Capsule */}
      <group ref={capsuleRef} position={[0, 2, 0]}>
        <mesh>
          <capsuleGeometry args={[1.5, 2, 4, 8]} />
          <meshStandardMaterial 
            color="#2e9896" 
            wireframe 
            transparent 
            opacity={0.8} 
          />
        </mesh>
        
        {/* Cockpit Interior */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.2, 0.8, 1.2]} />
          <meshStandardMaterial color="#004443" wireframe />
        </mesh>
      </group>
    </group>
  );
};

const SimulatorSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-[#001f1f] to-[#004443] relative">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6 text-white fade-in">
            <span className="text-accent-teal">6DOF</span> Motion Platform
          </h2>
          <p className="body-text text-gray-300 max-w-2xl mx-auto fade-in">
            Our advanced motion simulator with six degrees of freedom provides unparalleled realism 
            for flight training and aerospace simulation.
          </p>
        </div>

        {/* 3D Simulator Display */}
        <div className="h-96 mb-16 glass-panel relative overflow-hidden">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-accent-teal">Loading 3D Model...</div>
            </div>
          }>
            <Canvas camera={{ position: [8, 6, 8], fov: 45 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={0.8} color="#2e9896" />
              <pointLight position={[-10, -10, -10]} intensity={0.4} color="#004443" />
              <SimulatorCapsule />
              <OrbitControls 
                enablePan={false} 
                minDistance={5} 
                maxDistance={15}
                autoRotate
                autoRotateSpeed={1}
              />
            </Canvas>
          </Suspense>
          
          {/* Control Overlay */}
          <div className="absolute bottom-4 left-4 glass-panel p-3">
            <p className="text-xs text-accent-teal uppercase tracking-wider">
              Drag to rotate • Scroll to zoom
            </p>
          </div>
        </div>

        {/* Technical Specs */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-6 text-center hover-glow scale-in">
            <div className="text-3xl font-bold text-accent-teal mb-2">±30°</div>
            <div className="body-small text-gray-300 uppercase">Motion Range</div>
          </div>
          <div className="glass-panel p-6 text-center hover-glow scale-in">
            <div className="text-3xl font-bold text-accent-teal mb-2">1000Hz</div>
            <div className="body-small text-gray-300 uppercase">Update Rate</div>
          </div>
          <div className="glass-panel p-6 text-center hover-glow scale-in">
            <div className="text-3xl font-bold text-accent-teal mb-2">6DOF</div>
            <div className="body-small text-gray-300 uppercase">Motion Axes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
