import React from 'react'

import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="text-center p-8">
            <h2 className="font-mono text-7xl sm:text-6xl md:text-7xl lg:text-8xl ">404</h2>
            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl">Not found</h3>
            <Link to="/" className="font-bold pt-4">Go to home :)</Link>
        </div>
    )
}
