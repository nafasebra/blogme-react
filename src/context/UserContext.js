import React from 'react';

const UserContext = React.createContext({
    user: {
        isLogining: false
    },
    setUser: () => {}
})


export default UserContext;