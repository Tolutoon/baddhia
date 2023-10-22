import React from 'react'
import BlogImg from '../components/BlogImg';
import BlogWriteup from '../components/BlogWriteup';
import JoinCard from '../components/JoinCard';
import Footer from '../components/Footer'
import BlogHeader from '../components/BlogHeader';



function Blog() {
    
  return (
    <>
    <BlogHeader/>
      <BlogImg />
      <BlogWriteup />
      <JoinCard />
      <Footer />
    </>
    
  )
}

export default Blog