import React from 'react'
import bImage from './../assets/img/background.png';

export default function header() {
    return (
        <header
            style={{backgroundImage: `url(${bImage})`}} 
            className="flex justify-center items-center h-screen"
            >
            <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl">BLOGME</h1>
        </header>
    )
}
