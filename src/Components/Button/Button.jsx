import React from 'react'

function classNames(...clases) {
    return clases.filter(Boolean).join(' ')
}

function Button({ text, role }) {
    return (
        <button className={classNames(role == 'primary' ? 'bg-teal-600 text-black' : 'bg-black text-teal-600', 'font-bold border border-black px-4 py-2 rounded-md mr-3')}>
            {text}
        </button>
    )
}

export default Button