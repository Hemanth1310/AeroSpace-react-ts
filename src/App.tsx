import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import type { dataEntries,data } from './types'
import { generateProbeData } from './data/data'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import { AuthContextProvider } from './Context/Context'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] = useState<data>([])


  useEffect(()=>{
    const arr = generateProbeData(200)
    setData(arr)
  },[])

  return (
  <AuthContextProvider>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home></Home>}/>
        </Routes>
    </BrowserRouter>
  </AuthContextProvider>
  )
}

export default App
