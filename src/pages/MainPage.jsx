import React from "react";
import Blogs from "../components/Blogs";

const MainPage = ({ blogs, deleteBlog }) => {
  return <Blogs blogs={blogs} deleteBlog={deleteBlog} />;
};

export default MainPage;
