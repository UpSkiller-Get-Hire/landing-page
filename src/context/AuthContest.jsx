import {createContext, useContext, useEffect, useState} from "react";
import {getCurrentUser} from "../service/auth.api.js";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkUser(){
            const data = await getCurrentUser();
            setUser(data);
            setLoading(false);
        }
        checkUser();
    }, []);
    return(
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext);
}