import { createContext, useContext, useState } from "react";
import type { AuthUser } from "../types";

type AuthContextType = {
    userData:AuthUser|null;
    handleUser:(newUserData:AuthUser)=>void
} 

export const defaultUser = {
    userData:null,
    handleUser:()=>{}
}

const AuthContext = createContext<AuthContextType>(defaultUser)

export const AuthContextProvider =({children}:{children:React.ReactNode})=>{
    const [userData,setUser]= useState<AuthUser | null>(null)

    const handleUser = (newUserData:AuthUser)=>{
        setUser(newUserData)
    }

    return(
        <AuthContext.Provider value={{userData,handleUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    // This hook call is now inside a function component/custom hook body!
    return useContext(AuthContext); 
};