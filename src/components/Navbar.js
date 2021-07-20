import React, { useContext, useState } from 'react';

import Sidebar from './Sidebar';

import { Link } from 'react-router-dom';
import SidebarContext from '../context/SidebarContext';
import UserContext from '../context/UserContext';


function Navbar() {

    const [openSidebar, setOpenSidebar] = useState(false);
    const [openDropUser, setOpenDropUser] = useState(false);

    const UContext = useContext(UserContext);

    let { isLogining, currectUser } = UContext.user;

    // let logout = () => {
    //     UContext.dispatch({
    //         type: 'LogOut'
    //     })
    // }

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
                        {
                            // isLogining === false ?
                            // <>
                            //     <Link to='/login' className="p-4">LOGIN</Link>
                            //     <Link to='/signin' className="p-4">SIGNIN</Link>
                            // </>
                            // : 
                            // <span className="p-4" onClick={() => logout()}>
                            //     {currectUser.name}
                            // </span>
                            
                        }
                        <div className="inline-block relative" 
                            onMouseEnter={() => setOpenDropUser(true)}
                            onMouseLeave={() => setOpenDropUser(false)}>
                            <div>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <div className={openDropUser ? 'block' : 'hidden'}
                                 onMouseEnter={() => setOpenDropUser(true)}>
                                <div className="absolute right-0 top-5 text-gray-700 bg-white shadow-2xl pt-3"
                                     style={{width: "150px"}}>
                                    <p className="text-center"> user: nafas</p>
                                    <Link to="#" className="block px-2 py-1 hover:bg-gray-200">Logout</Link>
                                </div>
                            </div>
                        </div>
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
