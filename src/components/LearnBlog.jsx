import React from 'react'
import Learnblogimg from "/images/LearnBlogImg.png"

function LearnBlog() {
  return (
    <div className='mt-40 mb-44 m-14'>
      <h1 className='text-4xl font-semibold text-center'>Learn <span className='text-baddhia-orange'>More</span> from our Blogs</h1>
      <div className='lg:flex mt-10 '>
      <div className='m-3 w-full rounded-2xl overflow-hidden shadow-lg'>
              <img className='h-60 w-full object-cover' src={Learnblogimg} alt="" />
              <div className='px-10 py-5 bg-orange-100 w-auto md:h-full sm:h-64'>
              <h3 className='font-bold text-lg mb-5'>More Than Romance: Building Lasting Friendships on Baddhia</h3>
              <p className='text-sm mb-6'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <div className='flex justify-between items-center'>
                <div>
                  <h4 className='font-bold mb-2'>
                    Fletcher James
                  </h4>
                  <p>June 28, 2018</p>
                </div>
                <div>
                  <button className='text-white bg-baddhia-orange md:text-sm py-2 px-6 rounded-full'>Read More</button>
                </div>
              </div>
              </div>
            </div>
      <div className='m-3 w-full rounded-2xl overflow-hidden shadow-lg'>
              <img className='h-60 w-full object-cover' src={Learnblogimg} alt="" />
              <div className='px-10 py-5 bg-orange-100 w-auto md:h-full sm:h-64'>
              <h3 className='font-bold text-lg mb-5'>More Than Romance: Building Lasting Friendships on Baddhia</h3>
              <p className='text-sm mb-6'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <div className='flex justify-between items-center'>
                <div>
                  <h4 className='font-bold mb-2'>
                    Fletcher James
                  </h4>
                  <p>June 28, 2018</p>
                </div>
                <div>
                  <button className='text-white bg-baddhia-orange md:text-sm py-2 px-6 rounded-full'>Read More</button>
                </div>
              </div>
              </div>
            </div>
      <div className='m-3 w-full rounded-2xl overflow-hidden shadow-lg'>
              <img className='h-60 w-full object-cover' src={Learnblogimg} alt="" />
              <div className='px-10 py-5 bg-orange-100 w-auto md:h-full sm:h-64'>
              <h3 className='font-bold text-lg mb-5'>More Than Romance: Building Lasting Friendships on Baddhia</h3>
              <p className='text-sm mb-6'>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <div className='flex justify-between items-center'>
                <div>
                  <h4 className='font-bold mb-2'>
                    Fletcher James
                  </h4>
                  <p>June 28, 2018</p>
                </div>
                <div>
                  <button className='text-white bg-baddhia-orange md:text-sm py-2 px-6 rounded-full'>Read More</button>
                </div>
              </div>
              </div>
            </div>
      
      </div>
    </div>
  )
}

export default LearnBlog