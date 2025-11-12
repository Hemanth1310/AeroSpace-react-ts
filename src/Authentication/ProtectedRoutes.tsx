import React from 'react'
import { useAuth } from '../Context/Context'
import { Navigate, Outlet } from 'react-router-dom';

type Props = {}

const ProtectedRoutes = (props: Props) => {
    const {userData} = useAuth();

    if(userData?.isLoggedIn){
        return <Outlet/>
    }else{
        return <Navigate to={'/unauthorized'} replace/>
    }
}

export default ProtectedRoutes