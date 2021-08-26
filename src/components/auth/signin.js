import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'

import UserContext from '../../context/UserContext';

function Signin() {

    const [errorValidation, setErrorValidation] = useState({
        username: false,
        email: false
    })
    
    let txtUsername = "", 
        txtPassword ="", 
        txtEmail = "";
    let UContext = useContext(UserContext);

    let signinfunc = () => {
        if (txtUsername !== "" && txtEmail !== "" && txtPassword !== "" ){
            UContext.dispatch({ 
                type: 'SignIn',
                payload: {
                    username: txtUsername,
                    password: txtPassword,
                    email: txtEmail
                }    
            });
        } else {
            alert("Please fill the inputs!")
        }
    }

    const validationUsername = (e) => {
        let usernameRegex = /^[a-zA-Z0-9\-]+$/;
        let value = e.target.value;
        if(value.match(usernameRegex))
            setErrorValidation({
                ...errorValidation,
                username: false
            })
        else
            setErrorValidation({
                ...errorValidation,
                username: true
            })
    }

    const validationEmail = (e) => {
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let value = e.target.value;
        if(value.match(emailRegex))
            setErrorValidation({
                ...errorValidation,
                email: false
            })
        else
            setErrorValidation({
                ...errorValidation,
                email: true
            })
    }

    return (
        <div className="flex justify-center items-center flex-col p-5 pt-17 pb-17">
            <h3 className="text-3xl text-center">SIGN IN</h3>
            <div className="pt-2 pb-2 w-80 text-center text-gray-400">
                If you have not account, Enter a Username, Email address and secure password for create a account.
            </div>

            <form className="px-8 pt-6 pb-8 mb-4" 
                style={{width: '400px'}} >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="txtSigninUsername">
                        Username
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="txtSigninUsername" 
                        type="text" 
                        onChange={(e) => {
                            txtUsername = e.target.value;
                            validationUsername(e);
                        }} 
                        placeholder="ex: nafas" 
                    />
                    <p 
                        className="text-red-500 text-sm my-1"
                        style={{
                            display: errorValidation.username ? 'block' : 'none'
                        }}
                    >
                        incurrect username
                    </p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" 
                        for="txtSignInEmail">
                        Email
                    </label>
                    <input 
                        type="email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="txtSignInEmail" 
                        onChange={(e) => {
                            txtEmail = e.target.value;
                            validationEmail(e);
                        }} 
                        placeholder="ex: example@domain.com" 
                        required
                    />
                    <p 
                        className="text-red-500 text-sm my-1"
                        style={{
                            display: errorValidation.email ? 'block' : 'none'
                        }}
                    >
                        incurrect email
                    </p>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" 
                        for="txtSigninPassword">
                        Password
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="txtSigninPassword" 
                        type="password" 
                        onChange={(e) => txtPassword = e.target.value} 
                        placeholder="type a password" 
                    />
                </div>
                <Link to="/" 
                    className="text-center block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline w-full" 
                    onClick={() => signinfunc()}>
                        SIGN IN</Link>
                <div className="text-center p-3">
                    <Link to="/login" className="text-blue-500">Have a Account?</Link>
                </div>
            </form>
        </div>
    )
}

export default Signin;
