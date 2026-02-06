interface StatusCircleProps {
  number: number;
  status: 'not-started' | 'in-progress' | 'completed' | 'partially-uploaded' | 'fully-uploaded' | 'delayed';
}

const statusColors = {
  'not-started': '#9CA3AF',
  'in-progress': '#FBBF24',
  'completed': '#10B981',
  'partially-uploaded': '#3B82F6',
  'fully-uploaded': '#1E40AF',
  'delayed': '#EF4444',
};

export const StatusCircle = ({ number, status }: StatusCircleProps) => {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white text-xs font-medium w-6 h-6"
      style={{
        backgroundColor: statusColors[status],
      }}
    >
      {number}
    </div>
  );
};
