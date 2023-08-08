import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from "./style.css";
import Wrapper from './components/Wrapper';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
   <Route  path='/' element={<Wrapper />} /> 
    </Routes>
  )
}

export default App
