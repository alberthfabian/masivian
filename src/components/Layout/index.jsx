import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './style.scss';

const Layout = ({ children }) => (
  <div className='container'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;