import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Navbar from '../Navbar';

const AppLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
