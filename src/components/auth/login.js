import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext';

function Login() {

    let txtUsername, txtPassword;
    let UContext = useContext(UserContext);

    let loginfunc = () => {
        if (txtUsername !== "" && txtPassword !== ""){
            UContext.dispatch({
                type: 'LogIn',
                payload: {
                    username: txtUsername,
                    password: txtPassword
                }
            });
        } else {
            alert("Please fill the inputs!");
        }
    }

    return (
        <div className="flex justify-center items-center flex-col p-5 pt-20 pb-20">
            <h3 className="text-3xl text-center">LOG IN</h3>
            <div className="pt-2 pb-2 w-64 text-center text-gray-400">
                Please enter your current Username and password that login to your Account.
            </div>

            <form className="px-8 pt-6 pb-8 mb-4" 
                style={{width: '400px'}}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" 
                        for="txtLoginUsername">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="txtLoginUsername" 
                        type="text" 
                        onChange={(e) => txtUsername = e.target.value}
                        placeholder="ex: nafas" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" 
                        for="txtLoginPassword">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="txtLoginPassword" 
                        type="password" 
                        onChange={(e) => txtPassword = e.target.value}
                        placeholder="type a password" />
                </div>
                <Link to="/"
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline w-full"
                     onClick={() => loginfunc()}>
                         LOG IN</Link>
                <div className="text-center p-3">
                    <Link to="/signin" className="text-blue-500">Have not a Account?</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
