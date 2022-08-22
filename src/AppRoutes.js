import React from 'react';
import { Route, Routes } from "react-router-dom";

import HomePage from './Components/Pages/Home/Home';
import ResumePage from './Components/Pages/Resume/Resume';

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route  path='/' element={<HomePage />} />
            <Route  path='/' element={<HomePage />} />
            <Route  path='/' element={<HomePage />} />
            <Route  path='/' element={<HomePage />} />
            <Route  path='/' element={<HomePage />} />
            <Route  path='/resume' element={<ResumePage />} />
        </Routes>
    </>
  )
}

export default AppRoutes

// import React from 'react';
// import { Route, Routes } from "react-router-dom";

// import HomePage from './Components/Pages/Home/Home';
// import ResumePage from './Components/Pages/Resume/Resume'

// const AppRoutes = () => {
//   return (
//     <>
//         <Routes>
//             <Route  path='/' element={<HomePage />} />
//             <Route  path='/' element={<HomePage />} />
//             <Route  path='/resume' element={<ResumePage />} />

//         </Routes>
//     </>
//   )
// }

// export default AppRoutes

