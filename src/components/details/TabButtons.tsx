interface TabButtonsProps {
  activeTab: 'overview' | 'evidence';
  onTabChange: (tab: 'overview' | 'evidence') => void;
}

export const TabButtons = ({ activeTab, onTabChange }: TabButtonsProps) => {
  return (
    <div className="mb-6">
      <div className='w-[225px] bg-[#E0E8ED80] rounded-[8px]'>
        <div className="flex gap-2 p-1">
          <button
            onClick={() => onTabChange('overview')}
            className={`px-[30px] py-[0.5px] transition-colors text-[14px] font-light rounded-tl-[6px] rounded-bl-[6px] ${
              activeTab === 'overview' 
                ? 'bg-white text-[#1D3557] rounded-[8px] rounded-tr-[6px] rounded-br-[6px]' 
                : 'bg-transparent text-[#8597A8]'
            }`}
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            Overview
          </button>
          <button
            onClick={() => onTabChange('evidence')}
            className={`px-4 py-3 transition-colors text-[14px] font-light rounded-tr-[6px] rounded-br-[6px] ${
              activeTab === 'evidence' 
                ? 'bg-white text-[#1D3557] rounded-[6px] rounded-tl-[6px] rounded-bl-[6px]' 
                : 'bg-transparent text-[#8597A8]'
            }`}
            style={{ fontFamily: 'Cairo, sans-serif' }}
          >
            Evidence
          </button>
        </div>
      </div>
    </div>
  );
};
