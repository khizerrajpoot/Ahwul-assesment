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
      <div className="space-y-0 bg-white rounded-[8px] border border-[#E0E8ED]">
        <div className="flex items-stretch">
          <div className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col">
            <div className='px-4 py-2 bg-[#1B35570D] rounded-[10px] flex-1 flex items-center'>
              <h3 className="text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                Objective
              </h3>
            </div>
          </div>
          <div className="flex-1 p-4 bg-white border-l border-[#E0E8ED] flex flex-col">
            <div className='px-4 py-2 bg-[#F5F8FA] rounded-[10px] flex-1'>
              <p className="leading-relaxed text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {overview.objective}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col">
            <div className='px-4 py-2 bg-[#1B35570D] rounded-[10px] flex-1 flex items-center'>
              <h3 className="text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                Implementation Requirements
              </h3>
            </div>
          </div>
          <div className="flex-1 p-4 bg-white border-l border-[#E0E8ED] flex flex-col">
            <div className='px-4 py-2 bg-[#F5F8FA] rounded-[10px] flex-1'>
              <div className="leading-relaxed text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {overview.implementationRequirements.split(/(?=[A-D]\.)/).map((part, index) => {
                  if (index === 0) {
                    return <p key={index} className="mb-2">{part.trim()}</p>;
                  }
                  const match = part.match(/^([A-D])\.\s*(.+)$/);
                  if (match) {
                    const [, letter, text] = match;
                    return (
                      <p key={index} className="mb-2">
                        <span className="font-light">{letter}.</span> {text.trim()}
                      </p>
                    );
                  }
                  return <p key={index} className="mb-2">{part.trim()}</p>;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col">
            <div className='px-4 py-2 bg-[#1B35570D] rounded-[10px] flex-1 flex items-center'>
              <h3 className="text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                Evidence Documents
              </h3>
            </div>
          </div>
          <div className="flex-1 p-4 bg-white border-l border-[#E0E8ED] flex flex-col">
            <div className='px-4 py-2 bg-[#F5F8FA] rounded-[10px] flex-1'>
              <p className="leading-relaxed text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {overview.evidenceDocuments}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col">
            <div className='px-4 py-2 bg-[#1B35570D] rounded-[10px] flex-1 flex items-center'>
              <h3 className="text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                Related Regulations
              </h3>
            </div>
          </div>
          <div className="flex-1 p-4 bg-white border-l border-[#E0E8ED] flex flex-col">
            <div className='px-4 py-2 bg-[#F5F8FA] rounded-[10px] flex-1'>
              <p className="leading-relaxed text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {overview.relatedRegulations}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-stretch">
          <div className="w-32 sm:w-40 flex-shrink-0 p-4 flex flex-col">
            <div className='px-4 py-2 bg-[#1B35570D] rounded-[10px] flex-1 flex items-center'>
              <h3 className="text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                Scope
              </h3>
            </div>
          </div>
          <div className="flex-1 p-4 bg-white border-l border-[#E0E8ED] flex flex-col">
            <div className='px-4 py-2 bg-[#F5F8FA] rounded-[10px] flex-1'>
              <p className="leading-relaxed text-[15px] font-light text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {overview.scope}
              </p>
            </div>
          </div>
        </div>
      </div>

      <LeadersSection leaders={leaders} />
    </div>
  );
};
