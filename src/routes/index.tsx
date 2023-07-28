import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from '../components/layouts/AppLayout';

const Home = React.lazy(() => import('@/pages/Home'));
const MyRecord = React.lazy(() => import('@/pages/MyRecord'));
const Recommended = React.lazy(() => import('@/pages/Recommended'));

const RouterView = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/my-record">
            <Route index element={<MyRecord />} />
          </Route>
          <Route path="/recommended">
            <Route index element={<Recommended />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterView;
