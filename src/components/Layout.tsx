import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout; 