import React from 'react';

const IsometricHiringAnimation = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-to-br from-background to-muted rounded-2xl overflow-hidden">
      <svg 
        viewBox="0 0 800 500" 
        className="w-full h-full max-w-4xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradients and Definitions */}
        <defs>
          {/* Platform Gradients */}
          <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--brand-coral-light))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--muted))" />
          </linearGradient>
          
          {/* HR Side Gradients */}
          <linearGradient id="hrDesk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(142 76% 25%)" />
          </linearGradient>
          
          <linearGradient id="hrScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(345 83% 35%)" />
          </linearGradient>
          
          {/* Applicant Side Gradients */}
          <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(250 84% 54%)" />
            <stop offset="100%" stopColor="hsl(250 84% 45%)" />
          </linearGradient>
          
          <linearGradient id="notificationGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--brand-orange))" />
            <stop offset="100%" stopColor="hsl(25 95% 45%)" />
          </linearGradient>
          
          {/* Connection Pipeline */}
          <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="50%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(250 84% 54%)" />
          </linearGradient>
          
          {/* Glow Effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Main Isometric Platform */}
        <g className="platform">
          <path 
            d="M100 350 L700 350 L750 300 L150 300 Z" 
            fill="url(#platformGradient)" 
            stroke="hsl(var(--border))" 
            strokeWidth="2"
          />
          <path 
            d="M700 350 L750 300 L750 200 L700 250 Z" 
            fill="hsl(var(--muted))" 
            stroke="hsl(var(--border))" 
            strokeWidth="1"
          />
        </g>

        {/* HR Professional Side (Left) */}
        <g className="hr-side">
          {/* HR Desk */}
          <path 
            d="M150 320 L350 320 L380 300 L180 300 Z" 
            fill="url(#hrDesk)" 
            stroke="hsl(142 76% 25%)" 
            strokeWidth="1"
          />
          <path 
            d="M350 320 L380 300 L380 280 L350 300 Z" 
            fill="hsl(142 76% 25%)" 
            stroke="hsl(142 76% 20%)" 
            strokeWidth="1"
          />
          
          {/* HR Computer Screen */}
          <rect 
            x="200" 
            y="250" 
            width="80" 
            height="50" 
            fill="url(#hrScreen)" 
            rx="4"
            className="screen"
          >
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
          </rect>
          
          {/* Screen Content (Scrolling) */}
          <g className="screen-content">
            <rect x="210" y="260" width="60" height="8" fill="hsl(var(--background))" rx="2">
              <animate attributeName="y" values="260;270;260" dur="4s" repeatCount="indefinite" />
            </rect>
            <rect x="210" y="275" width="45" height="6" fill="hsl(var(--background))" rx="1">
              <animate attributeName="y" values="275;285;275" dur="4.5s" repeatCount="indefinite" />
            </rect>
            <rect x="210" y="285" width="50" height="6" fill="hsl(var(--background))" rx="1">
              <animate attributeName="y" values="285;295;285" dur="5s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* HR Person */}
          <ellipse cx="240" cy="230" rx="15" ry="12" fill="hsl(25 95% 53%)" />
          <rect x="225" y="240" width="30" height="40" fill="hsl(var(--accent))" rx="15" />
          
          {/* Checkboxes Animation */}
          <g className="checkboxes">
            <rect x="320" y="260" width="8" height="8" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1">
              <animate attributeName="fill" values="hsl(var(--background));hsl(var(--accent));hsl(var(--background))" dur="6s" repeatCount="indefinite" />
            </rect>
            <rect x="320" y="275" width="8" height="8" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1">
              <animate attributeName="fill" values="hsl(var(--background));hsl(var(--accent));hsl(var(--background))" dur="6s" begin="2s" repeatCount="indefinite" />
            </rect>
            <rect x="320" y="290" width="8" height="8" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="1">
              <animate attributeName="fill" values="hsl(var(--background));hsl(var(--accent));hsl(var(--background))" dur="6s" begin="4s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        {/* Applicant Side (Right) */}
        <g className="applicant-side">
          {/* Applicant Person */}
          <ellipse cx="600" cy="250" rx="15" ry="12" fill="hsl(250 84% 54%)" />
          <rect x="585" y="260" width="30" height="40" fill="hsl(var(--primary))" rx="15" />
          
          {/* Mobile Phone */}
          <rect x="640" y="240" width="25" height="45" fill="url(#phoneGradient)" rx="8" stroke="hsl(250 84% 40%)" strokeWidth="1">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              values="0,0; 2,0; 0,0; -2,0; 0,0" 
              dur="3s" 
              repeatCount="indefinite" 
            />
          </rect>
          
          {/* Phone Screen */}
          <rect x="643" y="245" width="19" height="35" fill="hsl(var(--background))" rx="2" />
          
          {/* Notification Bubbles */}
          <g className="notifications">
            <circle cx="680" cy="230" r="8" fill="url(#notificationGlow)" filter="url(#glow)">
              <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
              <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="250" r="6" fill="hsl(var(--brand-orange))">
              <animate attributeName="opacity" values="0;1;0" dur="4s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="620" cy="220" r="5" fill="hsl(var(--accent))">
              <animate attributeName="opacity" values="0;1;0" dur="4s" begin="2s" repeatCount="indefinite" />
            </circle>
          </g>
          
          {/* Chat Bubbles */}
          <g className="chat-bubbles">
            <ellipse cx="550" cy="200" rx="20" ry="12" fill="hsl(var(--card))" stroke="hsl(var(--border))">
              <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="650" cy="180" rx="18" ry="10" fill="hsl(var(--primary))" fill-opacity="0.1">
              <animate attributeName="opacity" values="0;1;1;0" dur="5s" begin="1.5s" repeatCount="indefinite" />
            </ellipse>
          </g>
        </g>

        {/* Central Connection Pipeline */}
        <g className="pipeline">
          {/* Main Pipeline */}
          <path 
            d="M380 280 Q450 260 520 280" 
            stroke="url(#pipelineGradient)" 
            strokeWidth="4" 
            fill="none"
            filter="url(#softGlow)"
          >
            <animate attributeName="stroke-dasharray" values="0,100;20,80;0,100" dur="3s" repeatCount="indefinite" />
          </path>
          
          {/* Data Flow Particles */}
          <circle r="3" fill="hsl(var(--accent))">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="path(d='M380 280 Q450 260 520 280')" />
            </animateMotion>
          </circle>
          <circle r="2" fill="hsl(var(--primary))">
            <animateMotion dur="3s" begin="1s" repeatCount="indefinite">
              <mpath href="path(d='M380 280 Q450 260 520 280')" />
            </animateMotion>
          </circle>
          <circle r="2.5" fill="hsl(250 84% 54%)">
            <animateMotion dur="3s" begin="2s" repeatCount="indefinite">
              <mpath href="path(d='M380 280 Q450 260 520 280')" />
            </animateMotion>
          </circle>
        </g>

        {/* Floating Icons */}
        <g className="floating-icons">
          {/* Skill Badge */}
          <g transform="translate(400, 150)">
            <circle cx="0" cy="0" r="12" fill="hsl(var(--brand-orange))" fill-opacity="0.2">
              <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="4s" repeatCount="indefinite" />
            </circle>
            <path d="M-6,-6 L6,-6 L6,6 L-6,6 Z" fill="hsl(var(--brand-orange))" />
          </g>
          
          {/* Certificate */}
          <g transform="translate(500, 140)">
            <rect x="-8" y="-6" width="16" height="12" fill="hsl(var(--accent))" fill-opacity="0.3" rx="2">
              <animateTransform attributeName="transform" type="rotate" values="0;5;-5;0" dur="6s" repeatCount="indefinite" />
            </rect>
          </g>
          
          {/* Folder */}
          <g transform="translate(300, 180)">
            <path d="M-8,-4 L-4,-8 L8,-8 L8,4 L-8,4 Z" fill="hsl(var(--primary))" fill-opacity="0.2">
              <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="5s" repeatCount="indefinite" />
            </path>
          </g>
        </g>

        {/* Background Elements */}
        <g className="background-elements" opacity="0.3">
          {/* Small Buildings */}
          <rect x="120" y="200" width="15" height="30" fill="hsl(var(--muted-foreground))" />
          <rect x="140" y="190" width="12" height="40" fill="hsl(var(--muted-foreground))" />
          <rect x="720" y="180" width="18" height="35" fill="hsl(var(--muted-foreground))" />
          <rect x="740" y="170" width="14" height="45" fill="hsl(var(--muted-foreground))" />
          
          {/* Chart Elements */}
          <g transform="translate(680, 120)">
            <rect x="0" y="15" width="3" height="10" fill="hsl(var(--accent))">
              <animate attributeName="height" values="10;20;10" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="5" y="10" width="3" height="15" fill="hsl(var(--primary))">
              <animate attributeName="height" values="15;25;15" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="5" width="3" height="20" fill="hsl(250 84% 54%)">
              <animate attributeName="height" values="20;30;20" dur="3s" begin="1s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        {/* Platform Glow Effect */}
        <ellipse 
          cx="450" 
          cy="400" 
          rx="300" 
          ry="20" 
          fill="url(#pipelineGradient)" 
          opacity="0.1"
        >
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-32 w-1.5 h-1.5 bg-accent rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-primary rounded-full opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-20 w-2 h-2 bg-accent rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default IsometricHiringAnimation;