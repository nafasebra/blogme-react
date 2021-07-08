import React from 'react'

import { Link } from 'react-router-dom'

function Signin() {
    return (
        <div className="flex justify-center items-center flex-col p-5 pt-17 pb-17">
            <h3 className="text-3xl text-center">SIGN IN</h3>
            <div className="pt-2 pb-2 w-80 text-center text-gray-400">
                If you have not account, Enter a Username, Email address and secure password for create a account.
            </div>

            <form className="px-8 pt-6 pb-8 mb-4" style={{width: '400px'}}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="txtSigninUsername">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="txtSigninUsername" type="text" placeholder="ex: nafas" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="txtSignInEmail">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="txtSignInEmail" type="email" placeholder="ex: example@domain.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="txtSigninPassword" type="password" placeholder="type a password" />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                    Signin
                </button>
                <div className="text-center p-3">
                    <Link to="/login" className="text-blue-500">Have a Account?</Link>
                </div>
            </form>
        </div>
    )
}

export default Signin;
