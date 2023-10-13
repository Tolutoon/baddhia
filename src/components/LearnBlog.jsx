import React from "react";
import { Link } from "react-router-dom";

function LearnBlog() {
  return (
    <div className="h-fit">
      <h1>Learn More About our Blogs</h1>
      <div className="md:h-[350px] bg-[url('/images/dummyImg.png')] md:w-[323px] h-[280px] w-[263px] bg-cover bg-no-repeat relative shadow-md rounded-2xl">
        <div className="flex absolute bg-[#FFF6F2] md:w-[323px] h-[40%] w-[263px] bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center">
          <img className="w-[130px] h-[20px]" src='' alt="" />
          <Link
          to={'/blogContent'}
          >
            {" "}
            {/* Added target="_blank" for opening links in a new tab */}
            <button
              type="submit"
              className="bg-baddhia-orange p-4 px-8 rounded-[16px] font-semibold md:text-base text-[12px] text-white transition-all duration-300 hover:scale-105"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearnBlog;
