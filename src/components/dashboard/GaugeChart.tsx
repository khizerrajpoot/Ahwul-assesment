import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface GaugeChartProps {
  value: number;
  label: string;
  subLabel?: string;
  color?: string;
  showContainer?: boolean;
}

export const GaugeChart = ({ value, label, subLabel, color = '#ef4444', showContainer = true }: GaugeChartProps) => {
  const data = [
    { name: 'Progress', value: value },
    { name: 'Remaining', value: 100 - value },
  ];

  const COLORS = [color, '#e5e7eb'];

  const content = (
    <>
      {label && (
        <h3 className="mb-4 text-base sm:text-[17px] md:text-[17px] lg:text-[17px] font-bold text-[#1D3557]">
          {label}
        </h3>
      )}
      <div className="flex flex-col items-center relative">
        <ResponsiveContainer width={258} height={225}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius={115}
              outerRadius={130}
             
              dataKey="value"
              cornerRadius={20}
            >
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute text-center bottom-5 left-1/2 -translate-x-1/2 w-full">
          <div className="text-[44px] font-bold text-[#1D3557]">
            {value}%
          </div>
          {subLabel && (
            <div className="text-xs sm:text-sm md:text-[14px] lg:text-[14px] font-normal text-[#8597A8]">
              {subLabel}
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (showContainer) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {content}
      </div>
    );
  }

  return <div>{content}</div>;
};
