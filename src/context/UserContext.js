import React from 'react';

const UserContext = React.createContext({
    user: {},
    SignIn: () => {},
    LogOut: () => {},
    LogIn: () => {}
});


export default UserContext;