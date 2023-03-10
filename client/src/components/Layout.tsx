import React from 'react';
import Navbar from './Navbar/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-full flex flex-row gap-10">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
