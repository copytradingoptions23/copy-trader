import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)



    return (
        <UserContext.Provider value={{ user, token, setToken, setUser }}>
            {children}
        </UserContext.Provider>
    )
}