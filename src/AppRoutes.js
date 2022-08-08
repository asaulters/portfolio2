import React from 'react';
import { Route, Routes } from "react-router-dom";

import HomePage from './Components/Pages/Home/Home';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route  path='/' element={<HomePage />} />
            <Route  path='/about' element={<HomePage />} />
            <Route  path='/expereicne' element={<HomePage />} />
            <Route  path='/work' element={<HomePage />} />
            <Route  path='/contact' element={<HomePage />} />
        </Routes>
    </>
  )
}

export default AppRoutes

