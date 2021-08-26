import React, { useState, useReducer } from 'react';
import { Switch, Route } from 'react-router';

// INCLUDE COMPONENT
import Navbar from './components/Navbar';
import Header from './components/Header';
import LastPosts from './components/LastPosts';
import Posts from './components/Posts';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Login from './components/auth/Login';
import Signin from './components/auth/Signin';
import NotFound from './components/NotFound';
import ContactMe from './components/ContactMe';
import AddNewPost from './components/AddNewPost';
import PostContent from './components/PostContent';

// INCLUDE CONTEXT 
import BlogContext from './context/BlogContext';
import UserContext from './context/UserContext';

//INCLUDE REDUCERS
import UserReducer from './reducer/UserReducer';

//INCLUDE DATAS
import { postData } from './data/postData';

export default function App() {
    
    // blog state for all posts
    const [Blog, setBlog] = useState(postData);

    // add initial value in state UserReducer file
    const [userState, dispatch] = useReducer(UserReducer, {
        user: [],
        currentUser: {},
        isLogining: false
    })

    return (
        <BlogContext.Provider value={{
            blog: Blog,
            setBlog: setBlog
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
                            <LastPosts />
                            <Posts />
                        </Route>
                        
                        <Route path="/about" component={Aboutme} />
                        <Route path="/contact" component={ContactMe} />
                        <Route path="/post/:postName" component={PostContent}/>
                        <Route path="/addpost" component={AddNewPost}/>
                        
                        {
                            userState.isLogining === false && 
                            <>
                                <Route path="/login" component={Login}/>
                                <Route path="/signin" component={Signin}/>
                            </>
                        }
                        
                        <Route path="*" component={NotFound} />
                    </Switch>

                    <Footer />
                </>
            </UserContext.Provider>
        </BlogContext.Provider>
    )
}

