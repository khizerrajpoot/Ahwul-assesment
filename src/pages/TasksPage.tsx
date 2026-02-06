import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

export const TasksPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tasks</h1>
          <p className="text-gray-600">
            View and manage all tasks across the organization. Track task status, assignments, and deadlines.
          </p>
        </div>
      </div>
    </div>
  );
};
