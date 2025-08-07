import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componets/Footer'; // Assuming you have a Footer component
import Header from '../componets/Header';

function DefaultTelas () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultTelas;
