
import React, { useEffect, useState } from 'react';

const AviationAnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Aviation Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(46, 152, 150, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 152, 150, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(224, 253, 250, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(224, 253, 250, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
          animation: 'aviationGridMove 30s linear infinite'
        }}
      />

      {/* Flight Path Network */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="pathGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <linearGradient id="flightPath1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'transparent'}} />
              <stop offset="30%" style={{stopColor: '#2e9896', stopOpacity: 0.8}} />
              <stop offset="70%" style={{stopColor: '#e0fdfa', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: 'transparent'}} />
            </linearGradient>
            
            <linearGradient id="flightPath2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'transparent'}} />
              <stop offset="40%" style={{stopColor: '#ffffff', stopOpacity: 0.4}} />
              <stop offset="100%" style={{stopColor: 'transparent'}} />
            </linearGradient>
          </defs>
          
          {/* Primary Flight Corridors */}
          <path
            d="M 0 200 Q 480 100 960 250 T 1920 180"
            fill="none"
            stroke="url(#flightPath1)"
            strokeWidth="2"
            strokeDasharray="15,10"
            filter="url(#pathGlow)"
            className="animate-flightPath"
          />
          
          <path
            d="M 0 600 Q 640 450 1280 580 T 1920 650"
            fill="none"
            stroke="url(#flightPath2)"
            strokeWidth="1.5"
            strokeDasharray="10,15"
            filter="url(#pathGlow)"
            className="animate-flightPathReverse"
          />
          
          <path
            d="M 0 400 Q 320 250 960 420 Q 1440 580 1920 350"
            fill="none"
            stroke="#e0fdfa"
            strokeWidth="1"
            strokeOpacity="0.5"
            strokeDasharray="8,12"
            filter="url(#pathGlow)"
            className="animate-flightPath"
            style={{ animationDelay: '3s', animationDuration: '25s' }}
          />
          
          {/* Navigation Waypoints */}
          {[
            { x: 240, y: 175, delay: 0 },
            { x: 720, y: 235, delay: 1.5 },
            { x: 1200, y: 190, delay: 3 },
            { x: 480, y: 570, delay: 4.5 },
            { x: 960, y: 580, delay: 6 },
            { x: 1440, y: 630, delay: 7.5 }
          ].map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill="#2e9896"
                className="animate-waypointPulse"
                style={{ animationDelay: `${point.delay}s` }}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="none"
                stroke="#2e9896"
                strokeWidth="1"
                opacity="0.6"
                className="animate-waypointRing"
                style={{ animationDelay: `${point.delay + 0.5}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Radar System */}
      <div className="absolute top-1/4 right-1/5">
        <div className="relative w-64 h-64">
          {/* Radar Rings */}
          {[200, 150, 100, 50].map((size, index) => (
            <div
              key={index}
              className="absolute border border-white/20 rounded-full animate-radarPulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 0.4}s`,
                animationDuration: '4s'
              }}
            />
          ))}
          
          {/* Radar Sweep */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/80 via-white/40 to-transparent origin-left animate-radarSweep"
              style={{ transform: 'translate(-50%, -50%)' }}
            />
          </div>
          
          {/* Radar Blips */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full animate-radarBlip"
              style={{
                left: `${35 + Math.random() * 30}%`,
                top: `${35 + Math.random() * 30}%`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute top-8 left-8">
        <div className="relative w-48 h-48">
          <div 
            className="absolute inset-0 border-2 border-white/30 rounded-full backdrop-blur-sm bg-black/10"
            style={{ 
              transform: `rotate(${scrollY * 0.08}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Compass Directions */}
            {['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'].map((direction, index) => {
              const angle = index * 45;
              return (
                <div
                  key={direction}
                  className="absolute text-white/70 text-xs font-mono font-bold"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`
                  }}
                >
                  {direction}
                </div>
              );
            })}
            
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Altitude Display */}
      <div className="absolute right-8 top-1/4 bottom-1/4 w-16 backdrop-blur-sm bg-black/20 border-l-2 border-white/30">
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-0 top-2 right-0 text-white/60 text-center text-xs font-mono">ALT</div>
          {[...Array(20)].map((_, i) => {
            const altitude = (20 - i) * 500;
            return (
              <div
                key={i}
                className="absolute left-0 w-full h-6 flex items-center justify-center border-b border-white/10 text-xs font-mono text-white/50"
                style={{
                  top: `${(i + 3) * 4.5}%`,
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
                {String(altitude).padStart(5, '0')}
              </div>
            );
          })}
        </div>
      </div>

      {/* Speed Display */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-16 backdrop-blur-sm bg-black/20 border-r-2 border-white/30">
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-0 top-2 right-0 text-white/60 text-center text-xs font-mono">SPD</div>
          {[...Array(15)].map((_, i) => {
            const speed = (15 - i) * 20;
            return (
              <div
                key={i}
                className="absolute left-0 w-full h-6 flex items-center justify-center border-b border-white/10 text-xs font-mono text-white/50"
                style={{
                  top: `${(i + 3) * 6}%`,
                  transform: `translateY(${-scrollY * 0.03}px)`
                }}
              >
                {String(speed).padStart(3, '0')}
              </div>
            );
          })}
        </div>
      </div>

      {/* Status Bar */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="backdrop-blur-sm bg-black/20 border border-white/20 rounded-lg p-3">
          <div className="grid grid-cols-5 gap-4 text-xs font-mono">
            {[
              { label: 'NAV', value: 'ACTIVE', color: 'text-green-400' },
              { label: 'ALT', value: '15000', color: 'text-blue-400' },
              { label: 'SPD', value: '250', color: 'text-blue-400' },
              { label: 'HDG', value: '090°', color: 'text-yellow-400' },
              { label: 'SYS', value: 'NORM', color: 'text-green-400' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`${item.color} font-bold animate-statusBlink`}>{item.label}</div>
                <div className="text-white/70 mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Atmospheric Effects */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent 0%, rgba(46,152,150,0.05) 40%, transparent 70%)`
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-floatingParticle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AviationAnimatedBackground;
