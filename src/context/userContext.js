import React from 'react';

const UserContext = React.createContext({
    users: [], 
    isLogining: false
})

export default UserContext;