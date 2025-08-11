import { useState, useEffect } from 'react';
import { Users, MessageSquare, Calendar, Phone, Award, Target, Send, CheckSquare } from 'lucide-react';

interface WorkflowNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  targetPosition: { x: number; y: number };
  color: string;
  isMoving: boolean;
}

interface Connection {
  from: string;
  to: string;
  isActive: boolean;
  opacity: number;
}

const WorkflowAnimation2 = () => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'candidates',
      label: 'Qualified Candidates',
      sublabel: 'pool: pre-screened talent',
      icon: <Users className="w-4 h-4" />,
      position: { x: 10, y: 50 },
      targetPosition: { x: 10, y: 50 },
      color: 'from-emerald-500 to-teal-500',
      isMoving: false
    },
    {
      id: 'schedule',
      label: 'Auto Schedule',
      sublabel: 'calendar: smart booking',
      icon: <Calendar className="w-4 h-4" />,
      position: { x: 30, y: 30 },
      targetPosition: { x: 30, y: 30 },
      color: 'from-blue-500 to-cyan-500',
      isMoving: false
    },
    {
      id: 'interview',
      label: 'Video Interview',
      sublabel: 'connect: face-to-face',
      icon: <Phone className="w-4 h-4" />,
      position: { x: 50, y: 20 },
      targetPosition: { x: 50, y: 20 },
      color: 'from-violet-500 to-purple-500',
      isMoving: false
    },
    {
      id: 'feedback',
      label: 'Team Feedback',
      sublabel: 'collect: interview notes',
      icon: <MessageSquare className="w-4 h-4" />,
      position: { x: 70, y: 30 },
      targetPosition: { x: 70, y: 30 },
      color: 'from-pink-500 to-rose-500',
      isMoving: false
    },
    {
      id: 'score',
      label: 'AI Scoring',
      sublabel: 'analyze: performance data',
      icon: <Award className="w-4 h-4" />,
      position: { x: 50, y: 70 },
      targetPosition: { x: 50, y: 70 },
      color: 'from-orange-500 to-amber-500',
      isMoving: false
    },
    {
      id: 'rank',
      label: 'Candidate Ranking',
      sublabel: 'sort: best matches',
      icon: <Target className="w-4 h-4" />,
      position: { x: 75, y: 55 },
      targetPosition: { x: 75, y: 55 },
      color: 'from-indigo-500 to-blue-500',
      isMoving: false
    },
    {
      id: 'offer',
      label: 'Send Offer',
      sublabel: 'deliver: job proposal',
      icon: <Send className="w-4 h-4" />,
      position: { x: 90, y: 50 },
      targetPosition: { x: 90, y: 50 },
      color: 'from-green-500 to-emerald-500',
      isMoving: false
    }
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    { from: 'candidates', to: 'schedule', isActive: false, opacity: 0.3 },
    { from: 'schedule', to: 'interview', isActive: false, opacity: 0.3 },
    { from: 'interview', to: 'feedback', isActive: false, opacity: 0.3 },
    { from: 'interview', to: 'score', isActive: false, opacity: 0.3 },
    { from: 'feedback', to: 'rank', isActive: false, opacity: 0.3 },
    { from: 'score', to: 'rank', isActive: false, opacity: 0.3 },
    { from: 'rank', to: 'offer', isActive: false, opacity: 0.3 }
  ]);

  // Animate nodes moving to random positions occasionally
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        const shouldMove = Math.random() > 0.8;
        if (shouldMove) {
          const variance = 6;
          const newTargetX = Math.max(5, Math.min(95, node.targetPosition.x + (Math.random() - 0.5) * variance));
          const newTargetY = Math.max(15, Math.min(85, node.targetPosition.y + (Math.random() - 0.5) * variance));
          
          return {
            ...node,
            targetPosition: { x: newTargetX, y: newTargetY },
            isMoving: true
          };
        }
        return node;
      }));
    }, 3500);

    return () => clearInterval(moveInterval);
  }, []);

  // Smooth movement animation
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        const dx = node.targetPosition.x - node.position.x;
        const dy = node.targetPosition.y - node.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0.5) {
          const speed = 0.04;
          return {
            ...node,
            position: {
              x: node.position.x + dx * speed,
              y: node.position.y + dy * speed
            },
            isMoving: distance > 1
          };
        }
        
        return {
          ...node,
          position: node.targetPosition,
          isMoving: false
        };
      }));
    }, 16);

    return () => clearInterval(animationInterval);
  }, []);

  // Animate connections
  useEffect(() => {
    const connectionInterval = setInterval(() => {
      setConnections(prev => {
        const newConnections = [...prev];
        const randomIndex = Math.floor(Math.random() * newConnections.length);
        
        newConnections[randomIndex] = {
          ...newConnections[randomIndex],
          isActive: true,
          opacity: 1
        };
        
        newConnections.forEach((conn, index) => {
          if (index !== randomIndex) {
            newConnections[index] = {
              ...conn,
              isActive: false,
              opacity: Math.max(0.25, conn.opacity - 0.08)
            };
          }
        });
        
        return newConnections;
      });
    }, 2200);

    return () => clearInterval(connectionInterval);
  }, []);

  const getConnectionPath = (fromId: string, toId: string) => {
    const fromNode = nodes.find(n => n.id === fromId);
    const toNode = nodes.find(n => n.id === toId);
    if (!fromNode || !toNode) return '';
    
    const fromX = fromNode.position.x;
    const fromY = fromNode.position.y;
    const toX = toNode.position.x;
    const toY = toNode.position.y;
    
    const midX = (fromX + toX) / 2;
    const controlY = Math.min(fromY, toY) - 12;
    
    return `M ${fromX} ${fromY} Q ${midX} ${controlY} ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950 rounded-2xl overflow-hidden border border-emerald-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #10b981 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </linearGradient>
          <filter id="connectionGlow2">
            <feGaussianBlur stdDeviation="0.6" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {connections.map((connection) => (
          <path
            key={`${connection.from}-${connection.to}`}
            d={getConnectionPath(connection.from, connection.to)}
            stroke="url(#connectionGradient2)"
            strokeWidth={connection.isActive ? "0.5" : "0.2"}
            fill="none"
            opacity={connection.opacity}
            filter={connection.isActive ? "url(#connectionGlow2)" : undefined}
            className="transition-all duration-1200"
            strokeDasharray={connection.isActive ? "none" : "3,1"}
          />
        ))}
      </svg>

      {/* Workflow nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1200 ease-out"
          style={{
            left: `${node.position.x}%`,
            top: `${node.position.y}%`
          }}
        >
          <div className="relative group cursor-pointer">
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${node.color} opacity-25 blur-sm transition-all duration-300 ${
              node.isMoving ? 'scale-115 opacity-45' : 'scale-100'
            }`} />
            
            <div className={`relative px-3 py-2 rounded-lg bg-gradient-to-r ${node.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 border border-white/25 ${
              node.isMoving ? 'shadow-xl scale-105' : ''
            }`}>
              <div className="flex items-center gap-2">
                {node.icon}
                <span className="text-xs font-medium whitespace-nowrap">{node.label.split(' ')[0]}</span>
              </div>
            </div>
            
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
              <div className="bg-emerald-900/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-emerald-700 shadow-xl">
                <div className="font-semibold text-emerald-300">{node.label}</div>
                <div className="text-emerald-400 text-xs mt-1">{node.sublabel}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-50"
            style={{
              left: `${15 + (i * 14)}%`,
              top: `${25 + Math.cos(i) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowAnimation2;