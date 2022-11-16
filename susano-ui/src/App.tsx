import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import Home from './components/pages/home/Home';
import ComponentLibrary from './components/pages/components/ComponentLibrary';
import PageLibrary from './components/pages/pages/PageLibrary';

import './App.css';


function App() {
  return (

      <BrowserRouter>
          <Home />
          <ComponentLibrary />
          <PageLibrary />
      </BrowserRouter>

  );
}

export default App;
