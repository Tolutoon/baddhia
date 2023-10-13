import React from "react";
import { Link } from "react-router-dom";

function LearnBlog() {
  return (
    <div className="h-fit md:px-40 mb-20 flex flex-col justify-center items-center">
      <h1 className="text-center font-semibold md:text-3xl text-[22px] mb-10">Learn <span className="text-baddhia-orange">More</span> About our Blogs</h1>
      <div className=" bg-[url('/images/dummyImg.png')]  h-[470px] w-[283px] bg-cover bg-center bg-no-repeat relative shadow-md rounded-2xl">
        <div className="flex absolute bg-[#FFF6F2] w-fit bottom-0 flex-col gap-[16px] rounded-2xl justify-center items-center p-4">
          <div className="w-[90%]">
            <h3 className="text-baddhia-orange font-semibold mb-4">More Then Romance: Building Lasting Friendships on Baddhia</h3>
            <p className="text-gray-400 text-[12px] mb-4">
              Aenean eleifend ante maecenas pulvinar montes lorem et pede dis
              dolor pretium donec dictum. Vici consequat justo enim. Venenatis
              eget adipiscing luctus lorem.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-[12px]">Fletcher James</span>
                <span className="text-[12px]">June 28, 2013</span>
              </div>

              <Link to={"/blogContent"}>
                {" "}
                {/* Added target="_blank" for opening links in a new tab */}
                <button
                  type="submit"
                  className="bg-baddhia-orange p-2 px-8 rounded-[16px] font-semibold text-[12px] text-white transition-all duration-300 hover:scale-105"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearnBlog;
