import type { Activity } from '../../data/mockData';
import { FileText, Eye, CheckCircle, Plus } from 'lucide-react';

interface ActivityFeedProps {
  activities: Activity[];
}

const activityIcons = {
  update: FileText,
  review: Eye,
  complete: CheckCircle,
  create: Plus,
};

const activityColors = {
  update: 'bg-blue-100 text-blue-600',
  review: 'bg-purple-100 text-purple-600',
  complete: 'bg-green-100 text-green-600',
  create: 'bg-yellow-100 text-yellow-600',
};

export const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activityIcons[activity.type as keyof typeof activityIcons] || FileText;
          const colorClass =
            activityColors[activity.type as keyof typeof activityColors] || 'bg-gray-100 text-gray-600';

          return (
            <div key={activity.id} className="flex items-start gap-4">
              <div className={`p-2 rounded-lg ${colorClass}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-500">{activity.user}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
