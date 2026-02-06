import { HorizontalTimeline } from '../components/dashboard/HorizontalTimeline';
import { SummaryCards } from '../components/dashboard/SummaryCards';
import { ProgressStatusGrid } from '../components/dashboard/ProgressStatusGrid';
import { GaugeChart } from '../components/dashboard/GaugeChart';
import { MonthlyPerformanceChart } from '../components/dashboard/MonthlyPerformanceChart';
import { TopLeaders } from '../components/dashboard/TopLeaders';
import { RecentActivitiesWidget } from '../components/dashboard/RecentActivitiesWidget';
import { AuditReadinessWidget } from '../components/dashboard/AuditReadinessWidget';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import {
  summaryCards,
  timelineMilestones,
  progressCategories,
  topLeaders,
  recentActivitiesList,
  monthlyPerformanceData,
} from '../data/mockData';

export const Dashboard = () => {
  const complianceScore = 65;
  const auditReadinessScore = 80;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-full">
            <div className="mb-6">
              <HorizontalTimeline
                milestones={timelineMilestones}
              />
            </div>

            <div className="mb-6">
              <SummaryCards cards={summaryCards} />
            </div>

            <div className="mb-6">
              <ProgressStatusGrid categories={progressCategories} />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="space-y-6">
                <GaugeChart
                  value={complianceScore}
                  label="Overall Compliance Score"
                  subLabel="Basic Standards 2025"
                  color="#DB1F26"
                />
              </div>

              <div className="h-[300px]">
                <TopLeaders leaders={topLeaders} />
              </div>

              <div className="space-y-6">
                <RecentActivitiesWidget activities={recentActivitiesList} />
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 mt-6">
              <div className='w-full xl:w-[68%]'>
                <MonthlyPerformanceChart data={monthlyPerformanceData} />
              </div>
              <div className='w-full xl:w-[33%]'>
                <AuditReadinessWidget
                  score={auditReadinessScore}
                  overdueStds={12}
                  missingEvidence={5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
