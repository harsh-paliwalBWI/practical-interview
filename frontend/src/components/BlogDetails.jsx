import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <NavLink to={`/blog/${post.id}`}>
      <div className="flex flex-col items-center shadow-lg border-2 h-full   gap-2 sm:gap-3 md:gap-4 p-4 w-full sm:p-6 md:p-8 ">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center ">{post.title}</h2>

        <p className="font-medium text-[10px] sm:text-xs md:text-sm text-[#ada5a0] "> Created At: {post.createdAt} </p>
        <p className="text-xs sm:text-sm md:text-base  line-clamp-6"> {post.content}</p>
      </div>
    </NavLink>
  );
};

export default BlogDetails;
