import React from 'react'

const Header = () => {
    return (
        <header>
            <div className=" flex justify-between py-2">
                <h1 className=' font-bold text-3xl'>Online Shop</h1>
                <button className=' border-2 border-black px-3 py-1 font-semibold relative'>My Cart <span className=' inline-block bg-red-500 text-white rounded-full px-2 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2'>1</span></button>
            </div>
        </header>
    )
}

export default Header