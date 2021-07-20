import React, { useState, useReducer } from 'react';

import { Switch, Route } from 'react-router';

// INCLUDE COMPONENT
import Navbar from './components/Navbar';
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Login from './components/auth/Login';
import Signin from './components/auth/Signin';
import NotFound from './components/NotFound';
import ContactMe from './components/ContactMe';
import PostContent from './components/PostContent';

// INCLUDE IMAGE
import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';
import img3 from './assets/img/3.jpg';

// INCLUDE CONTEXT 
import BlogContext from './context/BlogContext';
import UserContext from './context/UserContext';

//INCLUDE REDUCERS
import UserReducer from './reducer/UserReducer';

export default function App() {
    
    // blog state for all posts
    const [Blog, setBlog] = useState([
        {
            postID: 1,
            URLImage: img1,
            author: 'nafasebra',
            date: 'Tuesday, 6 July 2021',
            headText: 'Nature1',
            tags: ['photography', 'spring', 'nature'],
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
            author: 'nafasebra',
            date: 'Wednesday, 7 July 2021',
            headText: 'Nature2',
            tags: ['summer', 'lake', 'nature'],
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
            author: 'nafasebra',
            date: 'Thursday, 8 July 2021',
            headText: 'Nature3',
            tags: ['lake', 'mountain'],
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

    // add initial value in state UserReducer file
    const [userState, dispatch] = useReducer(UserReducer, {
        user: [],
        currentUser: {},
        isLogining: false
    })

    return (
        <BlogContext.Provider value={{
            blog: Blog
        }}>
            <UserContext.Provider value={{
                user: userState,
                dispatch
            }}>
                <>
                    <Navbar />

                    <Switch>
                        <Route path="/" exact>
                            <Header />
                            <Posts />
                        </Route>
                        
                        <Route path="/about" >
                            <Aboutme />
                        </Route>
                        <Route path="/contact" component={ContactMe} />
                        <Route path="/post/:postName" component={PostContent}/>
                        
                        {userState.isLogining === false && <Route path="/login" ><Login /></Route>}
                        {userState.isLogining === false && <Route path="/signin"><Signin /></Route>}

                        
                        <Route path="*" component={NotFound} />
                    </Switch>

                    <Footer />
                </>
            </UserContext.Provider>
        </BlogContext.Provider>
    )
}

