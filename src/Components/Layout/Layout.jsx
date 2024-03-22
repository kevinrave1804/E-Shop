import React from 'react'

function Layout({ children }) {
    return (
        <div className='relative flex flex-col'>
            {children}
        </div>
    )
}

export default Layout