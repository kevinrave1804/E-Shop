import React, { useContext } from 'react'
import { FaHome } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../../Context';
import Layout from '../../Components/Layout/Layout';

function SignIn() {
    const context = useContext(Context)
    const { setAuth } = context
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        setAuth(true)
        navigate('/')
    }
    return (
        <Layout>
            <section className='bg-teal-600 p-6 lg:px-32 h-screen'>
                <div className='h-full flex justify-between rounded-md bg-white max-lg:flex-col max-lg:justify-end sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
                    <picture className='h-full lg:p-8 max-lg:top-0 max-lg:w-full max-lg:h-24'>
                        <img src="https://i.pinimg.com/736x/a9/33/56/a9335617b3673fce462b923ad7efbfe9.jpg" alt="auth-image" loading='lazy' className='w-full h-full object-cover rounded-md md:shadow-[10px_10px_10px_rgb(0,0,0,0.4)]' />
                    </picture>
                    <div className='flex flex-1 flex-col items-center justify-center md:p-8 max-md:top-0 max-md:w-full max-md:h-11'>
                        <div className='mt-2 flex items-center gap-5'>
                            <FaHome size={50} color='rgb(13 148 136)' />
                            <h2 className='text-xl font-bold'>Sign In</h2>
                        </div>
                        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Fullname
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="name"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="confirmpassword"
                                            name="confirmpassword"
                                            type="password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='mt-1'>
                            <p className='text-sm font-bold'>Do you have an account?
                                <NavLink to={'/login'} className='text-teal-500'>Log In</NavLink></p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default SignIn