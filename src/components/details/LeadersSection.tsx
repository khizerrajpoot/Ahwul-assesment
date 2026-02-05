import Ellipse118 from '../../assets/Ellipse 118.svg';

interface Leader {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
}

interface LeadersSectionProps {
  leaders: Leader[];
}

export const LeadersSection = ({ leaders }: LeadersSectionProps) => {
  return (
    <div className="mt-6">
      <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#E0E8ED' }}>
        <h3 
          className="text-lg font-bold mb-4"
          style={{ color: '#1D3557' }}
        >
          Leaders
        </h3>
        <div className="flex gap-4" style={{ maxWidth: '600px' }}>
          {leaders.map((leader) => (
            <div key={leader.id} className="flex items-center gap-3 p-4 flex-1" style={{ backgroundColor: '#F5F8FA', borderRadius: '10px' }}>
              <div className="w-12 h-12 flex-shrink-0">
                <img 
                  src={Ellipse118} 
                  alt={leader.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div 
                  className="mb-1"
                  style={{ 
                    color: '#1D3557',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Cairo, sans-serif'
                  }}
                >
                  {leader.name}
                </div>
                <div 
                  style={{ 
                    color: '#8597A8',
                    fontWeight: 500,
                    fontSize: '14px',
                    fontFamily: 'Cairo, sans-serif'
                  }}
                >
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
