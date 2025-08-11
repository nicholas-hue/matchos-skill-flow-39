import { useState, useEffect } from 'react';
import { FileText, Zap, Shield, Globe, BarChart3, CheckCircle, Plus, Code } from 'lucide-react';

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

const WorkflowAnimation = () => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'start',
      label: 'On new candidate',
      sublabel: 'trigger: application',
      icon: <FileText className="w-4 h-4" />,
      position: { x: 10, y: 50 },
      targetPosition: { x: 10, y: 50 },
      color: 'from-orange-500 to-red-500',
      isMoving: false
    },
    {
      id: 'extract',
      label: 'Extract skills & experience',
      sublabel: 'parse: resume data',
      icon: <Code className="w-4 h-4" />,
      position: { x: 30, y: 35 },
      targetPosition: { x: 30, y: 35 },
      color: 'from-amber-500 to-orange-500',
      isMoving: false
    },
    {
      id: 'verify1',
      label: 'Skills Assessment',
      sublabel: 'GET: technical evaluation',
      icon: <Shield className="w-4 h-4" />,
      position: { x: 50, y: 20 },
      targetPosition: { x: 50, y: 20 },
      color: 'from-blue-500 to-purple-500',
      isMoving: false
    },
    {
      id: 'verify2',
      label: 'Background Check',
      sublabel: 'GET: reference verification',
      icon: <Globe className="w-4 h-4" />,
      position: { x: 70, y: 35 },
      targetPosition: { x: 70, y: 35 },
      color: 'from-blue-500 to-purple-500',
      isMoving: false
    },
    {
      id: 'scan',
      label: 'AI Screening',
      sublabel: 'perform: intelligent scan',
      icon: <BarChart3 className="w-4 h-4" />,
      position: { x: 50, y: 70 },
      targetPosition: { x: 50, y: 70 },
      color: 'from-red-500 to-pink-500',
      isMoving: false
    },
    {
      id: 'merge',
      label: 'Merge reports',
      sublabel: 'append',
      icon: <CheckCircle className="w-4 h-4" />,
      position: { x: 75, y: 55 },
      targetPosition: { x: 75, y: 55 },
      color: 'from-cyan-500 to-blue-500',
      isMoving: false
    },
    {
      id: 'result',
      label: 'Post results',
      sublabel: 'update: final decision',
      icon: <Plus className="w-4 h-4" />,
      position: { x: 90, y: 50 },
      targetPosition: { x: 90, y: 50 },
      color: 'from-purple-500 to-indigo-500',
      isMoving: false
    }
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    { from: 'start', to: 'extract', isActive: false, opacity: 0.3 },
    { from: 'extract', to: 'verify1', isActive: false, opacity: 0.3 },
    { from: 'extract', to: 'scan', isActive: false, opacity: 0.3 },
    { from: 'verify1', to: 'verify2', isActive: false, opacity: 0.3 },
    { from: 'verify2', to: 'merge', isActive: false, opacity: 0.3 },
    { from: 'scan', to: 'merge', isActive: false, opacity: 0.3 },
    { from: 'merge', to: 'result', isActive: false, opacity: 0.3 }
  ]);

  // Animate nodes moving to random positions occasionally
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        const shouldMove = Math.random() > 0.7;
        if (shouldMove) {
          const variance = 8;
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
    }, 3000);

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
          const speed = 0.05;
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
        
        // Activate random connection
        newConnections[randomIndex] = {
          ...newConnections[randomIndex],
          isActive: true,
          opacity: 1
        };
        
        // Deactivate others gradually
        newConnections.forEach((conn, index) => {
          if (index !== randomIndex) {
            newConnections[index] = {
              ...conn,
              isActive: false,
              opacity: Math.max(0.2, conn.opacity - 0.1)
            };
          }
        });
        
        return newConnections;
      });
    }, 2000);

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
    const controlY = Math.min(fromY, toY) - 15;
    
    return `M ${fromX} ${fromY} Q ${midX} ${controlY} ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-slate-800">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
          <filter id="connectionGlow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {connections.map((connection, index) => (
          <path
            key={`${connection.from}-${connection.to}`}
            d={getConnectionPath(connection.from, connection.to)}
            stroke="url(#connectionGradient)"
            strokeWidth={connection.isActive ? "0.4" : "0.2"}
            fill="none"
            opacity={connection.opacity}
            filter={connection.isActive ? "url(#connectionGlow)" : undefined}
            className="transition-all duration-1000"
            strokeDasharray={connection.isActive ? "none" : "2,2"}
          />
        ))}
      </svg>

      {/* Workflow nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
          style={{
            left: `${node.position.x}%`,
            top: `${node.position.y}%`
          }}
        >
          <div className="relative group cursor-pointer">
            {/* Node glow effect */}
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${node.color} opacity-20 blur-sm transition-all duration-300 ${
              node.isMoving ? 'scale-110 opacity-40' : 'scale-100'
            }`} />
            
            {/* Main node */}
            <div className={`relative px-3 py-2 rounded-lg bg-gradient-to-r ${node.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 border border-white/20 ${
              node.isMoving ? 'shadow-xl scale-105' : ''
            }`}>
              <div className="flex items-center gap-2">
                {node.icon}
                <span className="text-xs font-medium whitespace-nowrap">{node.label.split(' ')[0]}</span>
              </div>
            </div>
            
            {/* Node label */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
              <div className="bg-slate-900/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-slate-700 shadow-xl">
                <div className="font-semibold text-blue-300">{node.label}</div>
                <div className="text-slate-400 text-xs mt-1">{node.sublabel}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${1.5 + Math.random()}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowAnimation;