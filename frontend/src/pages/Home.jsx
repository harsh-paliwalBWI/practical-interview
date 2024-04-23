import React from "react";
import Blogs from "../components/Blogs";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-12 sm:mt-16 md:mt-20">
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
