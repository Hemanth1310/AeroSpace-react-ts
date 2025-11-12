import React from 'react'
import { useAuth } from '../Context/Context'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {}

const AdminRoutes = (props: Props) => {
  const {userData} = useAuth()

  if(userData?.isLoggedIn){
    if(userData.role==='admin'){
        return <Outlet/>
    }else{
        <Navigate to={'/unauthorized'} replace/>
    }
  }else{
    return <Navigate to={'/'} replace/>
  }
}

export default AdminRoutes