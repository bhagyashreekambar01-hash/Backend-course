import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../pages/Login';
import Notebook from '../pages/Notebook';
import Signin from '../pages/Signin';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/Signin" element={<Signin/>} />

        <Route path="/notes" element={<Notebook/>} />
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
