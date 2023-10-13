import React from 'react'
import blogimg from "/images/blog-header.png"


function BlogImg() {
  return (
    <div className='md:h-[65vh]'>
      <div className='w-full mb-28 px-8 md:px-16 pt-20 md:pt-0'>
        <img className='w-full ' src={blogimg} alt="" />
      </div>
    </div>
  )
}

export default BlogImg