import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
