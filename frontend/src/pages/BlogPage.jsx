import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { baseUrl } from "../baseUrl";
import BlogContent from "../components/BlogContent";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);

  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchBlogContent() {

    setLoading(true);
    let url = `${baseUrl}/getblogs.php`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      const blog = data.find((blog) => blog.id === blogId);

      if (blog) {
        setBlog(blog);
      } else {
        throw new Error("Blog not found");
      }
    } catch (error) {
      console.log("Error fetching blog content:", error);
      setBlog(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchBlogContent();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div className="flex items-center  mt-12 sm:mt-16 md:mt-20  ml-2 sm:ml-3 md:ml-4 mb-2 sm:mb-3 md:mb-4">
        <button
          className="border-2 border-gray-300 sm:py-0.5 md:py-1 px-2 sm:px-3 md:px-4 rounded-md text-sm sm:text-base md:text-lg"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg font-bold">
          <p> Loading</p>
        </div>
      ) : blog ? (
        <div className="mb-12 sm:mb-16 md:mb-20">
          <BlogContent post={blog} />
        </div>
      ) : (
        <div className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10 text-lg font-bold">
          <p>No Blog Found</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
