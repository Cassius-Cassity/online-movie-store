import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Browse from './components/Browse';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/browse' element={<Browse/>}/>
        </Routes>
    </div>
  );
}

export default App;
