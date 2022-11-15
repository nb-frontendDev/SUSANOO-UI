import React, { useState } from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import ComponentLibrary from './components/pages/components/ComponentLibrary';
import PageLibrary from './components/pages/pages/PageLibrary';
import Modal from './components/atoms/modal/Modal';

function App() {

  const [ show, setShow ] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setShow(true)}>Click</button>
        <Modal show={show} setShow={setShow} />
      </div>
      <Home />
      
    </>
  );
}

export default App;
