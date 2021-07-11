import React, { useState } from 'react';


const UserContext = React.createContext()

function UserProvider(group) {
    const [userState, setUserState] = useState({
        users: [], 
        currectUser: {},
        isLogining: false,
        signining: () => {}, 
        logining: () => {},
        logouting: () => {}
    })
    
    let SignIn = (username, password, email) => {
        setUserState(prevState => ({
            users: [
                ...prevState.users,
                {
                    name: username,
                    password: password,
                    email: email
                }
            ],
            currectUser: {
                name: username,
                password: password
            },
            isLogining: true
        }))
    }
    
    let LogIn = (username, password) => {
        userState.users.forEach(item => {
            if(username === item.name && password === item.password){
                setUserState({ 
                    currectUser: {
                        name: username,
                        password: password
                    },
                    isLogining: true 
                })
            } else {
                alert("Please Enter current username and password");
            }
        })
    }
    
    let LogOut = () => {
        setUserState({
            currectUser: {},
            isLogining: false
        });
    }

    return (
        <UserContext.Provider value={{
            users: userState.users, 
            currectUser: userState.currectUser,
            isLogining: userState.isLogining,
            signining: SignIn, 
            logining: LogIn,
            logouting: LogOut
        }}>
            {group.children}
        </UserContext.Provider>
    )
    
}


export default UserProvider;