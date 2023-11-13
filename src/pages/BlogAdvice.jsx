import React from 'react'
import BlogHeader from '../components/BlogHeader'
import BlogAdviceSlide from '../components/BlogAdviceSlide'
import BlogAdviceCard from '../components/BlogAdviceCard'
import JoinCard from '../components/JoinCard'
import Footer from '../components/Footer'

function BlogAdvice() {
  return (
    <div>
        <BlogHeader />
        <BlogAdviceSlide />
        <BlogAdviceCard />
        <JoinCard />
        <Footer />
    </div>
  )
}

export default BlogAdvice
