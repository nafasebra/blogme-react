import React from 'react'
import { useParams } from 'react-router-dom'

export default function Content() {
    let { post } = useParams();

    console.log( post );
    
    return (
        <div> OPEN CONTENT {post} </div>
    )
}
