import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import CompanyLoginForm from './components/CompanyLoginForm';
import RegistrationPage from './pages/RegistrationPage';
import CompanyRegistrationPage from './pages/CompanyRegistrationPage';
import PrivateRoute from './components/PrivateRoute';
// ... その他のインポート

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex pt-16"> {/* Added pt-16 for navbar spacing */}
        <Sidebar />
        <main className="flex-1 w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/company/login" element={<CompanyLoginForm />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/company/register" element={<CompanyRegistrationPage />} />
            {/* ... その他のルート */}
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;