import type { Perspective } from '../../data/mockData';

interface ProgressByPerspectiveProps {
  perspectives: Perspective[];
}

export const ProgressByPerspective = ({ perspectives }: ProgressByPerspectiveProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Progress by Perspective</h2>
      <div className="space-y-4">
        {perspectives.map((perspective) => (
          <div key={perspective.id}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                {perspective.name}
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {perspective.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${perspective.color} h-2.5 rounded-full transition-all duration-300`}
                style={{ width: `${perspective.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
