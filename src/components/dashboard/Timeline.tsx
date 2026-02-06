import type { TimelineItem } from '../../types';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500';
      case 'in-progress':
        return 'border-blue-500';
      default:
        return 'border-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Project Timeline</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={item.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${getStatusColor(
                  item.status
                )} bg-white`}
              >
                {getStatusIcon(item.status)}
              </div>
              {index < items.length - 1 && (
                <div className="w-0.5 h-16 bg-gray-200 mt-2" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <span
                className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded ${
                  item.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : item.status === 'in-progress'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {item.status.replace('-', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
