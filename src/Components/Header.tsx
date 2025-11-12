import React from 'react'
import { NavLink } from 'react-router'
import { useAuth } from '../Context/Context'

type Props = {}

const Header = (props: Props) => {
    const {userData} = useAuth()
  return (
    <div className='w-screen h-[60px] bg-gray-950 flex items-center justify-center fixed '>
        <div className='container text-blue-50 text-2xl flex items-center justify-between'>
             <h1>AeroSpace</h1>   
                {userData?.isLoggedIn && 
                <div className='flex gap-4 '>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    {userData?.role==='admin' && <NavLink to={'/status'}>Status</NavLink>}   
                </div>
                }

        </div>
    
   
        
    </div>
  )
}

export default Header