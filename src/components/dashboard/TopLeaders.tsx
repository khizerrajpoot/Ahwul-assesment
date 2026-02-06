import Ellipse118 from '../../assets/Ellipse 118.svg';
import Ellipse119 from '../../assets/Ellipse 119.svg';
import Ellipse120 from '../../assets/Ellipse 120.svg';

interface Leader {
  id: string;
  name: string;
  role: string;
  avatar: string;
  score: number;
}

interface TopLeadersProps {
  leaders: Leader[];
}

const ellipseIcons = [Ellipse118, Ellipse119, Ellipse120];

export const TopLeaders = ({ leaders }: TopLeadersProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="mb-4 text-[16px] font-bold text-[#1D3557]">
        Top Performing Perspective Leaders
      </h3>
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div 
            key={leader.id} 
            className={`flex items-center gap-4 pb-4 ${
              index < leaders.length - 1 ? 'border-b border-[#E0E8ED]' : ''
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img 
                src={ellipseIcons[index % ellipseIcons.length]} 
                alt={leader.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="text-[16px] font-medium text-[#1D3557]" style={{ fontFamily: 'fontfamily' }}>
                {leader.name}
              </div>
              <div className="text-[16px] font-medium text-[#8597A8]" style={{ fontFamily: 'fontfamily' }}>
                {leader.role}
              </div>
            </div>
            <div className="text-[16px] font-bold text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
              {leader.score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
