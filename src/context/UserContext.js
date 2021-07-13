import React from 'react';

const UserContext = React.createContext({
    user: {},
    SignIn: () => {},
    LogIn: () => {},
    LogOut: () => {}
})


export default UserContext;