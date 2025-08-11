import { useState, useEffect } from 'react';
import { FileCheck, Clock, AlertCircle, TrendingUp, Database, Clipboard, Mail, UserCheck } from 'lucide-react';

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

const WorkflowAnimation3 = () => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'onboard',
      label: 'New Hire Onboarding',
      sublabel: 'init: employee setup',
      icon: <UserCheck className="w-4 h-4" />,
      position: { x: 10, y: 50 },
      targetPosition: { x: 10, y: 50 },
      color: 'from-rose-500 to-pink-500',
      isMoving: false
    },
    {
      id: 'docs',
      label: 'Document Collection',
      sublabel: 'gather: required forms',
      icon: <FileCheck className="w-4 h-4" />,
      position: { x: 30, y: 35 },
      targetPosition: { x: 30, y: 35 },
      color: 'from-amber-500 to-yellow-500',
      isMoving: false
    },
    {
      id: 'track',
      label: 'Progress Tracking',
      sublabel: 'monitor: completion status',
      icon: <TrendingUp className="w-4 h-4" />,
      position: { x: 50, y: 20 },
      targetPosition: { x: 50, y: 20 },
      color: 'from-violet-500 to-fuchsia-500',
      isMoving: false
    },
    {
      id: 'remind',
      label: 'Auto Reminders',
      sublabel: 'send: follow-up alerts',
      icon: <Clock className="w-4 h-4" />,
      position: { x: 70, y: 35 },
      targetPosition: { x: 70, y: 35 },
      color: 'from-sky-500 to-blue-500',
      isMoving: false
    },
    {
      id: 'validate',
      label: 'Data Validation',
      sublabel: 'verify: information accuracy',
      icon: <AlertCircle className="w-4 h-4" />,
      position: { x: 50, y: 70 },
      targetPosition: { x: 50, y: 70 },
      color: 'from-red-500 to-orange-500',
      isMoving: false
    },
    {
      id: 'store',
      label: 'Secure Storage',
      sublabel: 'save: encrypted records',
      icon: <Database className="w-4 h-4" />,
      position: { x: 75, y: 55 },
      targetPosition: { x: 75, y: 55 },
      color: 'from-teal-500 to-cyan-500',
      isMoving: false
    },
    {
      id: 'complete',
      label: 'Completion Notice',
      sublabel: 'notify: ready to work',
      icon: <Mail className="w-4 h-4" />,
      position: { x: 90, y: 50 },
      targetPosition: { x: 90, y: 50 },
      color: 'from-purple-500 to-indigo-500',
      isMoving: false
    }
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    { from: 'onboard', to: 'docs', isActive: false, opacity: 0.3 },
    { from: 'docs', to: 'track', isActive: false, opacity: 0.3 },
    { from: 'docs', to: 'validate', isActive: false, opacity: 0.3 },
    { from: 'track', to: 'remind', isActive: false, opacity: 0.3 },
    { from: 'remind', to: 'store', isActive: false, opacity: 0.3 },
    { from: 'validate', to: 'store', isActive: false, opacity: 0.3 },
    { from: 'store', to: 'complete', isActive: false, opacity: 0.3 }
  ]);

  // Animate nodes moving to random positions occasionally
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        const shouldMove = Math.random() > 0.75;
        if (shouldMove) {
          const variance = 7;
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
    }, 2800);

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
          const speed = 0.06;
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
              opacity: Math.max(0.2, conn.opacity - 0.12)
            };
          }
        });
        
        return newConnections;
      });
    }, 1800);

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
    const controlY = Math.min(fromY, toY) - 18;
    
    return `M ${fromX} ${fromY} Q ${midX} ${controlY} ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-purple-950 via-fuchsia-900 to-rose-950 rounded-2xl overflow-hidden border border-purple-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, #a855f7 1px, transparent 1px),
            radial-gradient(circle at 70% 60%, #ec4899 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px'
        }} />
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connectionGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
          </linearGradient>
          <filter id="connectionGlow3">
            <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
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
            stroke="url(#connectionGradient3)"
            strokeWidth={connection.isActive ? "0.6" : "0.25"}
            fill="none"
            opacity={connection.opacity}
            filter={connection.isActive ? "url(#connectionGlow3)" : undefined}
            className="transition-all duration-900"
            strokeDasharray={connection.isActive ? "none" : "4,2"}
          />
        ))}
      </svg>

      {/* Workflow nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-900 ease-out"
          style={{
            left: `${node.position.x}%`,
            top: `${node.position.y}%`
          }}
        >
          <div className="relative group cursor-pointer">
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${node.color} opacity-30 blur-sm transition-all duration-300 ${
              node.isMoving ? 'scale-120 opacity-50' : 'scale-100'
            }`} />
            
            <div className={`relative px-3 py-2 rounded-lg bg-gradient-to-r ${node.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 border border-white/30 ${
              node.isMoving ? 'shadow-xl scale-105' : ''
            }`}>
              <div className="flex items-center gap-2">
                {node.icon}
                <span className="text-xs font-medium whitespace-nowrap">{node.label.split(' ')[0]}</span>
              </div>
            </div>
            
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
              <div className="bg-purple-900/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-purple-700 shadow-xl">
                <div className="font-semibold text-purple-300">{node.label}</div>
                <div className="text-purple-400 text-xs mt-1">{node.sublabel}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"
            style={{
              left: `${12 + (i * 13)}%`,
              top: `${30 + Math.sin(i * 1.5) * 20}%`,
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${1.8 + Math.random()}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowAnimation3;