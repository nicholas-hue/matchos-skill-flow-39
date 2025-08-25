import React from 'react';
import { Brain, Users } from 'lucide-react';

interface ProfileNode {
  id: string;
  name: string;
  percentage: number;
  image?: string;
  position: { x: number; y: number };
}

interface NetworkWorkflowProps {
  centerIcon?: React.ReactNode;
  centerTitle?: string;
  centerSubtitle?: string;
  profiles?: ProfileNode[];
  className?: string;
}

const defaultProfiles: ProfileNode[] = [
  { id: '1', name: 'Software Engineer', percentage: 96, position: { x: 15, y: 15 } },
  { id: '2', name: 'Product Manager', percentage: 92, position: { x: 85, y: 25 } },
  { id: '3', name: 'Designer', percentage: 89, position: { x: 10, y: 65 } },
  { id: '4', name: 'Data Analyst', percentage: 94, position: { x: 75, y: 70 } },
  { id: '5', name: 'Marketing Lead', percentage: 87, position: { x: 50, y: 80 } },
];

const NetworkWorkflow: React.FC<NetworkWorkflowProps> = ({
  centerIcon,
  centerTitle = "AI Hiring",
  centerSubtitle = "Find the perfect candidate for every role",
  profiles = defaultProfiles,
  className = ""
}) => {
  // Generate curved path from center to each profile
  const generatePath = (profile: ProfileNode) => {
    const centerX = 50;
    const centerY = 50;
    const { x, y } = profile.position;
    
    // Calculate control points for smooth curves
    const controlX1 = centerX + (x - centerX) * 0.3;
    const controlY1 = centerY + (y - centerY) * 0.3;
    const controlX2 = centerX + (x - centerX) * 0.7;
    const controlY2 = centerY + (y - centerY) * 0.7;
    
    return `M ${centerX} ${centerY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${x} ${y}`;
  };

  return (
    <div className={`relative w-full h-[600px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl overflow-hidden ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--secondary))_0%,transparent_50%)]" />
      </div>

      {/* SVG for connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {profiles.map((profile) => (
          <g key={profile.id}>
            <path
              d={generatePath(profile)}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              fill="none"
              filter="url(#glow)"
              className="animate-pulse"
            />
            {/* Connection nodes */}
            <circle
              cx={profile.position.x}
              cy={profile.position.y}
              r="0.8"
              fill="rgba(255,255,255,0.6)"
              className="animate-pulse"
            />
            <circle
              cx="50"
              cy="50"
              r="1"
              fill="rgba(255,255,255,0.8)"
            />
          </g>
        ))}
      </svg>

      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl animate-pulse" />
          
          {/* Main center circle */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-2xl border border-white/20">
            <div className="text-white">
              {centerIcon || <Brain size={32} />}
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h2 className="text-2xl font-bold text-white mb-2">{centerTitle}</h2>
        <p className="text-blue-200 text-sm max-w-md">{centerSubtitle}</p>
      </div>

      {/* Profile nodes */}
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="absolute z-10 group"
          style={{
            left: `${profile.position.x}%`,
            top: `${profile.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Profile image placeholder */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border-2 border-white/30 shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
              {profile.image ? (
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500">
                  <Users size={24} className="text-slate-600" />
                </div>
              )}
            </div>
            
            {/* Percentage badge */}
            <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              {profile.percentage}%
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000"
                style={{ width: `${profile.percentage}%` }}
              />
            </div>
            <p className="text-white text-xs mt-1 text-center font-medium">{profile.name}</p>
          </div>
        </div>
      ))}

      {/* Action button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg">
          Learn more about our AI
        </button>
      </div>
    </div>
  );
};

export default NetworkWorkflow;