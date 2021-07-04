import React, { useState } from 'react';

// INCLUDE COMPONENT
import Navbar from './components/Navbar';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';

// INCLUDE IMAGE
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

// INCLUDE CONTEXT 
import PostContext from './context/PostContext';

export default function App() {
    
    const [Blog, setBlog] = useState([
        {
            URLImage: img1,
            headText: 'Nature1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Egestas purus viverra accumsan in nisl nisi.
                            Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. 
                            In egestas erat imperdiet sed euismod nisi porta lorem mollis. 
                            Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. 
                            Sapien faucibus et molestie ac feugiat sed lectus vestibulum. 
                            Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. 
                            Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. 
                            Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. O dio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. 
                            Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.`
        },
        {
            URLImage: img2,
            headText: 'Nature2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Egestas purus viverra accumsan in nisl nisi.
                            Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. 
                            In egestas erat imperdiet sed euismod nisi porta lorem mollis. 
                            Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. 
                            Sapien faucibus et molestie ac feugiat sed lectus vestibulum. 
                            Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. 
                            Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. 
                            Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. O dio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. 
                            Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.`
        },
        {
            URLImage: img3,
            headText: 'Nature3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            longDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Egestas purus viverra accumsan in nisl nisi.
                            Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. 
                            In egestas erat imperdiet sed euismod nisi porta lorem mollis. 
                            Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. 
                            Sapien faucibus et molestie ac feugiat sed lectus vestibulum. 
                            Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. 
                            Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. 
                            Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. O dio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. 
                            Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.`
        }
    ])

    return (
        <div>
            <Navbar />
            <Header />
            <section className="p-4">
                <h3 className="font-thin text-4xl lg:text-7xl md:text-6xl sm:text-5xl text-center p-3">#blogs</h3>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <Post 
                        image={img1}
                        headText="Nature1" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        />
                    <Post 
                        image={img2}
                        headText="Nature2" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        />
                    <Post 
                        image={img3}
                        headText="Nature3" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        />
                </div>
            </section>

            <Footer />
        </div>
    )
}

