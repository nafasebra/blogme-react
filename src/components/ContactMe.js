import React from 'react'

export default function ContactMe() {
    return (
        <div className="flex justify-center container mx-auto pt-10 pb-10 p-3">
            <div style={{maxWidth: "700px"}}>
                <h2 className="font-bold text-5xl sm:text-4xl md:text-5xl lg:text-6xl pb-5">Contact Me :)</h2>
                <p className="text-gray-700 text-base">
                    For contact me, First type your Email address and username, so write your message to bellow field
                </p>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="txtName">
                            Your name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="txtName" type="text" placeholder="ex: john, smith and ..." />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="txtEmail">
                            Email address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="txtEmail" type="email" placeholder="ex: example@gmail.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Message
                        </label>
                        <textarea rows="6" placeholder="type your message..." id="txtMessage" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Send me yuor message
                    </button>
                </form>
            </div>
        </div>
    )
}
