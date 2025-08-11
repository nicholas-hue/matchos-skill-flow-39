import { Button } from "@/components/ui/button";
import { SkipForward } from "lucide-react";

interface AnimationProgressIndicatorProps {
  currentIndex: number;
  total: number;
  onSkip: () => void;
  progress: number;
}

const AnimationProgressIndicator = ({ 
  currentIndex, 
  total, 
  onSkip,
  progress 
}: AnimationProgressIndicatorProps) => {
  const stages = [
    "Initial Screening",
    "Interview Process", 
    "Onboarding Flow",
    "Analytics & Insights"
  ];

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center gap-4 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: total }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : index < currentIndex
                  ? 'bg-primary/60'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Stage label */}
        <div className="text-white text-sm font-medium min-w-0">
          {stages[currentIndex]}
        </div>

        {/* Progress bar */}
        <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Skip button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onSkip}
          className="text-white/80 hover:text-white hover:bg-white/10 h-auto py-1 px-2"
        >
          <SkipForward className="w-3 h-3 mr-1" />
          Skip
        </Button>
      </div>
    </div>
  );
};

export default AnimationProgressIndicator;