// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

import Aprende from './pages/Aprende';
import Prueba from './pages/Prueba';
import Juega from './pages/Juega';
import Blog from './pages/Blog';


function App() {
  return (
    <BrowserRouter>
      <Menu currentPage = "Aprende" >
      <Routes>
        <Route path='/' element={<Aprende/>}/>
        <Route path='/aprende' element={<Aprende/>}/>
        <Route path='/prueba' element={<Prueba/>}/>
        <Route path='/juega' element={<Juega/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      </Menu>
    </BrowserRouter>

  );
}

export default App;
