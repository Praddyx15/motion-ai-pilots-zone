import React, { useEffect, useState } from 'react';

const AviationBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Grid System */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          {/* Primary Grid */}
          <defs>
            <pattern id="primaryGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(180, 55%, 36%)" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <pattern id="secondaryGrid" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M 200 0 L 0 0 0 200" fill="none" stroke="hsl(200, 100%, 50%)" strokeWidth="1" opacity="0.2"/>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#primaryGrid)" />
          <rect width="100%" height="100%" fill="url(#secondaryGrid)" />
        </svg>
      </div>

      {/* Flight Path Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          {/* Animated Flight Paths */}
          <path
            d="M 0 200 Q 480 100 960 300 T 1920 200"
            fill="none"
            stroke="hsl(120, 100%, 50%)"
            strokeWidth="2"
            opacity="0.6"
            strokeDasharray="10,20"
            className="animate-dash-flow"
          />
          <path
            d="M 0 800 Q 640 600 1280 700 T 1920 800"
            fill="none"
            stroke="hsl(45, 100%, 50%)"
            strokeWidth="1.5"
            opacity="0.4"
            strokeDasharray="15,25"
            className="animate-dash-flow-reverse"
          />
          <path
            d="M 0 500 Q 320 300 960 500 Q 1440 700 1920 400"
            fill="none"
            stroke="hsl(16, 100%, 50%)"
            strokeWidth="1"
            opacity="0.5"
            strokeDasharray="5,15"
            className="animate-dash-flow"
          />
        </svg>
      </div>

      {/* Radar Circles */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {[300, 200, 100].map((size, index) => (
            <div
              key={index}
              className={`absolute border border-teal-primary/20 rounded-full animate-radar-pulse`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 0.5}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Moving Waypoints */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-electric-blue rounded-full animate-waypoint-travel"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '12s'
            }}
          >
            <div className="absolute inset-0 bg-electric-blue rounded-full animate-ping opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Altitude Tape */}
      <div className="absolute right-8 top-1/4 bottom-1/4 w-16 backdrop-blur-sm bg-slate-900/60 border-l-2 border-teal-primary/40">
        <div className="relative h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 w-full h-8 flex items-center justify-center border-b border-slate-600/30"
              style={{
                top: `${i * 5}%`,
                transform: `translateY(${scrollY * 0.1}px)`
              }}
            >
              <span className="text-xs font-mono text-teal-primary/60">
                {String((20 - i) * 500).padStart(4, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Speed Tape */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-16 backdrop-blur-sm bg-slate-900/60 border-r-2 border-electric-blue/40">
        <div className="relative h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 w-full h-8 flex items-center justify-center border-b border-slate-600/30"
              style={{
                top: `${i * 6.67}%`,
                transform: `translateY(${-scrollY * 0.05}px)`
              }}
            >
              <span className="text-xs font-mono text-electric-blue/60">
                {String((15 - i) * 20).padStart(3, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Compass Rose */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="relative w-32 h-32">
          <div 
            className="absolute inset-0 border-2 border-cockpit-amber/40 rounded-full backdrop-blur-sm bg-slate-900/40"
            style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
          >
            {['N', 'E', 'S', 'W'].map((direction, index) => (
              <div
                key={direction}
                className="absolute text-xs font-mono text-cockpit-amber font-bold"
                style={{
                  top: index === 0 ? '4px' : index === 2 ? 'calc(100% - 16px)' : '50%',
                  left: index === 1 ? 'calc(100% - 12px)' : index === 3 ? '4px' : '50%',
                  transform: index % 2 === 0 ? 'translateX(-50%)' : 'translateY(-50%)'
                }}
              >
                {direction}
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cockpit-amber rounded-full"></div>
        </div>
      </div>

      {/* Data Streams */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="backdrop-blur-sm bg-slate-900/40 border border-teal-primary/30 rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4 text-xs font-mono">
            <div className="text-center">
              <div className="text-teal-primary">ALT</div>
              <div className="text-white font-bold">15,000</div>
            </div>
            <div className="text-center">
              <div className="text-electric-blue">SPD</div>
              <div className="text-white font-bold">250</div>
            </div>
            <div className="text-center">
              <div className="text-radar-green">HDG</div>
              <div className="text-white font-bold">090°</div>
            </div>
            <div className="text-center">
              <div className="text-cockpit-amber">SYS</div>
              <div className="text-white font-bold">OK</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/60"></div>
    </div>
  );
};

export default AviationBackground;