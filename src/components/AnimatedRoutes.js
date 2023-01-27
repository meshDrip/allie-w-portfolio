import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AllieBlog from "./AllieBlog";
import AllieBlogPost from "./AllieBlogPost";
import AllieAbout from "./AllieAbout";
import AllieHomepage from "./AllieHomepage";
import AlliePortfolio from "./AlliePortfolio";

import { motion, AnimatePresence } from "framer-motion";

function AnimatedRoutes(props) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AllieHomepage
              allieGallery={props.galleryImages}
              loaderIsVisible={props.loaderIsVisible}
            />
          }
          exact
        />
        <Route
          path="/portfolio"
          element={
            <AlliePortfolio
              allieGallery={props.galleryImages}
              loaderIsVisible={props.loaderIsVisible}
            />
          }
        />
        <Route path="/about" element={<AllieAbout />} />
        <Route path="/post/:slug" element={<AllieBlogPost />} />
        <Route path="/blog" element={<AllieBlog />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
