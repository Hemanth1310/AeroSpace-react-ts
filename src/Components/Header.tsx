import React from 'react'
import { NavLink } from 'react-router'
import { useAuth } from '../Context/Context'

type Props = {}

const Header = (props: Props) => {
    const {userData} = useAuth()
  return (
    <div className='w-screen h-[60px] bg-gray-950 text-blue-50 fixed text-2xl flex items-center px-3 justify-between'>
     <h1>AeroSpace</h1>   
     <div className='flex gap-4 '>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
        <NavLink to={'/status'}>Status</NavLink>
     </div>
        
    </div>
  )
}

export default Header