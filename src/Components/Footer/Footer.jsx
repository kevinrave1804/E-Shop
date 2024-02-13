import React from 'react'
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
                    <li className='flex items-center mr-4'>
                        <img
                            className='w-10 h-10 m-2'
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="github" />
                        <p>Github</p>
                    </li>
                    <li className='flex items-center mr-4'>
                        <img
                            className='w-10 h-10 m-2'
                            src="https://cdn-icons-png.flaticon.com/512/25/25320.png"
                            alt="linkeid" />
                        <p>LinkedIn</p>
                    </li>
                    <li className='flex items-center mr-4'>
                        <img
                            className='w-10 h-10 m-2'
                            src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                            alt="instagram" />
                        <p>Instagram</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer