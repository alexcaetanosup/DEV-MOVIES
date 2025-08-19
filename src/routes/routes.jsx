import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import DefaultLayout from '../layout/DefaulLayout';
import DefaultTelas from '../layout/DefaulTelas';
import Footer from '../components/Footer'; // Assuming you have a Footer component
import Detail from '../containers/Home/Detail';

function Router () {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
      </Route>
      <Route element={<DefaultTelas />}>
        <Route path='/footer' element={<Footer />} />
        <Route path='/detalhe/:id' element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default Router;
