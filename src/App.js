import React, { useState } from 'react';

import { Switch, Route } from 'react-router';

// INCLUDE COMPONENT
import Navbar from './components/Navbar';
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import NotFound from './components/NotFound';
import ContactMe from './components/ContactMe';

// INCLUDE IMAGE
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';

// INCLUDE CONTEXT 
import BlogContext from './context/BlogContext';

export default function App() {
    
    const [Blog, setBlog] = useState([
        {
            postID: 1,
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
            postID: 2,
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
            postID: 3,
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
        <BlogContext.Provider value={{
            blog: Blog
        }}>
            <>
                <Navbar />
                
                <Switch>
                    <Route path="/" exact>
                        <Header />
                        <Posts />
                    </Route>
                    <Route path="/about" component={Aboutme} />
                    <Route path="/contact" component={ContactMe} />
                    <Route path="*" component={NotFound} />
                </Switch>

                <Footer />
            </>
        </BlogContext.Provider>
    )
}

