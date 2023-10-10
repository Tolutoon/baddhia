import React from 'react'
import BlogHeader from '../components/BlogHeader';
import BlogImg from '../components/BlogImg';
import BlogWriteup from '../components/BlogWriteup';
import BlogCommunity from '../components/BlogCommunity';
import Blogfooter from "../components/Blogfooter";
import BlogContent from '../components/BlogContent';


function Blog() {
    
  return (
    <>
      <BlogHeader />
      <BlogImg />
      <BlogWriteup />
      <BlogCommunity />
      <Blogfooter />
      <BlogContent />
    </>
    
  )
}

export default Blog
