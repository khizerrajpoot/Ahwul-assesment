import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface MonthlyPerformanceChartProps {
  data: { month: string; value: number }[];
}

export const MonthlyPerformanceChart = ({ data }: MonthlyPerformanceChartProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6" style={{ height: '410px' }}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">12-Month Performance</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
              <stop offset="100%" stopColor="#0078D7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            stroke="#E6EDF5"
            tick={{
              fill: '#8597A8',
              fontSize: 12,
              fontWeight: 400,
              fontFamily: 'IBM Plex Sans Arabic, sans-serif',
            }}
          />
          <YAxis
            domain={[0, 100]}
            stroke="#E6EDF5"
            tick={{
              fill: '#8597A8',
              fontSize: 12,
              fontWeight: 400,
              fontFamily: 'IBM Plex Sans Arabic, sans-serif',
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[4, 4, 4, 4]}
            style={{
              filter: 'drop-shadow(0px 2px 4px rgba(0, 120, 215, 0.3))',
            }}
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
