interface Activity {
  id: string;
  action: string;
  user: string;
  timestamp: string;
}

interface RecentActivitiesWidgetProps {
  activities: Activity[];
}

export const RecentActivitiesWidget = ({ activities }: RecentActivitiesWidgetProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-[315px]">
      <h3 className="mb-4 text-[16px] font-bold text-[#1D3557]" style={{ fontFamily: 'Cairo, sans-serif' }}>
        Recent Activities
      </h3>
      <div className="mb-2 border-b border-[#E0E8ED]"></div>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className={`pb-3 flex items-start gap-3 ${
              index < activities.length - 1 ? 'border-b border-[#E0E8ED]' : ''
            }`}
          >
            <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2 bg-[#EF4444]" />
            <div className="flex-1 flex items-start justify-between gap-2">
              <p className="flex-1 text-[16px] font-medium text-[#1D3557] leading-[1.5] break-words" style={{ fontFamily: 'Cairo, sans-serif' }}>
                {activity.action}
              </p>
              <p className="flex-shrink-0 text-[12px] font-normal text-[#8597A8]">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
