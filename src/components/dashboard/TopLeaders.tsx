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
      <h3 
        className="mb-4"
        style={{
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: '16px',
          color: '#1D3557',
        }}
      >
        Top Performing Perspective Leaders
      </h3>
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div 
            key={leader.id} 
            className="flex items-center gap-4 pb-4"
            style={{
              borderBottom: index < leaders.length - 1 ? '1px solid #E0E8ED' : 'none',
            }}
          >
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <img 
                src={ellipseIcons[index % ellipseIcons.length]} 
                alt={leader.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <div 
                style={{
                  fontFamily: 'fontfamily',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#1D3557',
                }}
              >
                {leader.name}
              </div>
              <div 
                style={{
                  fontFamily: 'fontfamily',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#8597A8',
                }}
              >
                {leader.role}
              </div>
            </div>
            <div 
              style={{
                fontFamily: 'Cairo, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                color: '#1D3557',
              }}
            >
              {leader.score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
