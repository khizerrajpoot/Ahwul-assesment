import { LeadersSection } from './LeadersSection';

interface OverviewContentProps {
  overview: {
    objective: string;
    implementationRequirements: string;
    evidenceDocuments: string;
    relatedRegulations: string;
    scope: string;
  };
  leaders: Array<{
    id: string;
    name: string;
    role: string;
    avatar: string;
    email: string;
  }>;
}

export const OverviewContent = ({ overview, leaders }: OverviewContentProps) => {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-0" style={{ backgroundColor: '#FFFFFF',borderRadius: '8px' ,border: '1px solid #E0E8ED'}}>
        {/* Objective */}
        <div className="flex items-stretch">
          <div 
            className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col"
          >
            <div className='px-4 py-2 bg-[#1B35570D]' style={{ borderRadius: '10px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <h3 
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                Objective
              </h3>
            </div>
          </div>
          <div 
            className="flex-1 p-4 bg-white border-l flex flex-col"
            style={{ borderColor: '#E0E8ED' }}
          >
            <div className='px-4 py-2 bg-[#F5F8FA]' style={{ borderRadius: '10px', flex: 1 }}>
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                {overview.objective}
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Requirements */}
        <div className="flex items-stretch">
          <div 
            className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col"
          >
            <div className='px-4 py-2 bg-[#1B35570D]' style={{ borderRadius: '10px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <h3 
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                Implementation Requirements
              </h3>
            </div>
          </div>
          <div 
            className="flex-1 p-4 bg-white border-l flex flex-col"
            style={{ borderColor: '#E0E8ED' }}
          >
            <div className='px-4 py-2 bg-[#F5F8FA]' style={{ borderRadius: '10px', flex: 1 }}>
              <div 
                className="leading-relaxed"
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                {overview.implementationRequirements.split(/(?=[A-D]\.)/).map((part, index) => {
                  if (index === 0) {
                    return <p key={index} className="mb-2">{part.trim()}</p>;
                  }
                  const match = part.match(/^([A-D])\.\s*(.+)$/);
                  if (match) {
                    const [, letter, text] = match;
                    return (
                      <p key={index} className="mb-2">
                        <span style={{ fontWeight: 300 }}>{letter}.</span> {text.trim()}
                      </p>
                    );
                  }
                  return <p key={index} className="mb-2">{part.trim()}</p>;
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Documents */}
        <div className="flex items-stretch">
          <div 
            className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col"
          >
            <div className='px-4 py-2 bg-[#1B35570D]' style={{ borderRadius: '10px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <h3 
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                Evidence Documents
              </h3>
            </div>
          </div>
          <div 
            className="flex-1 p-4 bg-white border-l flex flex-col"
            style={{ borderColor: '#E0E8ED' }}
          >
            <div className='px-4 py-2 bg-[#F5F8FA]' style={{ borderRadius: '10px', flex: 1 }}>
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                {overview.evidenceDocuments}
              </p>
            </div>
          </div>
        </div>

        {/* Related Regulations */}
        <div className="flex items-stretch">
          <div 
            className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col"
          >
            <div className='px-4 py-2 bg-[#1B35570D]' style={{ borderRadius: '10px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <h3 
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                Related Regulations
              </h3>
            </div>
          </div>
          <div 
            className="flex-1 p-4 bg-white border-l flex flex-col"
            style={{ borderColor: '#E0E8ED' }}
          >
            <div className='px-4 py-2 bg-[#F5F8FA]' style={{ borderRadius: '10px', flex: 1 }}>
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                {overview.relatedRegulations}
              </p>
            </div>
          </div>
        </div>

        {/* Scope */}
        <div className="flex items-stretch">
          <div 
            className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col"
          >
            <div className='px-4 py-2 bg-[#1B35570D]' style={{ borderRadius: '10px', flex: 1, display: 'flex', alignItems: 'center' }}>
              <h3 
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                Scope
              </h3>
            </div>
          </div>
          <div 
            className="flex-1 p-4 bg-white border-l flex flex-col"
            style={{ borderColor: '#E0E8ED' }}
          >
            <div className='px-4 py-2 bg-[#F5F8FA]' style={{ borderRadius: '10px', flex: 1 }}>
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#1D3557',
                  fontWeight: 300,
                  fontSize: '15px',
                  fontFamily: 'Cairo, sans-serif',
                }}
              >
                {overview.scope}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaders Section - Inside Overview Tab */}
      <LeadersSection leaders={leaders} />
    </div>
  );
};
