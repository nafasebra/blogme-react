import React from 'react'
import { useParams } from 'react-router-dom'

export default function Content() {
    let { id } = useParams();

    console.log( id );
    
    return (
        <div> OPEN CONTENT </div>
    )
}
