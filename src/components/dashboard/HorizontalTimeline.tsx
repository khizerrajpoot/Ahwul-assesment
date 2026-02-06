import { ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  status: 'completed' | 'upcoming';
}

interface HorizontalTimelineProps {
  milestones: TimelineMilestone[];
  year?: number;
}

export const HorizontalTimeline = ({ milestones, year = 2026 }: HorizontalTimelineProps) => {
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineBarRef = useRef<HTMLDivElement>(null);
  const [dotPositions, setDotPositions] = useState<number[]>([]);
  const [progressWidth, setProgressWidth] = useState<number>(0);
  
  const calculateDotPositions = () => {
    if (labelRefs.current.length === milestones.length && timelineBarRef.current) {
      const barRect = timelineBarRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      
      const positions = labelRefs.current.map((ref, index) => {
        if (ref) {
          const labelRect = ref.getBoundingClientRect();
          const labelCenter = labelRect.left + labelRect.width / 2;
          let relativePosition = ((labelCenter - barRect.left) / barRect.width) * 100;
          
          if (index === 0) {
            relativePosition += 1.5;
          }
          else if (index === milestones.length - 1) {
            relativePosition -= 2;
          }
          
          return Math.max(0, Math.min(100, relativePosition));
        }
        return 0;
      });
      setDotPositions(positions);
      
      const march18Position = positions[1] || (milestones.length > 1 ? (1 / (milestones.length - 1)) * 100 : 0);
      let offset = 4;
      if (isMobile) {
        offset = 2.5;
      } else if (isTablet) {
        offset = 3.5;
      }
      setProgressWidth(Math.min(100, march18Position + offset));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateDotPositions();
    }, 0);
    
    window.addEventListener('resize', calculateDotPositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateDotPositions);
    };
  }, [milestones.length]);
  
  const completedCount = milestones.filter(m => m.status === 'completed').length;
  const dividerPosition = completedCount > 0 && completedCount < milestones.length 
    ? ((completedCount - 1) / (milestones.length - 1)) * 100 + (1 / (milestones.length - 1)) * 50
    : null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 md:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
        <h2 className="text-base sm:text-lg font-semibold text-[#1D3557]">Project Timeline</h2>
        <div className="flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 border rounded-lg cursor-pointer hover:bg-gray-50" >
          <span className="text-xs sm:text-sm font-medium text-gray-700">{year}</span>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
        </div>
      </div>
      
      <div ref={timelineBarRef} className="relative mb-6 sm:mb-8 h-3 min-h-3">
        <div className="absolute top-0 left-0 right-0 h-3 bg-[#F5F8FB] rounded-lg" />
        <div
          className="absolute top-0 left-0 h-3 bg-[#1EA54E] rounded-lg"
          style={{
            width: `${progressWidth || (milestones.length > 1 ? (1 / (milestones.length - 1)) * 100 + 4 : 0)}%`,
          }}
        />

        {dividerPosition && (
          <div
            className="absolute top-0"
            style={{
              left: `${dividerPosition}%`,
              width: '1px',
              height: '12px',
            }}
          />
        )}

        {milestones.map((milestone, index) => {
          const position = dotPositions[index] || (milestones.length > 1 ? (index / (milestones.length - 1)) * 100 : 0);
          
          return (
            <div
              key={milestone.id}
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${position}%` }}
            >
              <div
                className={`rounded-full w-[9px] h-[9px] ${
                  milestone.status === 'completed' ? 'bg-white' : 'bg-[#EF4444]'
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-start mt-3 sm:mt-4 relative overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
        <div className="flex justify-between items-start w-full min-w-max sm:min-w-0">
          {milestones.map((milestone, index) => {
            return (
              <div
                key={milestone.id}
                ref={(el) => { labelRefs.current[index] = el; }}
                className="flex flex-col items-center flex-shrink-0 sm:flex-1"
                style={{ 
                  flex: index === 0 || index === milestones.length - 1 ? '0 0 auto' : undefined,
                  minWidth: '50px',
                  maxWidth: '100px',
                }}
              >
                <div className="text-[10px] sm:text-[11px] md:text-[10px] lg:text-xs text-gray-500 mt-1 text-center whitespace-nowrap">{milestone.date}</div>
                <div className="text-center px-1 sm:whitespace-nowrap md:whitespace-normal lg:whitespace-nowrap break-words capitalize text-sm lg:text-xs font-medium leading-4 text-[#1D3557]">
                  {milestone.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
