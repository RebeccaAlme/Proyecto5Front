import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Aboutus from './components/aboutus/aboutus';
import Productos from './components/productos/productos';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='aboutus' element={<Aboutus/>} />
          <Route path='productos' element={<Productos/>} />
        </Routes>
      </div>
    </>
  )
}

export default App