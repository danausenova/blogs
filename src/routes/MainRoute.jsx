import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import AddBlog from "../pages/AddBlog";
import AboutUs from "../pages/AboutUs";
import Contacts from "../pages/Contacts";
import Favorite from "../pages/Favorite";

const MainRoute = ({ blogs, deleteBlog, addBlog }) => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<MainPage blogs={blogs} deleteBlog={deleteBlog} />}
        />
        <Route path="/blog" element={<AddBlog addBlog={addBlog} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
