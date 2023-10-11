import React from 'react'
import blogimg from "/images/blog-header-img.png"


function BlogImg() {
  return (
    <div>
      <div className='w-full mb-28 px-8 md:px-16'>
        <img className='w-full ' src={blogimg} alt="" />
      </div>
    </div>
  )
}

export default BlogImg