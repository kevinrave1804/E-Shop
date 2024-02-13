import React from 'react'

function Layout({ children }) {
    return (
        <div className='relative flex flex-col mt-20'>
            {children}
        </div>
    )
}

export default Layout