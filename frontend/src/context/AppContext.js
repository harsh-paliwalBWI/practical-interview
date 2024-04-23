import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogPosts = async () => {
    setLoading(true);
    let url = `${baseUrl}/getblogs.php`;
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!data || data.posts === 0) throw new Error("Something Went Wrong");
      // console.log("Api Response", data);

      setPosts(data);
    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogPosts();

    const intervalId = setInterval(fetchBlogPosts, 10 * 1000); // 5 minutes in milliseconds

    return () => clearInterval(intervalId);
  }, []);

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    fetchBlogPosts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
