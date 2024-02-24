import React from 'react'

function LogIn() {
    return (
        <section className='bg-teal-600 p-12 lg:px-32 h-screen'>
            <div className='h-full flex justify-between rounded-md bg-white max-md:flex-col-reverse max-md:justify-end'>
                <div>
                    <div>
                        LogIn
                    </div>
                </div>
                <picture className='h-full md:p-8 max-md:top-0 max-md:w-full max-md:h-11'>
                    <img src="https://images.unsplash.com/photo-1539622106114-e0df812097e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="auth-image" loading='lazy' className='w-full h-full object-cover rounded-md md:shadow-[10px_10px_10px_rgb(0,0,0,0.4)]' />
                </picture>
            </div>
        </section>
    )
}

export default LogIn