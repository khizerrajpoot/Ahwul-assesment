import type { EvidenceCard } from '../../data/mockData';
import { FileText, Clock, Eye, CheckCircle2 } from 'lucide-react';

interface EvidenceSummaryProps {
  evidence: EvidenceCard[];
}

const iconMap = {
  total: FileText,
  'in-progress': Clock,
  'under-review': Eye,
  completed: CheckCircle2,
};

const colorMap = {
  total: 'bg-blue-50 text-blue-600 border-blue-200',
  'in-progress': 'bg-yellow-50 text-yellow-600 border-yellow-200',
  'under-review': 'bg-purple-50 text-purple-600 border-purple-200',
  completed: 'bg-green-50 text-green-600 border-green-200',
};

export const EvidenceSummary = ({ evidence }: EvidenceSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {evidence.map((item, index) => {
        const Icon = iconMap[item.type];
        const colorClass = colorMap[item.type];

        return (
          <div
            key={index}
            className={`bg-white rounded-lg border-2 p-6 ${colorClass}`}
          >
            <div className="flex items-center justify-between mb-4">
              <Icon className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-1">{item.count}</div>
            <div className="text-sm font-medium">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};
