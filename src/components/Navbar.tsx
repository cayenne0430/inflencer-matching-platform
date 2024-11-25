import React from 'react';
import { Crown, Menu, LogOut, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSidebarStore } from '../store/sidebarStore';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const { toggleSidebar } = useSidebarStore();
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-50 shadow-sm fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="mr-4 text-gray-600 hover:text-gray-900 md:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-purple-600">
                <Crown className="w-6 h-6" />
                <span>VIPキャスティング</span>
              </Link>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/campaigns" 
                className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
              >
                案件を探す
              </Link>
              {isAuthenticated && (
                <>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                  >
                    ダッシュボード
                  </Link>
                  <Link 
                    to="/messages" 
                    className="text-gray-600 hover:text-purple-600 font-medium transition-colors"
                  >
                    メッセージ
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-purple-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">ログアウト</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                ログイン
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;