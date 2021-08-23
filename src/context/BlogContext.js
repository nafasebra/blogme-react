import React from 'react'

const BlogContext = React.createContext({
    blog: [],
    setBlog: () => {}
})

export default BlogContext;
