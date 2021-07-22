import React from 'react';

function AddNewPost() {
    return (
        <div className="flex justify-center container mx-auto pt-10 pb-10 p-3">
            <div style={{width: "700px"}}>
                <h2 className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl pb-5">ADD POST</h2>
                <p className="text-gray-500">Create your post here :))</p>

                <div className="py-10">
                    <form action="" style={{maxWidth: "700px"}}>
                        <input type="text" className="py-5 px-1 placeholder-gray-300 text-3xl focus:outline-none w-full" placeholder="Type subject" />
                        <textarea className="mt-3 py-5 px-1 placeholder-gray-300 text-2xl focus:outline-none w-full" placeholder="Type Description" name="" id="" rows="10"></textarea>
                        <div className="overflow-hidden relative mt-4 mb-4">
                            <button className="flex items-center relative bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                <span className="ml-2">Upload image</span>
                            </button>
                            <input className="cursor-pointer top-0 bottom-0 absolute block opacity-0 pin-r pin-t" type="file" name="vacancyImageFiles" multiple />
                        </div>
                        <div className="py-5">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline w-full">
                                CREATE POST
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewPost
