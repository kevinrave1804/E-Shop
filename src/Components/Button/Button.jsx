import React from 'react'
import { NavLink } from 'react-router-dom'

function classNames(...clases) {
    return clases.filter(Boolean).join(' ')
}

function Button({ text, role, route }) {
    return (
        <NavLink to={route} className={classNames(role == 'primary' ? 'bg-teal-600 text-black' : 'bg-black text-teal-600', 'font-semibold px-4 py-1 rounded-md mr-3')}>
            {text}
        </NavLink>
    )
}

export default Button