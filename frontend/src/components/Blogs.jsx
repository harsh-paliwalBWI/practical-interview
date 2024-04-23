import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-8 ">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl">
            Loading
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-xl sm:text-2xl md:text-3xl">
            No Blogs Found !
          </p>
        </div>
      ) : (
        <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {posts
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((post) => (
              <div className="gap-y-2 h-full" key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
        </div>
      )}

      <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8  h-10">
        {currentPage !== 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className="bg-black hover:bg-cyan-800 text-white font-bold w-24 sm:w-28 md:w-32 py-1 md:py-2 px-2 sm:px-3 md:px-4 rounded"
          >
            <p className="text-xs sm:text-sm md:text-base">Previous</p>
          </button>
        )}
        {posts.length > currentPage * itemsPerPage && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="bg-black hover:bg-cyan-800 text-white font-bold w-24 sm:w-28 md:w-32 py-1 md:py-2 px-2 sm:px-3 md:px-4 rounded"
          >
            <p className="text-xs sm:text-sm md:text-base">Next</p>
          </button>
        )}
      </div>
    </div>
  );
}
