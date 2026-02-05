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
    <div className="bg-white rounded-lg border border-gray-200 p-6" style={{ height: '315px' }}>
      <h3 
        className="mb-4"
        style={{
          fontFamily: 'Cairo, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          color: '#1D3557',
        }}
      >
        Recent Activities
      </h3>
    <div className="mb-2" style={{borderBottom:"1px solid #E0E8ED"}}></div>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className="pb-3 flex items-start gap-3"
            style={{
              borderBottom: index < activities.length - 1 ? '1px solid #E0E8ED' : 'none',
            }}
          >
            <div 
              className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
              style={{
                backgroundColor: '#EF4444',
              }}
            />
            <div className="flex-1 flex items-start justify-between gap-2">
              <p 
                className="flex-1"
                style={{
                  fontFamily: 'Cairo, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#1D3557',
                  lineHeight: '1.5',
                  wordBreak: 'break-word',
                }}
              >
                {activity.action}
              </p>
              <p 
                className="flex-shrink-0"
                style={{
                  fontFamily: 'inherit',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#8597A8',
                }}
              >
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
