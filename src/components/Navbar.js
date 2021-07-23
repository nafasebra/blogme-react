import React, { useContext, useState } from 'react';

import Sidebar from './Sidebar';

import { Link } from 'react-router-dom';
import SidebarContext from '../context/SidebarContext';
import UserContext from '../context/UserContext';


function Navbar() {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [openDropUser, setOpenDropUser] = useState(false);

    const UContext = useContext(UserContext);

    let { isLogining, currentUser } = UContext.user;

    let logout = () => {
        UContext.dispatch({
            type: 'LogOut'
        })
    }

    return (
        <>
            <SidebarContext.Provider value={{
                sidebarOpen: openSidebar,
                setSidebarOpen: setOpenSidebar.bind(this)
            }}>
                <nav className="flex justify-between items-center p-2 shadow-sm"
                    role="navigation">
                    <Link to='/' className="p-4 font-bold">BLOGME</Link>

                    <div className="pr-4 lg:pr-8 md:pr-4 sm:pr-1 flex items-center">
                        <div className="md:flex hidden">
                            <Link to='/about' className="p-4">ABOUT ME</Link>
                            <Link to='/contact' className="p-4">CONTACT ME</Link>
                            {
                                isLogining === false ?
                                <>
                                    <Link to='/login' className="p-4">LOGIN</Link>
                                    <Link to='/signin' className="p-4">SIGNIN</Link>
                                </>
                                : null
                            }
                        </div>
                        {/* dropdown user */}
                        {
                            isLogining &&
                            <div className="inline-block relative" 
                                 onMouseEnter={() => setOpenDropUser(true)}
                                 onMouseLeave={() => setOpenDropUser(false)}>
                                <div className="px-4">
                                    <svg className="w-6 h-6" fill="none" 
                                        stroke="#707070" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                </div>
                                <div className={openDropUser ? 'block' : 'hidden'}
                                    onMouseEnter={() => setOpenDropUser(true)}>
                                    <div className="absolute right-0 top-6 text-gray-700 bg-white shadow-2xl pt-3"
                                        style={{width: "170px"}}>
                                        <p className="p-3"> {currentUser.name} </p>
                                        <Link to="/addpost" className="flex text-xs px-3 py-2 hover:bg-gray-200">
                                            <svg className="w-4 h-4 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                            Add post
                                        </Link>
                                        <Link to="#" className="flex text-xs px-3 py-2 hover:bg-gray-200">
                                            <svg className="w-4 h-4 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                                            Change password
                                        </Link>
                                        <Link to="/" className="flex text-xs px-3 py-2 hover:bg-gray-200"
                                              onClick={() => logout()}>
                                            <svg className="w-4 h-4 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                            Logout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="px-4 cursor-pointer md:hidden" onClick={() => setOpenSidebar(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
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
