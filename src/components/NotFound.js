import React from 'react'

import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center" style={{height: '80vh'}}>
            <h2 className="font-mono pb-0 text-7xl sm:text-6xl md:text-7xl lg:text-9xl ">404</h2>
            <h3 className="font-mono font-thin pt-2 pb-7 text-3xl sm:text-2xl md:text-3xl lg:text-4xl">Not found</h3>
            <Link to="/" >Go to home :)</Link>
        </div>
    )
}
