import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className=' mt-auto bg-black text-white py-2 text-lg text-center'>
            @ {year} <a href="https://mmsit.com" className=' text-gray-500'>MMSIT</a> All rights reserved.
        </footer>
    )
}

export default Footer