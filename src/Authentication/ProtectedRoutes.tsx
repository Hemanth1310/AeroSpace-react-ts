import { useAuth } from '../Context/Context'
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoutes = () => {
    const {userData} = useAuth();

    if(userData?.isLoggedIn){
        return <Outlet/>
    }else{
        return <Navigate to={'/'} replace/>
    }
}

export default ProtectedRoutes