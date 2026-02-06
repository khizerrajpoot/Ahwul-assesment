import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';

export const DocumentsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Documents</h1>
          <p className="text-gray-600">
            Access and manage all organizational documents. View document status, versions, and related information.
          </p>
        </div>
      </div>
    </div>
  );
};
