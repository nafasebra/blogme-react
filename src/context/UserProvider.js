import React, { useState } from 'react';
import App from '../App';

export const UserContext = React.createContext({
    users: [], 
    currectUser: {},
    isLogining: false,
    setUserState: () => {}
});

export const UserProvider = () => {
    const [userState, setUserState] = useState({
        users: [], 
        currectUser: {},
        isLogining: false
    })
    

    return (
        <UserContext.Provider value={{
            users: userState.users, 
            currectUser: userState.currectUser,
            isLogining: userState.isLogining,
            setUserState: setUserState
        }}>
            <App />
        </UserContext.Provider>
    )
    
}