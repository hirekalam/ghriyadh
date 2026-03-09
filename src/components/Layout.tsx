import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#0B3A2E]">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
};

export default Layout;
