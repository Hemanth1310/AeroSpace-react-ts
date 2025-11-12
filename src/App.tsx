import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import type { dataEntries,data } from './types'
import { generateProbeData } from './data/data'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import { AuthContextProvider } from './Context/Context'
import Unauthorized from './Pages/Unauthorized'
import ProtectedRoutes from './Authentication/ProtectedRoutes'
import Dashboard from './Pages/Dashboard'
import AdminRoutes from './Authentication/AdminRoutes'
import Status from './Pages/Status'
import Logout from './Pages/Logout'

function App() {
  return (
  <AuthContextProvider>
    <BrowserRouter>
        <Header/>
        <div className='pt-[60px] flex flex-col justify-center items-center'>
          <Routes>
              <Route path='/' element={<Home></Home>}/>
              <Route path='/unauthorized' element={<Unauthorized/>}/>
              <Route element={<ProtectedRoutes/>}>
                  <Route path='/dashboard' element={<Dashboard/>}></Route>
              </Route>
              <Route element={<AdminRoutes/>}>
                  <Route path='/status' element={<Status/>}/>
              </Route>
              <Route path='/logout' element={<Logout/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  </AuthContextProvider>
  )
}

export default App
