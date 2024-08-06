import React from 'react'

const CategoryButton = ({ title, current }) => {
    return (
        <button className={` ${current && "bg-gray-800 text-white"} border-2 border-black px-3 py-2 font-semibold text-nowrap`}>{title}</button>
    )
}

export default CategoryButton