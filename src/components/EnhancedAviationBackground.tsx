
import React, { useEffect, useState } from 'react';

const EnhancedAviationBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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
      {/* Dynamic Navigation Grid */}
      <div className="absolute inset-0 aviation-grid opacity-30"></div>
      
      {/* Advanced Flight Path Network */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <linearGradient id="flightGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'transparent'}} />
              <stop offset="30%" style={{stopColor: '#00AEEF', stopOpacity: 0.8}} />
              <stop offset="70%" style={{stopColor: '#42FF90', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: 'transparent'}} />
            </linearGradient>
            
            <linearGradient id="flightGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: 'transparent'}} />
              <stop offset="40%" style={{stopColor: '#FFB000', stopOpacity: 0.7}} />
              <stop offset="100%" style={{stopColor: 'transparent'}} />
            </linearGradient>
          </defs>
          
          {/* Primary Flight Corridors */}
          <path
            d="M 0 300 Q 480 150 960 280 T 1920 200"
            fill="none"
            stroke="url(#flightGradient1)"
            strokeWidth="2"
            strokeDasharray="12,8"
            filter="url(#glow)"
            className="animate-flight-path"
          />
          
          <path
            d="M 0 700 Q 640 550 1280 650 T 1920 750"
            fill="none"
            stroke="url(#flightGradient2)"
            strokeWidth="1.5"
            strokeDasharray="8,12"
            filter="url(#glow)"
            className="animate-flight-path"
            style={{ animationDelay: '2s', animationDuration: '15s' }}
          />
          
          <path
            d="M 0 500 Q 320 350 960 500 Q 1440 650 1920 450"
            fill="none"
            stroke="#42FF90"
            strokeWidth="1"
            strokeOpacity="0.6"
            strokeDasharray="6,10"
            filter="url(#glow)"
            className="animate-flight-path"
            style={{ animationDelay: '4s', animationDuration: '18s' }}
          />
          
          {/* Waypoint Markers */}
          {[
            { x: 240, y: 225, delay: 0 },
            { x: 720, y: 265, delay: 1 },
            { x: 1200, y: 215, delay: 2 },
            { x: 480, y: 625, delay: 3 },
            { x: 960, y: 650, delay: 4 },
            { x: 1440, y: 700, delay: 5 }
          ].map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#00AEEF"
                className="animate-system-pulse"
                style={{ animationDelay: `${point.delay}s` }}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="8"
                fill="none"
                stroke="#00AEEF"
                strokeWidth="1"
                opacity="0.4"
                className="animate-system-pulse"
                style={{ animationDelay: `${point.delay + 0.5}s` }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Compass Rose System */}
      <div className="absolute top-8 left-8">
        <div className="relative w-40 h-40">
          <div 
            className="absolute inset-0 border-2 border-electric-blue/30 rounded-full glass-hud"
            style={{ transform: `rotate(${scrollY * 0.05}deg)` }}
          >
            {/* Compass Directions */}
            {['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'].map((direction, index) => {
              const angle = index * 45;
              return (
                <div
                  key={direction}
                  className="absolute tech-mono text-electric-blue font-bold text-xs"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-60px) rotate(-${angle}deg)`
                  }}
                >
                  {direction}
                </div>
              );
            })}
            
            {/* Compass Needle */}
            <div className="absolute top-1/2 left-1/2 w-1 h-16 bg-gradient-to-t from-transparent via-radar-green to-radar-green -translate-x-1/2 -translate-y-1/2 origin-bottom">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-radar-green rounded-full -translate-x-1/2 animate-system-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Radar System */}
      <div className="absolute top-1/3 right-1/4">
        <div className="relative w-48 h-48">
          {/* Radar Rings */}
          {[120, 90, 60, 30].map((size, index) => (
            <div
              key={index}
              className="absolute border border-radar-green/20 rounded-full animate-system-pulse"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 0.3}s`,
                animationDuration: '3s'
              }}
            />
          ))}
          
          {/* Radar Sweep */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-radar-green/80 via-radar-green/40 to-transparent origin-left animate-radar-sweep"></div>
          </div>
          
          {/* Radar Blips */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-radar-green rounded-full animate-system-pulse"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: `${30 + Math.random() * 40}%`,
                animationDelay: `${i * 0.4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Altitude & Speed Displays */}
      <div className="absolute right-8 top-1/4 bottom-1/4 w-20 glass-cockpit border-l-2 border-electric-blue/40">
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-0 top-2 right-0 tech-mono text-electric-blue text-center text-xs">ALT</div>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 w-full h-8 flex items-center justify-center border-b border-electric-blue/20"
              style={{
                top: `${(i + 2) * 6}%`,
                transform: `translateY(${scrollY * 0.08}px)`
              }}
            >
              <span className="tech-mono text-electric-blue/70 text-xs">
                {String((15 - i) * 1000).padStart(5, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-8 top-1/4 bottom-1/4 w-20 glass-cockpit border-r-2 border-radar-green/40">
        <div className="relative h-full overflow-hidden">
          <div className="absolute left-0 top-2 right-0 tech-mono text-radar-green text-center text-xs">SPD</div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 w-full h-8 flex items-center justify-center border-b border-radar-green/20"
              style={{
                top: `${(i + 2) * 7}%`,
                transform: `translateY(${-scrollY * 0.04}px)`
              }}
            >
              <span className="tech-mono text-radar-green/70 text-xs">
                {String((12 - i) * 25).padStart(3, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* System Status Bar */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="glass-cockpit border border-electric-blue/30 rounded-lg p-4">
          <div className="grid grid-cols-6 gap-4 tech-mono text-xs">
            {[
              { label: 'NAV', value: 'ACTIVE', color: 'text-radar-green' },
              { label: 'ALT', value: '15000', color: 'text-electric-blue' },
              { label: 'SPD', value: '250', color: 'text-electric-blue' },
              { label: 'HDG', value: '090°', color: 'text-cockpit-amber' },
              { label: 'SYS', value: 'NORM', color: 'text-radar-green' },
              { label: 'COM', value: 'ONLINE', color: 'text-electric-blue' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className={`${item.color} font-bold`}>{item.label}</div>
                <div className="text-white/80 mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Atmospheric Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-electric-blue/5 to-transparent"></div>
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,174,239,0.05) 40%, transparent 70%)`
        }}
      ></div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-60 animate-system-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedAviationBackground;
