import React from 'react'
import Frameblog from "/images/Frameblog1.png"
import Frameblog1 from "/images/Frameblog2.png"
import Frameblog2 from "/images/Frameblog3.png"
import Frameblog3 from "/images/Frameblog4.png"


function BlogArticle() {
  return (
    <div>
      <div className='sm:flex lg:px-36 lg:pt-16 md:px-10 sm:mt-11 px-8 md:justify-between mb-48'>
        <div className='sm:w-1/2 sm:mr-6 lg:mr-10 mb-16'>
          <img className='h-96 w-full object-cover sm:h-80 mb-10' src={Frameblog} alt=""/>
          <p className='mb-7 text-justify'>Lorem ipsum dolor sit amet consectetur. Et interdum pulvinar pharetra eu semper vel. Curabitur mollis aliquam non egestas tortor justo luctus consequat. Sagittis lectus amet adipiscing nibh nulla congue sapien ligula quisque. Praesent eget non et cursus semper tincidunt. Ultricies elementum bibendum dignissim pharetra dui neque non a sed. Tortor diam tortor venenatis morbi. Elementum in amet tellus ipsum amet. Congue dictumst sit nunc cras fringilla a eget tempus euismod.
          Molestie hac nunc amet dictum quis viverra a lorem. A mi nibh lorem suscipit. Pellentesque non est gravida praesent. Fringilla molestie lorem fermentum risus pulvinar. In risus consequat fermentum gravida viverra. Vestibulum imperdiet
          </p> 

          <p className='mb-7 text-justify'>est felis elementum feugiat faucibus tempus fusce. Malesuada nec et egestas hac gravida egestas malesuada sit. Id malesuada enim aliquet sed ultricies pellentesque aliquam donec bibendum. Posuere nunc pellentesque aliquam donec bibendum. Posuere nunc vulputate non est eu sit.
          In risus consequat fermentum gravida viverra. Vestibulum imperdiet est felis elementum feugiat faucibus tempus fusce. pellentesque aliquam donec bibendum. Posuere nunc vulputate non est eu sit.
          </p>

          <p className='text-justify'>
          est felis elementum feugiat faucibus tempus fusce. Malesuada nec et egestas hac gravida egestas malesuada sit. Id malesuada enim aliquet sed ultricies pellentesque aliquam donec bibendum. Posuere nunc pellentesque aliquam donec bibendum. Posuere nunc vulputate non est eu sit.
          In risus consequat fermentum gravida viverra. Vestibulum imperdiet est felis elementum feugiat faucibus tempus fusce. pellentesque aliquam donec bibendum. Posuere nunc vulputate non est eu sit.
          </p>
          
        </div>
        <div className='sm:w-1/2 sm:ml-6 lg:ml-20'>
          <div className='relative mb-16'>
            <img className='h-96 w-full object-cover sm:h-80' src={Frameblog1} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
              <p className='text-2xl w-60 mb-10 font-bold'>Find a Compatible
                Partner on Baddhia Today!
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.baddhia.app">
              <button
               className='bg-baddhia-orange py-3 px-10 rounded-full'>Download Now
               </button>
               </a>
            </div>
          </div>
          <div className='mb-16'>
            <div className='bg-B-writeup py-20 w-full'> 
              <div className='text-center text-black'>
              <p className='mb-4 font-bold text-lg'>
              Subscribe to our newsletter
              </p>
              <p className='px-10'>Lorem ipsum dolor sit amet consectetur. Ultrices id congue augue enim vestibulum magna vita risus.</p>
              <div>
                <div>
                  <button className='bg-baddhia-orange py-3 px-12 sm:py-3 sm:px-16 rounded-full text-white'>Submit</button>
                </div>
                <div className='md:px-11 px-8'>
                <input className='mt-6 pl-4  py-3 w-full rounded-full outline-none ' placeholder='EMAIL' type="email" name="Email Address" id="emailAddress" required/>
                </div>
            </div>
            
                
              </div>
              
              
            </div>
          </div>

          <div className='mb-7'>
            <p className='text-baddhia-orange font-semibold mb-5 text-lg'>Related Article</p>
            <div className='w-full rounded-2xl overflow-hidden shadow-lg'>
              <img className='h-60 w-full object-cover' src={Frameblog3} alt="" />
              <div className='px-10 py-5 bg-orange-100 lg:h-64 w-auto md:h-80 sm:h-64'>
              <h3 className='font-bold text-lg mb-3'>More Than Romance: Building Lasting Friendships on Baddhia</h3>
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
                  <button className='text-white bg-baddhia-orange py-2 px-6 rounded-full'>Read More</button>
                </div>
              </div>
              </div>
            </div>
          </div>

          <div>
          <div className='w-full rounded-2xl overflow-hidden shadow-lg'>
              <img className='h-60 w-full object-cover' src={Frameblog3} alt="" />
              <div className='px-10 py-5 lg:h-64 bg-orange-100 w-auto md:h-80 sm:h-64'>
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
                  <button className='text-white bg-baddhia-orange py-2 px-6 rounded-full'>Read More</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogArticle

