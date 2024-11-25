import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  UserCircle,
  MessageSquare,
  Wallet,
  Settings,
  X,
  Crown
} from 'lucide-react';
import { useSidebarStore } from '../store/sidebarStore';
import { useAuthStore } from '../store/authStore';

const menuItems = [
  { path: '/dashboard', icon: LayoutDashboard, label: 'ダッシュボード', requiresAuth: true },
  { path: '/campaign-management', icon: Briefcase, label: '案件管理', requiresAuth: true },
  { path: '/profile', icon: UserCircle, label: 'プロフィール', requiresAuth: true },
  { path: '/messages', icon: MessageSquare, label: 'メッセージ', requiresAuth: true },
  { path: '/earnings', icon: Wallet, label: '報酬管理', requiresAuth: true },
  { path: '/settings', icon: Settings, label: '設定', requiresAuth: true },
];

const Sidebar = () => {
  const location = useLocation();
  const { isOpen, toggleSidebar } = useSidebarStore();
  const { user, isAuthenticated } = useAuthStore();

  const filteredMenuItems = menuItems.filter(item => 
    !item.requiresAuth || (item.requiresAuth && isAuthenticated)
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-50 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:z-0 border-r border-gray-200`}
      >
        {/* Mobile Header */}
        <div className="p-4 flex justify-between items-center border-b md:hidden">
          <div className="flex items-center space-x-2">
            <Crown className="w-6 h-6 text-purple-600" />
            <span className="font-bold text-purple-600">VIPキャスティング</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200">
          {isAuthenticated && user ? (
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <UserCircle className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-3 text-gray-700 hover:text-purple-600"
            >
              <UserCircle className="w-6 h-6" />
              <span>ログイン</span>
            </Link>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-1">
            {filteredMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-purple-50 text-purple-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;