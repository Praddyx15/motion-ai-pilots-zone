
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TimelineBox = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Timeline3D = () => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
  
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      {colors.map((color, index) => (
        <TimelineBox
          key={index}
          position={[(index - 1.5) * 1.5, 0, 0]}
          color={color}
        />
      ))}
    </Canvas>
  );
};

const About3D = () => {
  const timelineData = [
    { year: '2018', title: 'Founded', color: '#3b82f6' },
    { year: '2020', title: 'DGCA Certified', color: '#10b981' },
    { year: '2022', title: 'AI Integration', color: '#f59e0b' },
    { year: '2024', title: 'Global Expansion', color: '#8b5cf6' }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6 fade-in">
            <span className="text-primary-blue">Our</span> Journey
          </h2>
          <p className="body-text text-gray-300 max-w-2xl mx-auto fade-in">
            Building the future of aviation training through innovation and precision engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Timeline */}
          <div className="h-96 slide-in-left">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <div className="animate-pulse text-primary-blue">Loading...</div>
              </div>
            }>
              <Timeline3D />
            </Suspense>
          </div>

          {/* Content */}
          <div className="space-y-8 slide-in-right">
            {timelineData.map((item, index) => (
              <div key={item.year} className="glass-panel p-6 hover-lift">
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div>
                    <h3 className="heading-tertiary text-white">{item.year}</h3>
                    <p className="body-small text-gray-300">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3D;
