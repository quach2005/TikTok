import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [userLogin, setUserLogin] = useState(false);
    const [passedLogin, setPassedLogin] = useState(false);
    const handleLogin = () => {
        setPassedLogin(true)
    }

    const handleLogout = () => {
        setUserLogin(false);
    }
    const handlePassedLogin = () => {
        setPassedLogin(false);
        setUserLogin(true);
    }

    return (
        <AuthContext.Provider value={{userLogin,passedLogin, handleLogin, handleLogout, handlePassedLogin}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
export { AuthContext };