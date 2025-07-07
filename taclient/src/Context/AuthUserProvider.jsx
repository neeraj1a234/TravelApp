import { createContext, useState } from "react";

export const UserContext = createContext(false);

function AuthUserProvider({children}){
    const [isUserLogged,setIsUserLogged] = useState(sessionStorage.getItem('loginToken')!==null);

    const logOut =()=>{
        sessionStorage.removeItem('loginToken');
        setIsUserLogged(false);
    }

    const logIn=()=>{
        if(sessionStorage.getItem('loginToken')){
            setIsUserLogged(true);
        }
    }

    return(
        <UserContext.Provider value={{isUserLogged,logOut,logIn}}>
            {children}
        </UserContext.Provider>
    )
}
export default AuthUserProvider;