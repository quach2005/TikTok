import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [user, setUser] = useState(false);
    const [passedLogin, setPassedLogin] = useState(false);
    const handleLogin = () => {
        setPassedLogin(true)
    }

    const handleLogout = () => {
        setUser(false);
    }
    const handlePassedLogin = () => {
        setPassedLogin(false);
        setUser(true);
    }

    return (
        <AuthContext.Provider value={{user,passedLogin, handleLogin, handleLogout, handlePassedLogin}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
export { AuthContext };