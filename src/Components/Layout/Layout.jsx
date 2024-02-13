import React from 'react'

function Layout({ children }) {
    return (
        <div className='relative flex flex-col md:mt-14'>
            {children}
        </div>
    )
}

export default Layout