import React, { useEffect } from 'react'
import { useAuth } from '../Context/Context'
import type { AuthUser } from '../types';
import { useNavigate } from 'react-router';

type Props = {}

const Logout = (props: Props) => {

    const {userData,handleUser} = useAuth();
    const navigate = useNavigate()
    useEffect(()=>{
        if(userData){
            const updatedData:AuthUser ={...userData,isLoggedIn:false}
            handleUser(updatedData)
        }
      setTimeout(()=>{navigate('/')},3000)
    },[])
  return (
    <div className='container bg-blue flex flex-col items-center justify-center'>
            <h1 className='text-2xl mt-10 mb-4'>Thanks For Visiting</h1>
            <h2 className='text-2xl text-gray-400'>You Will now be redirected to Home Page</h2>
    
    </div>
  )
}

export default Logout