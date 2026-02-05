import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../../assets/hugeicons_home-09 (1).svg';
import MedicalFileIcon from '../../assets/hugeicons_medical-file.svg';
import FileIcon from '../../assets/hugeicons_file-01.svg';
import ChartIcon from '../../assets/hugeicons_chart-bar-line.svg';
import UsersIcon from '../../assets/hugeicons_user-multiple-02.svg';
import ProfileIcon from '../../assets/hugeicons_profile-02.svg';
import TahwulLogo from '../../assets/Tahwul_01@3x 1.svg';
import ArrowLeftIcon from '../../assets/hugeicons_arrow-left-05.svg';

export const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: HomeIcon },
    { path: '/perspectives', label: 'Perspectives', icon: ProfileIcon },
    { path: '/tasks', label: 'Tasks', icon: MedicalFileIcon },
    { path: '/documents', label: 'Documents', icon: FileIcon },
    { path: '/reports', label: 'Reports', icon: ChartIcon },
    { path: '/users', label: 'Users & Roles', icon: UsersIcon },
  ];

  return (
    <div 
      className={`bg-[#1D3557] min-h-screen flex flex-col relative transition-all duration-300 w-20 ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}`}
    >
      <div className="relative" style={{ height: '60px' }}>
        <img
          src={TahwulLogo}
          alt="TAHWUL"
          className={`hidden lg:block absolute transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}
          style={{
            width: '100px',
            height: '40px',
            top: '10px',
            left: '23px',
          }}
        />
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex absolute w-8 h-8 bg-white rounded-full items-center justify-center shadow-md hover:shadow-lg transition-shadow z-10"
          style={{
            top: '10px',
            right: '-16px',
          }}
          aria-label="Collapse sidebar"
        >
          <img
            src={ArrowLeftIcon}
            alt="Toggle sidebar"
            className="w-4 h-4"
            style={{
              transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s',
              filter: 'brightness(0) saturate(100%) invert(40%)',
            }}
          />
        </button>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center mb-1 transition-colors ${
                isActive ? 'text-white bg-[#98AEC01A]' : 'hover:bg-[#2a4a6f] hover:text-white'
              } justify-center ${isCollapsed ? 'lg:justify-center' : 'lg:justify-start'}`}
              style={
                isActive
                  ? {
                      height: '40px',
                      borderRadius: '8px',
                      padding: '10px',
                      gap: '10px',
                      opacity: 1,
                    }
                  : {
                      padding: '10px',
                      gap: '10px',
                    }
              }
            >
              <img
                src={item.icon}
                alt={item.label}
                className="flex-shrink-0"
                style={{
                  width: '16px',
                  height: '16px',
                  opacity: 1,
                  filter: isActive
                    ? 'brightness(0) invert(1)' 
                    : 'none', 
                }}
              />
              <span
                className={`hidden lg:inline font-medium capitalize transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}
                style={{
                  color: isActive ? '#FFFFFF' : '#7B9FC3',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '16px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                  textTransform: 'capitalize',
                }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
