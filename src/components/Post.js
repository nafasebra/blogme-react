import React from 'react'

import Content from './Content';

import { Link } from 'react-router-dom';

export default function post(props) {
    let {id, image, headText, description} = props;
    return (
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="Mountain" />
            <div className="px-6 py-4">
                <Link to={'/post?id=' + id} component={Content} className="font-bold text-xl mb-2">{headText}</Link>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>

    )
}
