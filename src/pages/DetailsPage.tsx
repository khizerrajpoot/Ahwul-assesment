import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import { progressCategories, categoryDetails } from '../data/mockData';
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

  const category = progressCategories.find(cat => cat.id === id);
  const categoryDetail = id ? categoryDetails[id] : null;
  const displayName = category?.name || categoryDetail?.name || 'Category Details';
  const categoryTag = categoryDetail?.categoryTag || 'Category';
  const description = categoryDetail?.description || 'Category Description';
  const progress = category?.progress || categoryDetail?.progress || 100;
  const evidence = categoryDetail?.evidence || {
    total: 0,
    underReview: 0,
    inProgress: 0,
    completed: 0,
  };
  const overview = categoryDetail?.overview || {
    objective: 'Objective not available.',
    implementationRequirements: 'Implementation requirements not available.',
    evidenceDocuments: 'Evidence documents not available.',
    relatedRegulations: 'Related regulations not available.',
    scope: 'Scope not available.',
  };
  const leaders = categoryDetail?.leaders || [
    {
      id: '1',
      name: 'No Leader Assigned',
      role: 'N/A',
      avatar: 'NA',
      email: 'n/a@company.com',
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F8FB]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-full">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate('/')}
                    className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <img src={DetailIcon} alt="Back" className="w-5 h-5" />
                  </button>
                  <h1 className="text-[15px] font-bold text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {displayName}
                  </h1>
                </div>
              </div>
            </div>
            
            <div className="mb-2 p-4 bg-white border border-[#E0E8ED] rounded-[10px]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 border border-[#E0E8ED] rounded-[30px] text-[12px] font-medium text-[#8597A8]">
                      {categoryTag}
                    </span>
                  </div>
                  <h1 className="mb-2 text-[15px] font-bold text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
                    {displayName}
                  </h1>
                  <p className="text-[14px] text-[#8597A8]">
                    {description}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="relative w-[120px] h-[120px]">
                    <svg width="120" height="120" className="transform -rotate-90">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="12"
                      />
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
                    <div className="absolute inset-0 flex items-center justify-center text-[18px] font-bold text-[#1D3557]">
                      {progress}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg border border-[#E0E8ED] p-4">
                  <div className="flex items-start gap-3">
                    <img src={Detail1Icon} alt="Total Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1 text-[#1D3557]">{evidence.total}</div>
                      <div className="text-sm text-[#8597A8]">Total Evidence</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#E0E8ED] p-4">
                  <div className="flex items-start gap-3">
                    <img src={Detail2Icon} alt="Under Review Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1 text-[#1D3557]">{evidence.underReview}</div>
                      <div className="text-sm text-[#8597A8]">Under Review Evidence</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#E0E8ED] p-4">
                  <div className="flex items-start gap-3">
                    <img src={Detail3Icon} alt="In Progress Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1 text-[#1D3557]">{evidence.inProgress}</div>
                      <div className="text-sm text-[#8597A8]">In Progress Evidence</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-[#E0E8ED] p-4">
                  <div className="flex items-start gap-3">
                    <img src={Detail4Icon} alt="Completed Evidence" className="w-6 h-6 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-2xl font-bold mb-1 text-[#1D3557]">{evidence.completed}</div>
                      <div className="text-sm text-[#8597A8]">Completed Evidence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
