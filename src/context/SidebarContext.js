import React from 'react';

const SidebarContext = React.createContext({
    sidebarOpen: false,
    setSidebarOpen: () => {}
})

export default SidebarContext;
