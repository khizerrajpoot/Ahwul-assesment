import { ChevronDown, Search } from 'lucide-react';
import NotificationIcon from '../../assets/hugeicons_notification-03.svg';
import Ellipse118 from '../../assets/Ellipse 118.svg';

export const Header = () => {
  return (
    <div className="bg-white border-b px-6 py-4" style={{ borderColor: '#E0E8ED' }}>
      <div className="flex items-center justify-between">
        <div className="relative" style={{ width: '400px' }}>
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-2 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <img
              src={NotificationIcon}
              alt="Notifications"
              className="w-6 h-6"
              style={{
                filter: 'brightness(0) saturate(100%) invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(1.2) contrast(0.8)',
              }}
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>

          <div
            className="flex items-center gap-3 cursor-pointer"
            style={{
              backgroundColor: '#F9FAFA',
              width: '138px',
              height: '32px',
              borderRadius: '30px',
              opacity: 1,
              padding: '0 8px',
            }}
          >
            <div className="w-6 h-6 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={Ellipse118}
                alt="Mohamed"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-900 whitespace-nowrap">Mohamed</span>
            <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
