import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [user, setUser] = useState(true);
    const handleLogin = () => {
        setUser(true);
    }

    const handleLogout = () => {
        setUser(false);
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
export { AuthContext };