import { CheckCircle2, AlertCircle } from 'lucide-react';

export const AuditReadiness = () => {
  const readinessScore = 87;
  const items = [
    { label: 'Documentation Complete', status: true },
    { label: 'Evidence Collected', status: true },
    { label: 'Reviews Completed', status: true },
    { label: 'Compliance Verified', status: false },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Audit Readiness</h2>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Score</span>
          <span className="text-2xl font-bold text-gray-900">{readinessScore}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${readinessScore}%` }}
          />
        </div>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {item.status ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <AlertCircle className="w-5 h-5 text-yellow-500" />
            )}
            <span className="text-sm text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
