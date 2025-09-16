import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";


const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouting;
