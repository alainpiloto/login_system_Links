import { useEffect, useState } from "react";
import AuthContext from "./authentication";

const AuthenticationProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(true)
    const [token, setToken] = useState({})
     return (
        <AuthContext.Provider value={ {setIsAuth, setToken, token, isAuth} }>
            {children}
        </AuthContext.Provider>
     )
}

export default AuthenticationProvider;