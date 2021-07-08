import React, { useState } from 'react';

import Sidebar from './Sidebar';

import { Link } from 'react-router-dom';
import SidebarContext from '../context/SidebarContext';

function Navbar() {

    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <SidebarContext.Provider value={{
                sidebarOpen: openSidebar,
                setSidebarOpen: setOpenSidebar.bind(this)
            }}>
                <nav className="flex justify-between items-center p-2 shadow-sm"
                    role="navigation">
                    <Link to='/' className="p-4 font-bold">BLOGME</Link>

                    <div className="px-4 cursor-pointer md:hidden" onClick={() => setOpenSidebar(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div className="pr-8 md:block hidden">
                        <Link to='/' className="p-4">HOME</Link>
                        <Link to='/about' className="p-4">ABOUT ME</Link>
                        <Link to='/contact' className="p-4">CONTACT ME</Link>
                        <Link to='/login' className="p-4">LOGIN</Link>
                        <Link to='/signin' className="p-4">SIGNIN</Link>
                    </div>
                </nav>

                <div className="md:hidden">
                    <Sidebar />
                </div>
            </SidebarContext.Provider>
        </>
    )
}

export default Navbar;
