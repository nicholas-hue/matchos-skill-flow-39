import React from 'react';

interface IsometricHiringIconProps {
  className?: string;
  size?: number;
}

const IsometricHiringIcon: React.FC<IsometricHiringIconProps> = ({ 
  className = "", 
  size = 400 
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="drop-shadow-lg"
      >
        <defs>
          {/* Clay-style gradients */}
          <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 40%, 98%)" />
            <stop offset="100%" stopColor="hsl(210, 40%, 94%)" />
          </linearGradient>
          
          <linearGradient id="coralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(356, 75%, 65%)" />
            <stop offset="100%" stopColor="hsl(356, 75%, 55%)" />
          </linearGradient>
          
          <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(158, 85%, 45%)" />
            <stop offset="100%" stopColor="hsl(158, 85%, 35%)" />
          </linearGradient>
          
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(262, 80%, 70%)" />
            <stop offset="100%" stopColor="hsl(262, 80%, 60%)" />
          </linearGradient>
          
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(31, 85%, 65%)" />
            <stop offset="100%" stopColor="hsl(31, 85%, 55%)" />
          </linearGradient>
          
          <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 20%, 25%)" />
            <stop offset="100%" stopColor="hsl(210, 20%, 15%)" />
          </linearGradient>

          {/* Soft shadow filter */}
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="4" result="offset"/>
            <feFlood floodColor="rgba(0,0,0,0.1)"/>
            <feComposite in2="offset" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main isometric platform */}
        <g filter="url(#softShadow)">
          <path 
            d="M 60 280 L 200 200 L 340 280 L 340 320 L 200 400 L 60 320 Z" 
            fill="url(#platformGradient)" 
            stroke="hsl(210, 40%, 85%)" 
            strokeWidth="2"
          />
          <path 
            d="M 60 280 L 200 200 L 340 280 L 200 240 Z" 
            fill="hsl(210, 40%, 96%)" 
            stroke="hsl(210, 40%, 85%)" 
            strokeWidth="2"
          />
        </g>

        {/* HR Professional Side - Left */}
        <g transform="translate(80, 180)">
          {/* Desk */}
          <path 
            d="M 0 40 L 50 20 L 50 60 L 0 80 Z" 
            fill="url(#tealGradient)" 
            filter="url(#softShadow)"
          />
          
          {/* Computer Screen */}
          <rect 
            x="15" y="15" width="20" height="15" rx="2" 
            fill="url(#screenGradient)" 
            filter="url(#softShadow)"
          />
          <rect 
            x="17" y="17" width="16" height="11" rx="1" 
            fill="hsl(210, 100%, 95%)"
          />
          
          {/* Screen content lines */}
          <rect x="18" y="19" width="10" height="1.5" fill="url(#coralGradient)" rx="0.5"/>
          <rect x="18" y="21.5" width="14" height="1" fill="hsl(210, 20%, 80%)" rx="0.5"/>
          <rect x="18" y="24" width="8" height="1" fill="hsl(210, 20%, 80%)" rx="0.5"/>
          
          {/* HR Person */}
          <circle cx="10" cy="10" r="6" fill="hsl(31, 60%, 80%)" filter="url(#softShadow)"/>
          <path 
            d="M 4 12 Q 10 8 16 12 L 16 25 Q 10 22 4 25 Z" 
            fill="url(#purpleGradient)"
          />
        </g>

        {/* Applicant Side - Right */}
        <g transform="translate(260, 180)">
          {/* Phone */}
          <rect 
            x="20" y="25" width="12" height="20" rx="3" 
            fill="url(#screenGradient)" 
            filter="url(#softShadow)"
          />
          <rect 
            x="21" y="27" width="10" height="16" rx="2" 
            fill="hsl(210, 100%, 95%)"
          />
          
          {/* Phone notification */}
          <circle cx="29" cy="22" r="3" fill="url(#coralGradient)"/>
          <text x="29" y="25" textAnchor="middle" fontSize="4" fill="white">!</text>
          
          {/* Applicant Person */}
          <circle cx="15" cy="15" r="6" fill="hsl(210, 40%, 75%)" filter="url(#softShadow)"/>
          <path 
            d="M 9 17 Q 15 13 21 17 L 21 30 Q 15 27 9 30 Z" 
            fill="url(#tealGradient)"
          />
        </g>

        {/* Central Connection Pipeline */}
        <g transform="translate(200, 200)">
          <ellipse cx="0" cy="20" rx="30" ry="8" fill="url(#orangeGradient)" opacity="0.7"/>
          
          {/* Data flow indicators */}
          <circle cx="-15" cy="18" r="2" fill="url(#coralGradient)"/>
          <circle cx="0" cy="16" r="2" fill="url(#purpleGradient)"/>
          <circle cx="15" cy="18" r="2" fill="url(#tealGradient)"/>
        </g>

        {/* Floating Elements */}
        {/* Resume/Document */}
        <g transform="translate(120, 140)">
          <rect 
            x="0" y="0" width="15" height="20" rx="2" 
            fill="hsl(210, 100%, 98%)" 
            stroke="hsl(210, 20%, 80%)" 
            strokeWidth="1"
            filter="url(#softShadow)"
          />
          <rect x="2" y="3" width="11" height="1" fill="hsl(210, 20%, 70%)" rx="0.5"/>
          <rect x="2" y="6" width="8" height="1" fill="hsl(210, 20%, 70%)" rx="0.5"/>
          <rect x="2" y="9" width="10" height="1" fill="hsl(210, 20%, 70%)" rx="0.5"/>
        </g>

        {/* Skill Badge */}
        <g transform="translate(280, 140)">
          <circle cx="8" cy="8" r="8" fill="url(#purpleGradient)" filter="url(#softShadow)"/>
          <text x="8" y="11" textAnchor="middle" fontSize="8" fill="white">✓</text>
        </g>

        {/* Chat Bubble */}
        <g transform="translate(180, 130)">
          <ellipse cx="10" cy="8" rx="12" ry="8" fill="url(#coralGradient)" filter="url(#softShadow)"/>
          <path d="M 8 14 L 12 18 L 16 14" fill="url(#coralGradient)"/>
          <circle cx="6" cy="8" r="1.5" fill="white"/>
          <circle cx="10" cy="8" r="1.5" fill="white"/>
          <circle cx="14" cy="8" r="1.5" fill="white"/>
        </g>

        {/* Background Buildings */}
        <g transform="translate(50, 80)" opacity="0.3">
          <rect x="0" y="20" width="15" height="30" fill="url(#tealGradient)"/>
          <rect x="20" y="10" width="12" height="40" fill="url(#purpleGradient)"/>
          <rect x="35" y="25" width="10" height="25" fill="url(#orangeGradient)"/>
        </g>

        <g transform="translate(300, 90)" opacity="0.3">
          <rect x="0" y="15" width="12" height="35" fill="url(#coralGradient)"/>
          <rect x="15" y="25" width="10" height="25" fill="url(#tealGradient)"/>
          <rect x="28" y="10" width="14" height="40" fill="url(#purpleGradient)"/>
        </g>

        {/* Chart/Analytics Icon */}
        <g transform="translate(100, 240)" opacity="0.4">
          <rect x="0" y="10" width="3" height="8" fill="url(#coralGradient)" rx="1"/>
          <rect x="5" y="6" width="3" height="12" fill="url(#tealGradient)" rx="1"/>
          <rect x="10" y="3" width="3" height="15" fill="url(#purpleGradient)" rx="1"/>
          <rect x="15" y="8" width="3" height="10" fill="url(#orangeGradient)" rx="1"/>
        </g>

        {/* Folder Icon */}
        <g transform="translate(280, 240)" opacity="0.4">
          <path 
            d="M 0 5 L 6 5 L 8 2 L 18 2 L 18 15 L 0 15 Z" 
            fill="url(#orangeGradient)" 
            rx="1"
          />
          <rect x="0" y="7" width="18" height="8" fill="url(#tealGradient)" rx="1"/>
        </g>
      </svg>
    </div>
  );
};

export default IsometricHiringIcon;