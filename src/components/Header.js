import React from 'react'
import bImage from './../img/background.png';

export default function header() {
    console.log(bImage);
    return (
        <header
            style={{backgroundImage: `url(${bImage})`}} 
            className="flex justify-center items-center h-screen"
            >
            <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-6xl">BLOGME</h1>
        </header>
    )
}
