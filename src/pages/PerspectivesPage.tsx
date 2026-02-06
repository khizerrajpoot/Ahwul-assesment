import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

export const PerspectivesPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Perspectives</h1>
          <p className="text-gray-600">
            Manage and view different organizational perspectives. Track progress and performance across various strategic viewpoints.
          </p>
        </div>
      </div>
    </div>
  );
};
