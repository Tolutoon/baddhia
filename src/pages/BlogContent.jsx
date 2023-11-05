import React from "react";
import BlogArticle from "../components/BlogArticle";

import Footer from "../components/Footer";
import JoinCard from "../components/JoinCard";
import BlogHeader from "../components/BlogHeader";

function BlogContent() {
  return (
    <div className="">
      <BlogHeader />
      <BlogArticle />
      <JoinCard />
      <Footer />
    </div>
  );
}

export default BlogContent;
