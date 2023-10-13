import React from 'react'
import Logo from "/images/baddhia-logo.png"

function Navbar() {
  return (
    <div>
      <div>
        <nav className='sm:flex shadow-lg items-center justify-center sm:justify-between md:px-10 lg:px-20 py-6'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='text-sm font-semibold'>
                <a className='lg:mx-7 md:mx-3' href="#home">About</a>
                <a className='lg:mx-7 md:mx-3'  href="#home">Support</a>
                <a className='lg:mx-7 md:mx-3'  href="#home">Blog</a>
                <a className='lg:mx-7 md:mx-3'  href="#home">Download App</a>
            </div>
            <div className='sm:flex'>
                <div>
                    <button className='bg-white border whitespace-no-wrap" border-baddhia-orange text-sm text-baddhia-orange hover:border-baddhia-orange font-semibold px-10 py-2 rounded-full'>Log In</button>
                </div>
                <div>
                    <button className='bg-baddhia-orange border flex-wrap border-baddhia-orange md:ml-2 lg:ml-4 text-white text-sm hover:border-baddhia-orange font-semibold px-9 py-2 rounded-full'>Sign Out</button>
                </div>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
