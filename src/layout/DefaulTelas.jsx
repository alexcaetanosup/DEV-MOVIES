import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'; // Assuming you have a Footer component
import Header from '../components/Header';

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
