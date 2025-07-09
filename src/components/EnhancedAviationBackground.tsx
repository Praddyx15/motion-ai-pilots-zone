import React, { useEffect, useState } from 'react';

const EnhancedAviationBackground = () => {
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
      {/* Enhanced Dynamic Aviation Grid */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(46, 152, 150, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 152, 150, 0.4) 1px, transparent 1px),
            linear-gradient(rgba(224, 253, 250, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(224, 253, 250, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 25% 25%, rgba(46, 152, 150, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(224, 253, 250, 0.08) 0%, transparent 50%)
          `,
          backgroundSize: '100px 100px, 100px 100px, 25px 25px, 25px 25px, 800px 800px, 1200px 1200px',
          transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.04}px)`,
          animation: 'aviationGridMove 40s linear infinite'
        }}
      />

      {/* Enhanced Flight Path Network */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="enhancedGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feGaussianBlur stdDeviation="6" result="widerBlur"/>
              <feMerge>
                <feMergeNode in="widerBlur"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <linearGradient id="primaryPath" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'transparent'}} />
              <stop offset="20%" style={{stopColor: '#2e9896', stopOpacity: 0.3}} />
              <stop offset="50%" style={{stopColor: '#2e9896', stopOpacity: 1}} />
              <stop offset="80%" style={{stopColor: '#e0fdfa', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: 'transparent'}} />
            </linearGradient>
            
            <linearGradient id="secondaryPath" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'transparent'}} />
              <stop offset="30%" style={{stopColor: '#ffffff', stopOpacity: 0.2}} />
              <stop offset="60%" style={{stopColor: '#ffffff', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: 'transparent'}} />
            </linearGradient>

            <linearGradient id="tertiaryPath" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'transparent'}} />
              <stop offset="25%" style={{stopColor: '#e0fdfa', stopOpacity: 0.3}} />
              <stop offset="50%" style={{stopColor: '#e0fdfa', stopOpacity: 0.7}} />
              <stop offset="75%" style={{stopColor: '#2e9896', stopOpacity: 0.5}} />
              <stop offset="100%" style={{stopColor: 'transparent'}} />
            </linearGradient>
          </defs>
          
          {/* Primary Flight Corridors */}
          <path
            d="M 0 180 Q 400 80 800 200 Q 1200 320 1600 160 Q 1760 120 1920 140"
            fill="none"
            stroke="url(#primaryPath)"
            strokeWidth="3"
            strokeDasharray="20,8"
            filter="url(#enhancedGlow)"
            className="animate-flightPath"
            style={{ animationDuration: '25s' }}
          />
          
          <path
            d="M 0 650 Q 480 500 960 620 Q 1440 740 1920 680"
            fill="none"
            stroke="url(#secondaryPath)"
            strokeWidth="2"
            strokeDasharray="12,6"
            filter="url(#enhancedGlow)"
            className="animate-flightPathReverse"
            style={{ animationDuration: '30s' }}
          />
          
          <path
            d="M 0 400 Q 240 280 480 380 Q 720 480 960 400 Q 1200 320 1440 420 Q 1680 520 1920 380"
            fill="none"
            stroke="url(#tertiaryPath)"
            strokeWidth="1.5"
            strokeDasharray="8,4"
            filter="url(#enhancedGlow)"
            className="animate-flightPath"
            style={{ animationDelay: '5s', animationDuration: '35s' }}
          />
          
          {/* Intersecting paths */}
          <path
            d="M 1920 300 Q 1600 450 1200 350 Q 800 250 400 400 Q 200 450 0 380"
            fill="none"
            stroke="url(#secondaryPath)"
            strokeWidth="1"
            strokeDasharray="6,8"
            filter="url(#enhancedGlow)"
            className="animate-flightPathReverse"
            style={{ animationDelay: '8s', animationDuration: '28s' }}
          />
          
          {/* Navigation Waypoints with enhanced design */}
          {[
            { x: 200, y: 160, delay: 0, size: 'large' },
            { x: 600, y: 180, delay: 1.5, size: 'medium' },
            { x: 1000, y: 220, delay: 3, size: 'large' },
            { x: 1400, y: 140, delay: 4.5, size: 'small' },
            { x: 1800, y: 160, delay: 6, size: 'medium' },
            { x: 320, y: 620, delay: 7.5, size: 'small' },
            { x: 720, y: 640, delay: 9, size: 'large' },
            { x: 1120, y: 620, delay: 10.5, size: 'medium' },
            { x: 1520, y: 700, delay: 12, size: 'small' }
          ].map((point, index) => {
            const baseRadius = point.size === 'large' ? 4 : point.size === 'medium' ? 3 : 2;
            return (
              <g key={index}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={baseRadius}
                  fill="#2e9896"
                  className="animate-waypointPulse"
                  style={{ animationDelay: `${point.delay}s` }}
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={baseRadius * 2}
                  fill="none"
                  stroke="#2e9896"
                  strokeWidth="1"
                  opacity="0.6"
                  className="animate-waypointRing"
                  style={{ animationDelay: `${point.delay + 0.5}s` }}
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={baseRadius * 3}
                  fill="none"
                  stroke="#e0fdfa"
                  strokeWidth="0.5"
                  opacity="0.3"
                  className="animate-waypointRing"
                  style={{ animationDelay: `${point.delay + 1}s` }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Enhanced Radar System */}
      <div className="absolute top-1/5 right-1/6">
        <div className="relative w-80 h-80">
          {/* Radar Rings with enhanced animation */}
          {[240, 180, 120, 60].map((size, index) => (
            <div
              key={index}
              className="absolute border border-white/15 rounded-full animate-radarPulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 0.5}s`,
                animationDuration: '5s',
                borderColor: index % 2 === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(46,152,150,0.15)'
              }}
            />
          ))}
          
          {/* Radar Sweep with glow */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="absolute top-1/2 left-1/2 w-full h-1 origin-left animate-radarSweep"
              style={{ 
                transform: 'translate(-50%, -50%)',
                background: 'linear-gradient(90deg, rgba(46,152,150,0.8) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 10px rgba(46,152,150,0.5)'
              }}
            />
          </div>
          
          {/* Enhanced Radar Blips */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-radarBlip"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: `${30 + Math.random() * 40}%`,
                animationDelay: `${i * 0.6}s`,
                boxShadow: '0 0 6px rgba(255,255,255,0.8)',
                opacity: 0.7 + Math.random() * 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced HUD Compass */}
      <div className="absolute top-12 left-12">
        <div className="relative w-56 h-56">
          <div 
            className="absolute inset-0 border-2 border-white/20 rounded-full backdrop-blur-sm bg-black/10"
            style={{ 
              transform: `rotate(${scrollY * 0.05}deg)`,
              transition: 'transform 0.1s ease-out',
              boxShadow: 'inset 0 0 20px rgba(46,152,150,0.1), 0 0 30px rgba(46,152,150,0.1)'
            }}
          >
            {/* Enhanced Compass Directions */}
            {['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'].map((direction, index) => {
              const angle = index * 45;
              const isCardinal = index % 2 === 0;
              return (
                <div
                  key={direction}
                  className={`absolute text-white/80 font-mono font-bold ${isCardinal ? 'text-sm' : 'text-xs'}`}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-90px) rotate(-${angle}deg)`,
                    textShadow: '0 0 8px rgba(255,255,255,0.5)'
                  }}
                >
                  {direction}
                </div>
              );
            })}
            
            {/* Enhanced Center Elements */}
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" 
                 style={{ boxShadow: '0 0 10px rgba(255,255,255,0.8)' }} />
            
            {/* Compass Needle */}
            <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-t from-transparent via-white to-white transform -translate-x-1/2 -translate-y-1/2 origin-bottom"
                 style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.6))' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Altitude & Speed Displays */}
      <div className="absolute right-8 top-1/4 bottom-1/4 w-24 backdrop-blur-lg bg-black/20 border-l-2 border-white/30 rounded-l-lg">
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-0 top-3 right-0 text-white/70 text-center text-xs font-mono font-bold">ALTITUDE</div>
          {[...Array(20)].map((_, i) => {
            const altitude = (20 - i) * 500;
            return (
              <div
                key={i}
                className="absolute left-0 w-full h-8 flex items-center justify-center border-b border-white/10 text-xs font-mono text-white/60"
                style={{
                  top: `${(i + 4) * 4.3}%`,
                  transform: `translateY(${scrollY * 0.08}px)`,
                  fontSize: i % 2 === 0 ? '11px' : '9px',
                  fontWeight: i % 2 === 0 ? 'bold' : 'normal'
                }}
              >
                {String(altitude).padStart(5, '0')}
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute left-8 top-1/4 bottom-1/4 w-24 backdrop-blur-lg bg-black/20 border-r-2 border-white/30 rounded-r-lg">
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-0 top-3 right-0 text-white/70 text-center text-xs font-mono font-bold">SPEED</div>
          {[...Array(18)].map((_, i) => {
            const speed = (18 - i) * 15;
            return (
              <div
                key={i}
                className="absolute left-0 w-full h-8 flex items-center justify-center border-b border-white/10 text-xs font-mono text-white/60"
                style={{
                  top: `${(i + 4) * 5}%`,
                  transform: `translateY(${-scrollY * 0.05}px)`,
                  fontSize: i % 2 === 0 ? '11px' : '9px',
                  fontWeight: i % 2 === 0 ? 'bold' : 'normal'
                }}
              >
                {String(speed).padStart(3, '0')}
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Status Bar */}
      <div className="absolute bottom-6 left-8 right-8">
        <div className="backdrop-blur-lg bg-black/25 border border-white/20 rounded-xl p-4 shadow-2xl">
          <div className="grid grid-cols-6 gap-6 text-xs font-mono">
            {[
              { label: 'NAV', value: 'ACTIVE', color: 'text-green-400', status: 'online' },
              { label: 'ALT', value: '15000', color: 'text-blue-400', status: 'stable' },
              { label: 'SPD', value: '250', color: 'text-blue-400', status: 'cruise' },
              { label: 'HDG', value: '090°', color: 'text-yellow-400', status: 'locked' },
              { label: 'SYS', value: 'NORM', color: 'text-green-400', status: 'optimal' },
              { label: 'COM', value: 'ONLINE', color: 'text-blue-400', status: 'clear' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`${item.color} font-bold animate-statusBlink flex items-center justify-center space-x-1`}>
                  <div className={`w-2 h-2 rounded-full ${item.status === 'online' || item.status === 'optimal' ? 'bg-green-400' : 'bg-blue-400'} animate-pulse`} />
                  <span>{item.label}</span>
                </div>
                <div className="text-white/80 mt-1 font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Atmospheric Effects */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(46,152,150,0.08) 0%, transparent 50%)`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent" />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-floatingParticle"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: Math.random() > 0.5 ? 'rgba(255,255,255,0.4)' : 'rgba(46,152,150,0.6)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              boxShadow: '0 0 4px rgba(255,255,255,0.3)'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedAviationBackground;