import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { Context } from '../../Context';

function Footer() {
    const context = useContext(Context)
    return (
        <>
            <footer className="bg-teal-600">
                <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8">
                    <div className="flex sm:items-center sm:justify-between max-sm:flex-col max-sm:items-center">
                        <NavLink to={"/"} className="flex flex-shrink-0 items-center">
                            <BuildingStorefrontIcon className='h-14 w-auto' />
                            <h2 className='text-3xl font-bold'>E-Shop</h2>
                        </NavLink>

                        <div className='flex items-center max-sm:flex-col'>
                            <h2 className='text-xl font-bold mr-6'>Contact Us</h2>
                            <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                                <li>
                                    <NavLink
                                        to={"https://www.linkedin.com/in/kevin-ramirez-2a98801a2"}
                                        target="_blank"
                                    >
                                        <span className="sr-only">LinkedIn</span>
                                        <FaLinkedin className="h-8 w-8" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"https://github.com/kevinrave1804?tab=repositories"}
                                        target="_blank"
                                    >
                                        <span className="sr-only">Github</span>
                                        <FaGithub className="h-8 w-8" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={"https://www.instagram.com/kevin_velez18"}
                                        target="_blank"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <FaInstagramSquare className="h-8 w-8" />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer