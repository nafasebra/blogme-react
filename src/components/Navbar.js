import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
    return (
        <nav className="flex justify-between items-center p-2 shadow-sm"
            role="navigation">
            <Link to='/' className="p-4 font-bold">BLOGME</Link>

            <div className="px-4 cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to='/' className="p-4">home</Link>
                <Link to='/blog' className="p-4">blog</Link>
                <Link to='/about' className="p-4">about me</Link>
                <Link to='/contact' className="p-4">contact me</Link>
            </div>
        </nav>
    )
}
