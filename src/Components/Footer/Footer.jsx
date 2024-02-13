import React from 'react'
import { NavLink } from 'react-router-dom'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'

function Footer() {
    return (
        <footer className='bg-[#75FBB2] h-[100px] text-center'>
            <h2 className='text-xl font-bold'>Contact Us</h2>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <BuildingStorefrontIcon className='h-14 w-14' />
                    <h2 className='text-5xl font-bold'>E-Shop</h2>
                </div>
                <ul className='flex'>
                    <NavLink
                        to={'https://github.com/kevinrave1804?tab=repositories'}
                        target='_blank'>
                        <li className='flex items-center mr-4'>
                            <img
                                className='w-10 h-10 m-2'
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="github" />
                            <p>Github</p>
                        </li>
                    </NavLink>
                    <NavLink
                        to={'https://www.linkedin.com/in/kevin-ramirez-2a98801a2'}
                        target='_blank'>
                        <li className='flex items-center mr-4'>
                            <img
                                className='w-10 h-10 m-2'
                                src="https://cdn-icons-png.flaticon.com/512/25/25320.png"
                                alt="linkeid" />
                            <p>LinkedIn</p>
                        </li>
                    </NavLink>
                    <NavLink
                        to={'https://www.instagram.com/kevin_velez18'}>
                        <li className='flex items-center mr-4'>
                            <img
                                className='w-10 h-10 m-2'
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                                alt="instagram" />
                            <p>Instagram</p>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </footer>
    )
}

export default Footer