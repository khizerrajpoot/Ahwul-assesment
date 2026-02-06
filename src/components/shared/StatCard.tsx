import type { StatCard as StatCardType } from '../../types';
import { TrendingUp, TrendingDown, Folder, CheckCircle, Clock } from 'lucide-react';

interface StatCardProps {
  stat: StatCardType;
}

const iconMap = {
  folder: Folder,
  'check-circle': CheckCircle,
  'trending-up': TrendingUp,
  clock: Clock,
};

export const StatCard = ({ stat }: StatCardProps) => {
  const Icon = iconMap[stat.icon as keyof typeof iconMap] || Folder;
  const isPositive = stat.trend === 'up';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
            )}
            <span
              className={`text-sm font-medium ${
                isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last month</span>
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
};
