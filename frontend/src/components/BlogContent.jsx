import React from "react";

const BlogContent = ({ post }) => {
  return (
  
      <div className="flex flex-col items-center text-justify h-full   gap-2 sm:gap-3 md:gap-4 px-8 w-full sm:px-12 md:px-16 ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center ">{post.title}</h2>

        <p className="font-medium text-xs sm:text-sm md:text-base text-[#ada5a0] "> Created At: {post.createdAt} </p>
        <p className="text-xs sm:text-sm md:text-base  "> {post.content}</p>
      </div>

  );
};

export default BlogContent;
