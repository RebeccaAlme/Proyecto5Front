import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Aboutus from './components/aboutus/aboutus';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='aboutus' element={<aboutus/>} />
          
        </Routes>
      </div>
    </>
  )
}

export default App