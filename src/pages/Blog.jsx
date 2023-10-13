import React from 'react'
import BlogImg from '../components/BlogImg';
import BlogWriteup from '../components/BlogWriteup';
import Header from '../components/Header';
import JoinCard from '../components/JoinCard';
import Footer from '../components/Footer'



function Blog() {
    
  return (
    <>
      <Header />
      <BlogImg />
      <BlogWriteup />
      <JoinCard />
      <Footer />
    </>
    
  )
}

export default Blog