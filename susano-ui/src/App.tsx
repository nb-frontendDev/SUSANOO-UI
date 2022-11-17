import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';


import Home from './components/pages/home/Home';
import ComponentLibrary from './components/pages/components/ComponentLibrary';
import PageLibrary from './components/pages/pages/PageLibrary';

import './App.css';
import NotFound from './components/pages/notFound/NotFound';
import SwichPage from './components/pages/pages/switch/SwichPage';


function App() {
  return (
      <>
          <Routes>
              <Route index element={<Home />} />
              <Route path='/components' element={<ComponentLibrary />} />
              <Route path='/components/toggle' element={<SwichPage />} />
              <Route path='/pages' element={<PageLibrary />} />
              
              <Route path='*' element={<NotFound />} />
          </Routes>
      </>
  );
}

export default App;
