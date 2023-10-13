import React from "react";
import BlogArticle from "../components/BlogArticle";

import Header from "../components/Header";
import Footer from "../components/Footer";
import JoinCard from "../components/JoinCard";

function BlogContent() {
  return (
    <div className="" id="blogContent">
      <Header />
      <BlogArticle />
      <JoinCard />
      <Footer />
    </div>
  );
}

export default BlogContent;
