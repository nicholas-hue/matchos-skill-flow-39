import { useState, useEffect } from 'react';
import { FileText, Zap, Shield, Globe, BarChart3, CheckCircle, Plus } from 'lucide-react';

interface WorkflowNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  color: string;
}

interface Connection {
  from: string;
  to: string;
  animated?: boolean;
}

const WorkflowAnimation = () => {
  const [activeConnection, setActiveConnection] = useState<string | null>(null);
  const [completedNodes, setCompletedNodes] = useState<string[]>([]);

  const nodes: WorkflowNode[] = [
    {
      id: 'start',
      label: 'New Candidate',
      sublabel: 'Application received',
      icon: <FileText className="w-5 h-5" />,
      position: { x: 0, y: 50 },
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'extract',
      label: 'Extract Skills',
      sublabel: 'Parse resume data',
      icon: <Zap className="w-5 h-5" />,
      position: { x: 25, y: 25 },
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'verify1',
      label: 'Skills Assessment',
      sublabel: 'Technical evaluation',
      icon: <Shield className="w-5 h-5" />,
      position: { x: 50, y: 10 },
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'verify2',
      label: 'Background Check',
      sublabel: 'Reference verification',
      icon: <Globe className="w-5 h-5" />,
      position: { x: 75, y: 25 },
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'scan',
      label: 'AI Screening',
      sublabel: 'Intelligent filtering',
      icon: <BarChart3 className="w-5 h-5" />,
      position: { x: 50, y: 75 },
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'merge',
      label: 'Compile Results',
      sublabel: 'Generate report',
      icon: <CheckCircle className="w-5 h-5" />,
      position: { x: 75, y: 50 },
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'result',
      label: 'Final Decision',
      sublabel: 'Qualified candidate',
      icon: <Plus className="w-5 h-5" />,
      position: { x: 100, y: 50 },
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const connections: Connection[] = [
    { from: 'start', to: 'extract', animated: true },
    { from: 'extract', to: 'verify1', animated: true },
    { from: 'extract', to: 'scan', animated: true },
    { from: 'verify1', to: 'verify2', animated: true },
    { from: 'verify2', to: 'merge', animated: true },
    { from: 'scan', to: 'merge', animated: true },
    { from: 'merge', to: 'result', animated: true }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const connectionIndex = Math.floor(Math.random() * connections.length);
      const connection = connections[connectionIndex];
      setActiveConnection(`${connection.from}-${connection.to}`);
      
      // Mark nodes as completed
      setCompletedNodes(prev => {
        const newCompleted = [...prev];
        if (!newCompleted.includes(connection.from)) {
          newCompleted.push(connection.from);
        }
        if (Math.random() > 0.7 && !newCompleted.includes(connection.to)) {
          newCompleted.push(connection.to);
        }
        return newCompleted;
      });

      setTimeout(() => {
        setActiveConnection(null);
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getConnectionPath = (from: WorkflowNode, to: WorkflowNode) => {
    const fromX = from.position.x;
    const fromY = from.position.y;
    const toX = to.position.x;
    const toY = to.position.y;
    
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    
    return `M ${fromX} ${fromY} Q ${midX} ${midY + (fromY < toY ? -10 : 10)} ${toX} ${toY}`;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {connections.map((connection) => {
          const fromNode = nodes.find(n => n.id === connection.from);
          const toNode = nodes.find(n => n.id === connection.to);
          if (!fromNode || !toNode) return null;
          
          const isActive = activeConnection === `${connection.from}-${connection.to}`;
          
          return (
            <g key={`${connection.from}-${connection.to}`}>
              <path
                d={getConnectionPath(fromNode, toNode)}
                stroke="url(#lineGradient)"
                strokeWidth={isActive ? "0.8" : "0.4"}
                fill="none"
                filter={isActive ? "url(#glow)" : undefined}
                className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}
              />
              {isActive && (
                <circle r="1" fill="#3b82f6" className="animate-pulse">
                  <animateMotion dur="2s" repeatCount="1">
                    <mpath href={`#path-${connection.from}-${connection.to}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Workflow nodes */}
      {nodes.map((node) => {
        const isCompleted = completedNodes.includes(node.id);
        const isActive = connections.some(c => 
          activeConnection === `${c.from}-${c.to}` && (c.from === node.id || c.to === node.id)
        );

        return (
          <div
            key={node.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
              isActive ? 'scale-110' : 'scale-100'
            }`}
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`
            }}
          >
            <div className={`relative group cursor-pointer`}>
              {/* Node glow effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${node.color} opacity-30 blur-md transition-all duration-300 ${
                isActive ? 'scale-150 opacity-50' : 'scale-100'
              }`} />
              
              {/* Main node */}
              <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                isCompleted ? 'ring-2 ring-green-400' : ''
              } ${isActive ? 'shadow-2xl' : ''}`}>
                {node.icon}
                {isCompleted && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              
              {/* Node label */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-slate-800/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  <div className="font-semibold">{node.label}</div>
                  {node.sublabel && (
                    <div className="text-slate-300 text-xs">{node.sublabel}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkflowAnimation;