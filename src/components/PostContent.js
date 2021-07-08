import React, { useContext, useEffect } from 'react'

import BlogContext from '../context/BlogContext';

import { useParams } from 'react-router-dom'

export default function PostContent() {
    let { postName } = useParams();
    const { blog } = useContext(BlogContext);

    useEffect(() => {
        window.scrollTo(0 , 0);
    })

    let currentBlog = blog.filter(item => item.headText === postName);

    return (
        <div className="flex justify-center container mx-auto pt-10 pb-10 p-3">
            <div style={{maxWidth: "700px"}}>
                <h2 className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl pb-5">
                    { postName }
                </h2>
                <p className="p-2">{currentBlog[0].author + " - Updated on " + currentBlog[0].date}</p>
                <img className="w-full mt-3 mb-4 rounded-2xl" src={currentBlog[0].URLImage} alt={postName} />
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas purus viverra accumsan in nisl nisi.
                    Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. 
                    In egestas erat imperdiet sed euismod nisi porta lorem mollis. 
                    Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. 
                    Sapien faucibus et molestie ac feugiat sed lectus vestibulum. 
                    Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. 
                    Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. 
                    Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. O dio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. 
                    Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.`

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas purus viverra accumsan in nisl nisi.
                    Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. 
                    In egestas erat imperdiet sed euismod nisi porta lorem mollis. 
                    Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. 
                    Sapien faucibus et molestie ac feugiat sed lectus vestibulum. 
                    Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. 
                    Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. 
                    Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. O dio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. 
                    Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.`

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas purus viverra accumsan in nisl nisi.
                    Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. 
                    In egestas erat imperdiet sed euismod nisi porta lorem mollis. 
                    Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. 
                    Sapien faucibus et molestie ac feugiat sed lectus vestibulum. 
                    Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. 
                    Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. 
                    Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. O dio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. 
                    Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.`

                </p>
            </div>
        </div>
    )
}
