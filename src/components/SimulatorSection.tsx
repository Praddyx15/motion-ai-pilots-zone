
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SimulatorCapsule = () => {
  const groupRef = useRef<THREE.Group>(null);
  const legsRef = useRef<THREE.Group>(null);
  const capsuleRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
    if (legsRef.current) {
      // Subtle breathing motion for legs
      legsRef.current.children.forEach((leg, index) => {
        leg.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.05;
      });
    }
  });

  // Create 6DOF motion platform legs
  const createMotionLeg = (angle: number, index: number) => {
    const baseRadius = 3.5;
    const topRadius = 2.2;
    const legHeight = 3;
    
    const baseX = Math.cos(angle) * baseRadius;
    const baseZ = Math.sin(angle) * baseRadius;
    const topX = Math.cos(angle) * topRadius;
    const topZ = Math.sin(angle) * topRadius;
    
    return (
      <group key={index}>
        {/* Lower leg segment */}
        <mesh position={[baseX, -1.5, baseZ]}>
          <cylinderGeometry args={[0.08, 0.12, legHeight]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Upper leg segment */}
        <mesh 
          position={[(baseX + topX) / 2, 0.5, (baseZ + topZ) / 2]}
          rotation={[0, 0, Math.atan2(topZ - baseZ, topX - baseX) * 0.1]}
        >
          <cylinderGeometry args={[0.1, 0.08, 2]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Bottom joint */}
        <mesh position={[baseX, -3, baseZ]}>
          <sphereGeometry args={[0.15]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Top joint */}
        <mesh position={[topX, 1.8, topZ]}>
          <sphereGeometry args={[0.12]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Ground footpad */}
        <mesh position={[baseX, -3.5, baseZ]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
      </group>
    );
  };

  // Create 6 legs in hexagonal pattern
  const legs = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    legs.push(createMotionLeg(angle, i));
  }

  return (
    <group ref={groupRef}>
      {/* Motion Base Platform */}
      <mesh position={[0, 1.8, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.2]} />
        <meshBasicMaterial color="#ffffff" wireframe />
      </mesh>
      
      {/* Platform support rods */}
      <mesh position={[1.5, 2.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.4]} />
        <meshBasicMaterial color="#ffffff" wireframe />
      </mesh>
      <mesh position={[-1.5, 2.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.4]} />
        <meshBasicMaterial color="#ffffff" wireframe />
      </mesh>
      <mesh position={[0, 2.5, 1.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1.4]} />
        <meshBasicMaterial color="#ffffff" wireframe />
      </mesh>
      <mesh position={[0, 2.5, -1.5]}>
        <cylinderGeometry args={[0.05, 0.05, 1.4]} />
        <meshBasicMaterial color="#ffffff" wireframe />
      </mesh>
      
      {/* 6DOF Legs */}
      <group ref={legsRef}>
        {legs}
      </group>
      
        {/* Main Simulator Capsule */}
        <group ref={capsuleRef} position={[0, 4, 0]}>
          {/* Main capsule body - more angular, professional design */}
          <mesh>
            <boxGeometry args={[3.6, 2.4, 4.8]} />
            <meshBasicMaterial 
              color="#ffffff" 
              wireframe 
              transparent 
              opacity={0.9} 
            />
          </mesh>
          
          {/* Front nose section */}
          <mesh position={[2.2, 0, 0]}>
            <coneGeometry args={[1.2, 1.6, 8]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          
          {/* Cockpit window sections */}
          <mesh position={[1.8, 0.8, 0]}>
            <boxGeometry args={[1.4, 0.8, 3.2]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          
          {/* Side windows */}
          <mesh position={[0.5, 0.5, 2.2]}>
            <boxGeometry args={[2, 1, 0.1]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          <mesh position={[0.5, 0.5, -2.2]}>
            <boxGeometry args={[2, 1, 0.1]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          
          {/* Door frame */}
          <mesh position={[-1.5, -0.5, 2.3]}>
            <boxGeometry args={[0.8, 1.8, 0.1]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          
          {/* Grid pattern on capsule sides */}
          {/* Vertical grid lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh key={`vertical-${i}`} position={[-1.5 + i * 0.4, 0, 2.35]}>
              <boxGeometry args={[0.02, 2.4, 0.02]} />
              <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
          ))}
          
          {/* Horizontal grid lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh key={`horizontal-${i}`} position={[0, -1.2 + i * 0.4, 2.35]}>
              <boxGeometry args={[3.6, 0.02, 0.02]} />
              <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
          ))}
          
          {/* "60" Text marking */}
          <group position={[0, -0.3, 2.4]}>
            {/* "6" */}
            <mesh position={[-0.3, 0, 0]}>
              <torusGeometry args={[0.25, 0.05, 8, 16, Math.PI]} />
              <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
            <mesh position={[-0.3, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.05, 0.05, 0.3]} />
              <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
            <mesh position={[-0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.05, 0.05, 0.5]} />
              <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
            
            {/* "0" */}
            <mesh position={[0.3, 0, 0]}>
              <torusGeometry args={[0.25, 0.05, 8, 16]} />
              <meshBasicMaterial color="#ffffff" wireframe />
            </mesh>
          </group>
          
          {/* Interior structure hints */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[3.2, 2, 4.4]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          
          {/* Control panels */}
          <mesh position={[1.4, -0.2, 0]}>
            <boxGeometry args={[0.1, 1.2, 2.8]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
        </group>
    </group>
  );
};

const SimulatorSection = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
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
        <div className="h-[600px] mb-16 relative overflow-hidden rounded-lg border border-gray-800">
          {/* Subtle scanlines effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-white to-transparent bg-repeat" 
                 style={{ backgroundSize: '100% 4px', animation: 'scanlines 3s linear infinite' }}>
            </div>
          </div>
          
          <Suspense fallback={
            <div className="flex items-center justify-center h-full bg-black">
              <div className="animate-pulse text-accent-teal text-lg">Loading 3D Model...</div>
            </div>
          }>
            <Canvas 
              camera={{ position: [12, 8, 12], fov: 50 }}
              style={{ background: '#000000' }}
            >
              <ambientLight intensity={0.3} />
              <pointLight position={[15, 15, 15]} intensity={0.6} color="#ffffff" />
              <pointLight position={[-10, 10, -10]} intensity={0.3} color="#ffffff" />
              <SimulatorCapsule />
              <OrbitControls 
                enablePan={false} 
                minDistance={8} 
                maxDistance={25}
                autoRotate
                autoRotateSpeed={0.8}
                enableDamping
                dampingFactor={0.05}
                maxPolarAngle={Math.PI * 0.75}
                minPolarAngle={Math.PI * 0.15}
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
