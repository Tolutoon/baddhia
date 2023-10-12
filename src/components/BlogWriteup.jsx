import React from 'react'
import { Link } from 'react-router-dom'
import BlogContent from '../pages/BlogContent'
import Group1 from "/images/group1.jpg"
import Group2 from "/images/group2.jpg"
import Group3 from "/images/group3.jpg"
import Group4 from "/images/group4.jpg"
import Group5 from "/images/group5.jpg"
import Group6 from "/images/group6.jpg"

function BlogWriteup() {
  return (
    <div>
        <div className='m-8 md:m-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                <div className='rounded-2xl overflow-hidden md:block m-1'>
                    <img className='object-cover' src={Group4} alt="" />
                    <div className='bg-B-writeup py-3 pl-6 pr-2'>
                    <h1 className='font-bold font-base'>
                        More Than Romance: Building Lasting Relationships on Baddhia
                    </h1>
                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione quam, eligendi eum debitis neque quod?</p>
                    <h2 className="font-bold mt-3">Anchor's Name</h2>
                    <div className="flex justify-between mt-2">
                        <p className="text-xs">DD-MM-YYYY</p>
                        <div className="bg-baddhia-orange flex-shrink-0 border text-xs text-gray-300 rounded-full uppercase py-2 px-6 m-0">
                            <Link to="/BlogContent">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
            
                <div className='rounded-2xl overflow-hidden md:block m-1'>
                    <img className='object-cover' src={Group4} alt="" />
                    <div className='bg-B-writeup py-3 pl-6 pr-2'>
                    <h1 className='font-bold font-base'>
                        More Than Romance: Building Lasting Relationships on Baddhia
                    </h1>
                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione quam, eligendi eum debitis neque quod?</p>
                    <h2 className="font-bold mt-3">Anchor's Name</h2>
                    <div className="flex justify-between mt-2">
                        <p className="text-xs">DD-MM-YYYY</p>
                        <div className="bg-baddhia-orange flex-shrink-0 border text-xs text-gray-300 rounded-full uppercase py-2 px-6 m-0">
                            <Link to="/">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>

                <div className='rounded-2xl overflow-hidden md:block m-1'>
                    <img className='object-cover' src={Group4} alt="" />
                    <div className='bg-B-writeup py-3 pl-6 pr-2'>
                    <h1 className='font-bold font-base'>
                        More Than Romance: Building Lasting Relationships on Baddhia
                    </h1>
                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione quam,       eligendi eum debitis neque quod?
                    </p>
                    <h2 className="font-bold mt-3">Anchor's Name</h2>
                        <div className="flex justify-between mt-2">
                            <p className="text-xs">DD-MM-YYYY</p>
                            <div className="bg-baddhia-orange flex-shrink-0 border text-xs text-gray-300 rounded-full uppercase py-2 px-6 m-0">
                            <Link to="/">Read more</Link>
                        </div>
                        </div>
                </div>
            </div>
                <div className='rounded-2xl overflow-hidden md:block m-1'>
                    <img className='object-cover' src={Group4} alt="" />
                    <div className='bg-B-writeup py-3 pl-6 pr-2'>
                    <h1 className='font-bold font-base'>
                        More Than Romance: Building Lasting Relationships on Baddhia
                    </h1>
                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione quam,       eligendi eum debitis neque quod?
                    </p>
                    <h2 className="font-bold mt-3">Anchor's Name</h2>
                        <div className="flex justify-between mt-2">
                            <p className="text-xs">DD-MM-YYYY</p>
                            <div className="bg-baddhia-orange flex-shrink-0 border text-xs text-gray-300 rounded-full uppercase py-2 px-6 m-0">
                            <Link to="/">Read more</Link>
                        </div>
                        </div>
                </div>
            </div>
        
        
                
                <div className='rounded-2xl overflow-hidden md:block m-1'>
                    <img className='object-cover' src={Group4} alt="" />
                    <div className='bg-B-writeup py-3 pl-6 pr-2'>
                    <h1 className='font-bold font-base'>
                        More Than Romance: Building Lasting Relationships on Baddhia
                    </h1>
                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione quam, eligendi eum debitis neque quod?</p>
                    <h2 className="font-bold mt-3">Anchor's Name</h2>
                    <div className="flex justify-between mt-2">
                        <p className="text-xs">DD-MM-YYYY</p>
                        <div className="bg-baddhia-orange flex-shrink-0 border text-xs text-gray-300 rounded-full uppercase py-2 px-6 m-0">
                            <Link to="/">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className='rounded-2xl overflow-hidden md:block m-1'>
                    <img className='object-cover' src={Group4} alt="" />
                    <div className='bg-B-writeup py-3 pl-6 pr-2'>
                    <h1 className='font-bold font-base'>
                        More Than Romance: Building Lasting Relationships on Baddhia
                    </h1>
                    <p className='text-xs mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione quam, eligendi eum debitis neque quod?</p>
                    <h2 className="font-bold mt-3">Anchor's Name</h2>
                    <div className="flex justify-between mt-2">
                        <p className="text-xs">DD-MM-YYYY</p>
                        <div className="bg-baddhia-orange flex-shrink-0 border text-xs text-gray-300 rounded-full uppercase py-2 px-6 m-0">
                            <Link to="/">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'><button className='bg-baddhia-orange py-2 px-9 mb-28 uppercase text-gray-300 text-lg font-semibold rounded-full'><Link to="/">Read more article</Link></button></div>
    </div>
  )
}

export default BlogWriteup
