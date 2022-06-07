import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';

import Isologo from '../assets/isologo.png';

import * as usersActions from "../actions/usersActions";

function Login(props:any) {

    useEffect(() => {

        props.get_users;

    })

    return(
        <div className='flex items-center min-h-screen'>
            <div className="w-full">
                <img src={ Isologo } alt='GRAPPS' className='w-48 mb-10 mx-auto' />
                <div className='p-6'>
                    <h4 className="uppercase text-2xl text-center font-bold mb-4">
                        Login
                    </h4>
                    <div className="w-full min:w-3/4 md:w-4/12 mx-auto px-3 py-6 bg-gray-700 text-white">
                        <form className='flex flex-col items-center'>
                            <div className="w-full md:w-3/4 relative mb-6">
                                <label className="block mb-3" htmlFor="">User or Email</label>
                                <input autoComplete='u-name' className='w-full block focus:bg-transparent valid:bg-transparent bg-transparent border-2 border-white-900 rounded p-2 text-xs' type="text" name="u-name" id="u-name" />
                            </div>
                            <div className="w-full md:w-3/4 relative">
                                <label className="block mb-3" htmlFor="">Password</label>
                                <input autoComplete='u-pass' className='w-full block focus:bg-transparent valid:bg-transparent bg-transparent border-2 border-white-900 rounded p-2 text-xs' type="password" name="pass" id="pass" />
                            </div>
                            <div className="block w-full md:w-3/4 mx-auto mt-4">
                                <button type='submit' className="w-full bg-gray-800 hover:bg-gray-900 p-2">
                                    LOGIN
                                </button>
                            </div>
                            <div className="w-full md:w-3/4 grid grid-cols-2 mt-3">
                                <Link to='' className='text-xs text-center hover:underline'>
                                    Forgot password?
                                </Link>
                                <Link to='' className='text-xs text-center hover:underline'>
                                    Need new user?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (reducers:any) => {

    return reducers.userReducer;

}

export default connect(mapStateToProps, usersActions)(Login);