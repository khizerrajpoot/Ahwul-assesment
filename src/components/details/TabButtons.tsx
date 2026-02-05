interface TabButtonsProps {
  activeTab: 'overview' | 'evidence';
  onTabChange: (tab: 'overview' | 'evidence') => void;
}

export const TabButtons = ({ activeTab, onTabChange }: TabButtonsProps) => {
  return (
    <div className="mb-6">
      <div className='w-[225px]' style={{backgroundColor: '#E0E8ED80', borderRadius: '8px'}}>
        <div className="flex gap-2 p-1">
          <button
            onClick={() => onTabChange('overview')}
            className="px-[30px] py-[0.5px] transition-colors"
            style={{
              backgroundColor: activeTab === 'overview' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'overview' ? '#1D3557' : '#8597A8',
              fontSize: '14px',
              fontWeight: 300,
              fontFamily: 'Cairo, sans-serif',
              borderRadius: activeTab === 'overview' ? '8px' : '0px',
              borderTopLeftRadius: '6px',
              borderBottomLeftRadius: '6px',
              borderTopRightRadius: activeTab === 'overview' ? '6px' : '0px',
              borderBottomRightRadius: activeTab === 'overview' ? '6px' : '0px',
            }}
          >
            Overview
          </button>
          <button
            onClick={() => onTabChange('evidence')}
            className="px-4 py-3 transition-colors"
            style={{
              backgroundColor: activeTab === 'evidence' ? '#FFFFFF' : 'transparent',
              color: activeTab === 'evidence' ? '#1D3557' : '#8597A8',
              fontSize: '14px',
              fontWeight: 300,
              fontFamily: 'Cairo, sans-serif',
              borderRadius: activeTab === 'evidence' ? '6px' : '0px',
              borderTopRightRadius: '6px',
              borderBottomRightRadius: '6px',
              borderTopLeftRadius: activeTab === 'evidence' ? '6px' : '0px',
              borderBottomLeftRadius: activeTab === 'evidence' ? '6px' : '0px',
            }}
          >
            Evidence
          </button>
        </div>
      </div>
    </div>
  );
};
