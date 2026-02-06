import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

export const UsersPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Users & Roles</h1>
          <p className="text-gray-600">
            Manage user accounts and roles within the organization. Assign permissions and control access levels.
          </p>
        </div>
      </div>
    </div>
  );
};
