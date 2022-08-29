import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  
  return (
    <div className="movie-container">
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
