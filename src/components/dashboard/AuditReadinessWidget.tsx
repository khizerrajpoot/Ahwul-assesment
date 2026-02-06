import { GaugeChart } from './GaugeChart';

interface AuditReadinessWidgetProps {
  score: number;
  overdueStds: number;
  missingEvidence: number;
}

export const AuditReadinessWidget = ({ score, overdueStds, missingEvidence }: AuditReadinessWidgetProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Audit Readiness</h3>
      <div className="flex flex-col items-center mb-4">
        <GaugeChart value={score} label="" subLabel="Readiness Level" color="#10b981" showContainer={false} />
      </div>
      <div className="flex flex-row justify-between items-center align-center pt-4 border-t border-gray-200">
        <div className="flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold text-[#1D3557]">
            {overdueStds}
          </span>
          <span className="text-[14px] font-normal text-[#8597A8]">
            Overdue Stds
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold text-[#1D3557]">
            {missingEvidence}
          </span>
          <span className="text-[14px] font-normal text-[#8597A8]">
            Missing Evidence
          </span>
        </div>
      </div>
    </div>
  );
};
