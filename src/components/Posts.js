import React from 'react'
import Post from './Post'
import BlogContext from '../context/BlogContext';

export default function Posts() {
    const BContext = React.useContext(BlogContext);
    return (
        <section className="p-4">
            <h3 className="font-thin text-4xl lg:text-7xl md:text-6xl sm:text-5xl text-center p-3">#blogs</h3>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        BContext.blog.map((item, key) => 
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
