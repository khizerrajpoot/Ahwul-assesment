import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { progressCategories } from '../data/mockData';
import DetailIcon from '../assets/detailicon.svg';
import Detail1Icon from '../assets/detail1.svg';
import Detail2Icon from '../assets/detail2.svg';
import Detail3Icon from '../assets/detail3.svg';
import Detail4Icon from '../assets/detail4.svg';
import { TabButtons } from '../components/details/TabButtons';
import { OverviewContent } from '../components/details/OverviewContent';
import { EvidenceContent } from '../components/details/EvidenceContent';

export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence'>('overview');

  // Find category from progressCategories - only for the title
  const category = progressCategories.find(cat => cat.id === id);
  
  // Only the title is dynamic, everything else is hardcoded
  const displayName = category?.name || 'Category Details';
  
  // Hardcoded values for all categories
  const categoryTag = 'Strategy & Planning';
  const description = 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals';
  const progress = 100;
  const evidence = {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  };
  const overview = {
    objective: 'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
    implementationRequirements: 'Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following: A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy. B. Strategic Initiatives, Programs, And Performance Indicators. C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives. D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
    evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    scope: 'All Government Entities.',
  };
  const leaders = [
    {
      id: '1',
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: 'AA',
      email: 'ahmed.ali@company.com',
    },
    {
      id: '2',
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: 'AA',
      email: 'ahmed.ali@company.com',
    },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F5F8FB' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Details Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-full">
            {/* Top Header with Back Arrow, Title, and Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate('/')}
                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <img src={DetailIcon} alt="Back" className="w-5 h-5" />
                  </button>
                  <h1 
                    style={{ 
                      color: '#1D3557',
                      fontSize: '15px',
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {displayName}
                  </h1>
                </div>
             
              </div>
            </div>
            
            {/* Card with Category Tag, Title, Description, and Progress */}
            <div 
              className="mb-2 p-4"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E0E8ED',
                borderWidth: '1px',
                borderRadius: '10px',
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="mb-3">
                    <span 
                      className="inline-block px-3 py-1"
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: '#E0E8ED',
                        borderWidth: '1px',
                        borderRadius: '30px',
                        color: '#8597A8',
                        fontWeight: 500,
                        fontSize: '12px',
                      }}
                    >
                      {categoryTag}
                    </span>
                  </div>
                  <h1 
                    className="mb-2"
                    style={{ 
                      color: '#1D3557',
                      fontSize: '15px',
                      fontFamily: 'Cairo, sans-serif',
                      fontWeight: 700,
                    }}
                  >
                    {displayName}
                  </h1>
                  <p 
                    style={{ 
                      color: '#8597A8',
                      fontSize: '14px',
                    }}
                  >
                    {description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="relative" style={{ width: '120px', height: '120px' }}>
                    <svg width="120" height="120" className="transform -rotate-90">
                      {/* Background circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="12"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#1EA54E"
                        strokeWidth="12"
                        strokeDasharray={`${2 * Math.PI * 50}`}
                        strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    {/* Percentage text */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        color: '#1D3557',
                        fontFamily: 'inherit',
                        fontWeight: 700,
                        fontSize: '24px',
                      }}
                    >
                      {progress}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Evidence Summary Cards */}
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Total Evidence */}
                <div className="bg-white rounded-lg border p-4" style={{ borderColor: '#E0E8ED', borderWidth: '1px' }}>
                  <div className="flex items-start gap-3">
                    <img src={Detail1Icon} alt="Total Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1" style={{ color: '#1D3557' }}>{evidence.total}</div>
                      <div className="text-sm" style={{ color: '#8597A8' }}>Total Evidence</div>
                    </div>
                  </div>
                </div>

                {/* Under Review Evidence */}
                <div className="bg-white rounded-lg border p-4" style={{ borderColor: '#E0E8ED', borderWidth: '1px' }}>
                  <div className="flex items-start gap-3">
                    <img src={Detail2Icon} alt="Under Review Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1" style={{ color: '#1D3557' }}>{evidence.underReview}</div>
                      <div className="text-sm" style={{ color: '#8597A8' }}>Under Review Evidence</div>
                    </div>
                  </div>
                </div>

                {/* In Progress Evidence */}
                <div className="bg-white rounded-lg border p-4" style={{ borderColor: '#E0E8ED', borderWidth: '1px' }}>
                  <div className="flex items-start gap-3">
                    <img src={Detail3Icon} alt="In Progress Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1" style={{ color: '#1D3557' }}>{evidence.inProgress}</div>
                      <div className="text-sm" style={{ color: '#8597A8' }}>In Progress Evidence</div>
                    </div>
                  </div>
                </div>

                {/* Completed Evidence */}
                <div className="bg-white rounded-lg border p-4" style={{ borderColor: '#E0E8ED', borderWidth: '1px' }}>
                  <div className="flex items-start gap-3">
                    <img src={Detail4Icon} alt="Completed Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1" style={{ color: '#1D3557' }}>{evidence.completed}</div>
                      <div className="text-sm" style={{ color: '#8597A8' }}>Completed Evidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs and Tab Content - Full Width */}
            <div className="w-auto">
              <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />

              {activeTab === 'overview' ? (
                <OverviewContent overview={overview} leaders={leaders} />
              ) : (
                <EvidenceContent />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
