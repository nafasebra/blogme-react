import React from 'react'
import BlogContext from '../context/BlogContext';
import Post from './Post';


function LastPosts() {
    const { blog } = React.useContext(BlogContext);
    
    let selectedBlog = blog.slice(blog.length - 3);

    return (
        <section className="p-4">
            <h4 className="font-thin text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-center p-3">Last blogs</h4>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        selectedBlog.map((item, key) => 
                            <Post 
                                key={key}
                                id={item.postID} 
                                tags={item.tags}
                                image={item.URLImage} 
                                headText={item.headText} 
                                description={item.description}
                                />
                            )
                    }
            </div>
        </section>
    )
}

export default LastPosts
