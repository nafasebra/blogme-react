import React, { useContext, useEffect, useState } from 'react'

import BlogContext from '../context/BlogContext';
import UserContext from '../context/UserContext';

import { useParams, Link } from 'react-router-dom'

export default function PostContent() {

    let UContext = useContext(UserContext);

    let { postName } = useParams(); 
    const { blog } = useContext(BlogContext);

    useEffect(() => {
        window.scrollTo(0 , 0);
    }, [])

    let currentBlog = blog.filter(item => item.headText === postName);

    const [like, setLike] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [userLogged] = useState(UContext.user.isLogining || false);

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

                <button className="btn mt-5"
                        onClick={() => userLogged ? setLike(!like) : setShowModal(true)}>
                    <svg className="w-8 h-8" 
                        fill={like ? '#e74c3c' : 'none'} 
                        stroke={like ? '#e74c3c' : '#707070'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div>

            {
                userLogged === false && showModal ? (
                    <>
                        <div 
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" 
                            onClick={() => {setShowModal(false)}}
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white py-10">
                                    {/*body*/}
                                    <div className="flex justify-items-center mx-auto py-5">
                                        <svg width="10em" height="10em" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 464.3007 464"><path d="m276.601562 410.449219-.699218.5-266 .5c-.203125-95.699219 71.097656-166 159.199218-166.097657 40.800782-.101562 78.097657 14.898438 106.300782 40.597657-13.769532 17.542969-21.238282 39.203125-21.203125 61.5.0625 22.941406 7.96875 45.171875 22.402343 63zm0 0" fill="#e48e66"/><path d="m169.300781 10.148438c52.851563 0 95.699219 42.847656 95.699219 95.703124 0 52.851563-42.847656 95.699219-95.699219 95.699219-52.855469 0-95.699219-42.847656-95.699219-95.699219 0-52.855468 42.84375-95.703124 95.699219-95.703124zm0 0" fill="#f8ec7d"/><path d="m169.300781 245.351562h-.199219c-88 .199219-159.300781 70.5-159.101562 166.097657l159.300781-.300781zm0 0" fill="#d18162"/><path d="m169.300781 10.148438c-52.855469 0-95.699219 42.847656-95.699219 95.703124 0 52.851563 42.84375 95.699219 95.699219 95.699219zm0 0" fill="#e2d574"/><path d="m275.5 285.949219c25.742188-32.925781 69.25-46.359375 109.074219-33.675781 39.824219 12.679687 67.550781 48.804687 69.503906 90.554687 1.957031 41.746094-22.269531 80.304687-60.734375 96.65625-38.460938 16.351563-83.039062 7.042969-111.742188-23.335937-1.699218-1.796876-3.402343-3.699219-5-5.699219-29.316406-36.179688-29.773437-87.808594-1.101562-124.5zm0 0" fill="#f8ec7d"/><g fill="#63316d"><path d="m354.300781 237.449219c-30.25-.105469-59.1875 12.351562-79.898437 34.402343-29.796875-23.75-66.800782-36.628906-104.902344-36.5h-.398438c-45.800781.097657-88.300781 17.898438-119.800781 50.296876-31.898437 32.703124-49.3984372 77.402343-49.300781 125.902343.0195312 2.652344 1.058594 5.191407 2.902344 7.097657 1.878906 1.882812 4.4375 2.929687 7.097656 2.902343l262.5-.5c.601562.699219 1.199219 1.398438 1.800781 2 34.464844 36.472657 89.246094 45.003907 133.171875 20.742188 43.925782-24.265625 65.871094-75.175781 53.347656-123.769531-12.523437-48.59375-56.335937-82.558594-106.519531-82.574219zm-290.699219 62.101562c27.699219-28.5 65.199219-44.199219 105.5-44.199219h.300782c33.597656-.097656 66.222656 11.257813 92.5 32.199219-11.625 17.808594-17.777344 38.632813-17.703125 59.898438.039062 18.753906 4.820312 37.191406 13.902343 53.601562l-238 .5c2.300782-39.402343 17.5-75.199219 43.5-102zm290.699219 137.898438c-24.773437.101562-48.46875-10.117188-65.398437-28.199219-1.5-1.601562-3-3.300781-4.5-5.101562-26.421875-32.5625-26.839844-79.066407-1-112.097657v-.199219c23.679687-30.222656 63.925781-42.101562 100.222656-29.582031s60.660156 46.683594 60.675781 85.082031c0 49.597657-40.398437 90.097657-90 90.097657zm0 0"/><path d="m169.300781 211.550781c58.375 0 105.699219-47.324219 105.699219-105.699219 0-58.378906-47.324219-105.703124-105.699219-105.703124s-105.699219 47.324218-105.699219 105.703124c.054688 58.351563 47.34375 105.644532 105.699219 105.699219zm0-191.402343c47.332031 0 85.699219 38.371093 85.699219 85.703124 0 47.328126-38.367188 85.699219-85.699219 85.699219s-85.699219-38.371093-85.699219-85.699219c.054688-47.308593 38.390626-85.644531 85.699219-85.703124zm0 0"/><path d="m394.800781 337.449219h-81c-5.523437 0-10 4.476562-10 10 0 5.523437 4.476563 10 10 10h81c5.523438 0 10-4.476563 10-10 0-5.523438-4.476562-10-10-10zm0 0"/></g></svg>
                                    </div>
                                    <div className="relative p-6 flex-auto text-center">
                                        <h3 className="text-red-500 text-3xl font-bold">Please Signin</h3>
                                        <p className="text-gray-500 p-4">Sign in. because guest user can't like post</p>
                                    </div>
                                    <div className="flex flex-col px-5">
                                        <Link 
                                            to="/signin"
                                            className="block mb-3 text-center bg-blue-500 text-white font-bold py-2 px-4 rounded"
                                        >
                                            SIGN IN
                                        </Link>
                                        <button 
                                            className="font-bold py-2 px-4 rounded" 
                                            onClick={() => setShowModal(false)}
                                        >
                                            CLOSE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" ></div>
                    </>
                )
                : null
            }
        </div>
    )
}
