import React, { useContext } from 'react';

import { Link } from "react-router-dom";
import SidebarContext from '../context/SidebarContext';

function Sidebar() {
    let SContext = useContext(SidebarContext);
    return (
        <>
            {SContext.sidebarOpen ?
            <div className="fixed bg-white top-0 left-0 w-screen h-screen">
                <div className="flex items-end p-1 mt-2 ml-2 cursor-pointer" onClick={() => SContext.setSidebarOpen(false)}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <ul className="pt-5 pb-5 text-center">
                    <li className="hover:bg-gray-100 p-4" onClick={() => SContext.setSidebarOpen(false)}>
                        <Link to="/" className="text-2xl">HOME</Link>
                    </li>
                    <li className="hover:bg-gray-100 p-4" onClick={() => SContext.setSidebarOpen(false)}>
                        <Link to="/about" className="text-2xl">ABOUT ME</Link>
                    </li>
                    <li className="hover:bg-gray-100 p-4" onClick={() => SContext.setSidebarOpen(false)}>
                        <Link to="/contact" className="text-2xl">CONTACT US</Link>
                    </li>
                </ul>
            </div>
            : null }
        </>
    )
}

export default Sidebar;