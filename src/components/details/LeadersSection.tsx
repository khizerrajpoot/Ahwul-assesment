import Ellipse118 from '../../assets/Ellipse 118.svg';
import type { Leader } from '../../types';

interface LeadersSectionProps {
  leaders: Leader[];
}

export const LeadersSection = ({ leaders }: LeadersSectionProps) => {
  return (
    <div className="mt-6">
      <div className="bg-white rounded-lg border border-[#E0E8ED] p-6">
        <h3 className="text-lg font-bold mb-4 text-[#1D3557]">
          Leaders
        </h3>
        <div className="flex gap-4 max-w-[600px]">
          {leaders.map((leader) => (
            <div key={leader.id} className="flex items-center gap-3 p-4 flex-1 bg-[#F5F8FA] rounded-[10px]">
              <div className="w-12 h-12 flex-shrink-0">
                <img 
                  src={Ellipse118} 
                  alt={leader.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="mb-1 text-[14px] font-medium text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {leader.name}
                </div>
                <div className="text-[14px] font-medium text-[#8597A8]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                  {leader.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
