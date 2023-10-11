import React from 'react';
import Logo from '/images/logoWhite.svg';

function Footer() {
  return (
    <footer className='footer h-[40vh] p-10'>
        <div className='flex'>
        <div>
        <img src={Logo} alt=''/>
        <span>Copyright © 2023 All Rights Reserved : Baddhia</span>
        </div>
        <div>
        <div>
            <span>Terms of use</span>
            <span>Privacy Policy</span>
            <span>Blog</span>
            <span>Frequently Asked Questions</span>
        </div>
        <button className='bg-white text-baddhia-orange px-14 py-4'>Download</button>
        </div>
        </div>
    </footer>
  )
}

export default Footer