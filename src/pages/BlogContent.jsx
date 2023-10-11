import React from 'react'
import BlogCommunity from '../components/BlogCommunity'
import BlogHeader from '../components/BlogHeader'
import BlogArticle from '../components/BlogArticle'
import Blogfooter from '../components/Blogfooter'

function BlogContent() {
  return (
    <div>
      <BlogHeader />
      <BlogArticle />
      <BlogCommunity />
      <Blogfooter />
    </div>
  )
}

export default BlogContent
