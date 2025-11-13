import React, { useState } from 'react'
import { useAuth } from '../Context/Context';
import type { AuthUser } from '../types';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [message,setMessage] = useState<string>('')
    const navigate = useNavigate();
    const {handleUser} = useAuth()
    const handleLogin = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username')
        const password = formData.get('password')
        
        if(typeof username !== 'string' || typeof password!=='string'){
            setMessage('Please Enter both userName and password')
            return
        }

        if (username && password==='12345'){
            const user:AuthUser = {
                username:username,
                isLoggedIn:true, 
                role:username==='admin'?'admin':'webuser' 
            } 
            handleUser(user)
            navigate('/dashboard')
        }
    }
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl'>Welcome to AeroSpace</h1>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
            <input className='rounded border-2 p-4 min-w-[300px]' type='text' name='username' placeholder='username'/>
            <input className='rounded border-2 p-4 min-w-[300px]' type='password' name='password' placeholder='password'/>
            <button className='bg-gray-950 p-4 text-white'>Login</button>
        </form>
        {message!=='' && <div>{message}</div>}
    </div>
  )
}

export default Home