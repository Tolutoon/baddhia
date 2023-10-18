import React from 'react'
import blogimg from "/images/blog-header.png"



function BlogImg() {
  return (
    <div>
      <div className='w-full relative mb-28 px-8 md:px-16 pt-10 md:pt-0'>
        <img className='w-full h-auto' src={blogimg} alt="" />
        <div className='absolute left-10 md:left-20 bottom-5 inset-0 flex items-end justify-left text-left text-xs sm:left-10 md:text-xl text-white font-semibold lg:text-2xl'>
        <p >Mastering Baddhia: A Comprehensive Guide to<br></br> Navigating the App</p>
        </div>
      </div>
    </div>
  )
}

export default BlogImg