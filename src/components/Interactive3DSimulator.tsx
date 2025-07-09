
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SimulatorModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const capsuleRef = useRef<THREE.Group>(null);
  const legsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
    if (legsRef.current) {
      legsRef.current.children.forEach((leg, index) => {
        leg.rotation.z = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.02;
      });
    }
  });

  // Create motion legs in hexapod configuration
  const createMotionLeg = (angle: number, index: number) => {
    const baseRadius = 3.5;
    const topRadius = 2.2;
    const legHeight = 2.5;
    
    const baseX = Math.cos(angle) * baseRadius;
    const baseZ = Math.sin(angle) * baseRadius;
    const topX = Math.cos(angle) * topRadius;
    const topZ = Math.sin(angle) * topRadius;
    
    return (
      <group key={index}>
        {/* Lower leg segment */}
        <mesh position={[baseX, -1, baseZ]}>
          <cylinderGeometry args={[0.08, 0.12, legHeight]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Upper leg segment */}
        <mesh 
          position={[(baseX + topX) / 2, 1, (baseZ + topZ) / 2]}
          rotation={[0, 0, Math.atan2(topZ - baseZ, topX - baseX) * 0.05]}
        >
          <cylinderGeometry args={[0.1, 0.08, 1.8]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Joints */}
        <mesh position={[baseX, -2.3, baseZ]}>
          <sphereGeometry args={[0.15]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        <mesh position={[topX, 2, topZ]}>
          <sphereGeometry args={[0.12]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Ground pad */}
        <mesh position={[baseX, -2.8, baseZ]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
      </group>
    );
  };

  const legs = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    legs.push(createMotionLeg(angle, i));
  }

  return (
    <group ref={groupRef}>
      {/* Base platform */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.15]} />
        <meshBasicMaterial color="#ffffff" wireframe />
      </mesh>
      
      {/* Support rods */}
      {[0, Math.PI/2, Math.PI, 3*Math.PI/2].map((angle, i) => (
        <mesh key={i} position={[Math.cos(angle) * 1.5, 2.8, Math.sin(angle) * 1.5]}>
          <cylinderGeometry args={[0.05, 0.05, 1.6]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
      ))}
      
      {/* Motion legs */}
      <group ref={legsRef}>
        {legs}
      </group>
      
      {/* Main capsule */}
      <group ref={capsuleRef} position={[0, 4.5, 0]}>
        {/* Main capsule body */}
        <mesh>
          <capsuleGeometry args={[1.2, 2.4, 4, 8]} />
          <meshBasicMaterial color="#ffffff" wireframe />
        </mesh>
        
        {/* Window outline */}
        <mesh position={[1.5, 0.3, 0]}>
          <boxGeometry args={[0.02, 0.8, 2.5]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        
        {/* Door outline */}
        <mesh position={[-1.2, -0.5, 1.8]}>
          <boxGeometry args={[0.02, 1.5, 0.8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        
        {/* Grid lines on capsule */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={`grid-${i}`} position={[0, -1 + i * 0.3, 1.85]}>
            <boxGeometry args={[2.4, 0.01, 0.01]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        ))}
        
        {/* "60" marking */}
        <group position={[0, 0, 1.9]}>
          {/* "6" */}
          <mesh position={[-0.3, -0.2, 0]}>
            <torusGeometry args={[0.15, 0.03, 8, 16, Math.PI]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.03, 0.03, 0.3]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          <mesh position={[-0.42, -0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.03, 0.03, 0.24]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
          
          {/* "0" */}
          <mesh position={[0.3, -0.1, 0]}>
            <torusGeometry args={[0.15, 0.03, 8, 16]} />
            <meshBasicMaterial color="#ffffff" wireframe />
          </mesh>
        </group>
      </group>
    </group>
  );
};

const Interactive3DSimulator = () => {
  return (
    <div className="h-[500px] w-full rounded-lg border border-accent-teal/30 overflow-hidden bg-black">
      <Suspense fallback={
        <div className="flex items-center justify-center h-full bg-black">
          <div className="text-accent-teal">Loading 3D Model...</div>
        </div>
      }>
        <Canvas 
          camera={{ position: [8, 6, 8], fov: 50 }}
          style={{ background: '#000000' }}
        >
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.4} color="#ffffff" />
          <pointLight position={[-5, 5, -5]} intensity={0.2} color="#2e9896" />
          
          <SimulatorModel />
          
          <OrbitControls 
            enablePan={false}
            minDistance={6}
            maxDistance={20}
            autoRotate
            autoRotateSpeed={1}
            enableDamping
            dampingFactor={0.05}
            maxPolarAngle={Math.PI * 0.75}
            minPolarAngle={Math.PI * 0.2}
          />
        </Canvas>
      </Suspense>
      
      <div className="absolute bottom-2 right-2 text-xs text-accent-teal/70">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Interactive3DSimulator;
