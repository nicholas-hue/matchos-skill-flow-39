import { useState, useEffect } from 'react';
import { BarChart, PieChart, LineChart, Activity, Gauge, TrendingDown, Eye, Download } from 'lucide-react';

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

const WorkflowAnimation4 = () => {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    {
      id: 'collect',
      label: 'Data Collection',
      sublabel: 'gather: hiring metrics',
      icon: <Activity className="w-4 h-4" />,
      position: { x: 10, y: 50 },
      targetPosition: { x: 10, y: 50 },
      color: 'from-cyan-500 to-blue-500',
      isMoving: false
    },
    {
      id: 'analyze',
      label: 'Performance Analysis',
      sublabel: 'process: key indicators',
      icon: <BarChart className="w-4 h-4" />,
      position: { x: 30, y: 30 },
      targetPosition: { x: 30, y: 30 },
      color: 'from-indigo-500 to-purple-500',
      isMoving: false
    },
    {
      id: 'trends',
      label: 'Trend Detection',
      sublabel: 'identify: patterns',
      icon: <LineChart className="w-4 h-4" />,
      position: { x: 50, y: 20 },
      targetPosition: { x: 50, y: 20 },
      color: 'from-teal-500 to-green-500',
      isMoving: false
    },
    {
      id: 'metrics',
      label: 'KPI Dashboard',
      sublabel: 'display: real-time data',
      icon: <Gauge className="w-4 h-4" />,
      position: { x: 70, y: 30 },
      targetPosition: { x: 70, y: 30 },
      color: 'from-orange-500 to-red-500',
      isMoving: false
    },
    {
      id: 'insights',
      label: 'AI Insights',
      sublabel: 'generate: recommendations',
      icon: <Eye className="w-4 h-4" />,
      position: { x: 50, y: 70 },
      targetPosition: { x: 50, y: 70 },
      color: 'from-violet-500 to-pink-500',
      isMoving: false
    },
    {
      id: 'optimize',
      label: 'Process Optimization',
      sublabel: 'improve: efficiency',
      icon: <TrendingDown className="w-4 h-4" />,
      position: { x: 75, y: 55 },
      targetPosition: { x: 75, y: 55 },
      color: 'from-emerald-500 to-teal-500',
      isMoving: false
    },
    {
      id: 'report',
      label: 'Export Reports',
      sublabel: 'deliver: actionable data',
      icon: <Download className="w-4 h-4" />,
      position: { x: 90, y: 50 },
      targetPosition: { x: 90, y: 50 },
      color: 'from-blue-500 to-indigo-500',
      isMoving: false
    }
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    { from: 'collect', to: 'analyze', isActive: false, opacity: 0.3 },
    { from: 'analyze', to: 'trends', isActive: false, opacity: 0.3 },
    { from: 'analyze', to: 'insights', isActive: false, opacity: 0.3 },
    { from: 'trends', to: 'metrics', isActive: false, opacity: 0.3 },
    { from: 'metrics', to: 'optimize', isActive: false, opacity: 0.3 },
    { from: 'insights', to: 'optimize', isActive: false, opacity: 0.3 },
    { from: 'optimize', to: 'report', isActive: false, opacity: 0.3 }
  ]);

  // Animate nodes moving to random positions occasionally
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        const shouldMove = Math.random() > 0.85;
        if (shouldMove) {
          const variance = 5;
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
    }, 4000);

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
          const speed = 0.03;
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
              opacity: Math.max(0.15, conn.opacity - 0.15)
            };
          }
        });
        
        return newConnections;
      });
    }, 2500);

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
    const controlY = Math.min(fromY, toY) - 10;
    
    return `M ${fromX} ${fromY} Q ${midX} ${controlY} ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 rounded-2xl overflow-hidden border border-blue-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 40% 20%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, #6366f1 1px, transparent 1px)
          `,
          backgroundSize: '55px 55px'
        }} />
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="connectionGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
          </linearGradient>
          <filter id="connectionGlow4">
            <feGaussianBlur stdDeviation="0.7" result="coloredBlur"/>
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
            stroke="url(#connectionGradient4)"
            strokeWidth={connection.isActive ? "0.4" : "0.15"}
            fill="none"
            opacity={connection.opacity}
            filter={connection.isActive ? "url(#connectionGlow4)" : undefined}
            className="transition-all duration-1500"
            strokeDasharray={connection.isActive ? "none" : "2,3"}
          />
        ))}
      </svg>

      {/* Workflow nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1500 ease-out"
          style={{
            left: `${node.position.x}%`,
            top: `${node.position.y}%`
          }}
        >
          <div className="relative group cursor-pointer">
            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${node.color} opacity-20 blur-sm transition-all duration-300 ${
              node.isMoving ? 'scale-110 opacity-40' : 'scale-100'
            }`} />
            
            <div className={`relative px-3 py-2 rounded-lg bg-gradient-to-r ${node.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 border border-white/20 ${
              node.isMoving ? 'shadow-xl scale-105' : ''
            }`}>
              <div className="flex items-center gap-2">
                {node.icon}
                <span className="text-xs font-medium whitespace-nowrap">{node.label.split(' ')[0]}</span>
              </div>
            </div>
            
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-10">
              <div className="bg-blue-900/95 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg border border-blue-700 shadow-xl">
                <div className="font-semibold text-blue-300">{node.label}</div>
                <div className="text-blue-400 text-xs mt-1">{node.sublabel}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${35 + Math.cos(i * 2) * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2.5 + Math.random()}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowAnimation4;