import React from 'react'


function BlogCommunity() {
  return (
    <div className="bg-[url('/images/Rectangle.png')] bg-no-repeat bg-cover">
        <div className='md:justify-center sm:px-6 px-7 sm:flex lg:px-30 py-20'>
            <div className='text-gray-300 '>
                <h1 className='font-bold lg:text-5xl md:text-4xl text-3xl uppercase w-60 leading-tight mb-5 md:mb-10'>join the <span className='text-baddhia-orange'>baddhia</span> community</h1>
                <p className='text-sm sm:text-base sm:w-80 md:w-96 mb-10'>We exist to inspire bliss in every romantic relationship. Be sure that all of us at Baddhia are committed to making you find love and build intimacy with your significant other. Join our exclusive mailing list to receive updates and other information firsthand</p>
            </div>
            <div className=' justify-between text-gray-300 sm:mx-5  sm:m-auto sm:w-96 text-center'>
                <form action="">
                    <input className='p-4 rounded-2xl w-full mb-7 md:mb-11 bg-gray-300' type='text'placeholder='Your Name'/><br></br>
                    <input className='p-4 rounded-2xl w-full mb-8 md:mb-11 bg-gray-300' type='text'placeholder='Your Email'/><br></br>
                    <input className='bg-baddhia-orange px-12 rounded-full py-2 font-medium' type='submit'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BlogCommunity
