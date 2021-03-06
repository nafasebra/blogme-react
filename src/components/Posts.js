import React from 'react'
import Post from './Post'
import BlogContext from '../context/BlogContext';

export default function Posts() {
    const BContext = React.useContext(BlogContext);
    return (
        <section className="p-4">
            <h4 className="font-thin text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-center p-3">All blogs</h4>
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
