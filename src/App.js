import "./index.css";
import React, { useState, useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Nav from "./components/Nav";
import AllieHomepage from "./components/AllieHomepage";
import AlliePortfolio from "./components/AlliePortfolio";
import AllieFooter from "./components/AllieFooter";
import UnderConstruction from "./components/UnderConstruction";
import AllieBlog from "./components/AllieBlog";
import AllieBlogPost from "./components/AllieBlogPost";
import AllieAbout from "./components/AllieAbout";

import firebase from "./.firebase/config.js";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

library.add(fab, faInstagram, faEnvelope);

function App() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);
  const storage = getStorage();
  const portfolioImgsRef = ref(storage, "portfolio-gallery");
  const location = useLocation();

  useEffect(() => {
    const fetchImgs = async () => {
      try {
        const portfolioImages = await listAll(portfolioImgsRef);
        const imageList = await Promise.all(
          portfolioImages.items.map(async (image) => {
            const url = await getDownloadURL(ref(storage, image.fullPath));
            const img = new Image();
            img.src = url;
            img.onload = () => {
              let imageOutput = {
                src: img.src,
                width: img.width,
                height: img.height,
                alt: img.alt,
              };
              setGalleryImages((galleryArray) => [
                ...galleryArray,
                imageOutput,
              ]);
            };
          })
        );
      } catch (e) {
        console.log(e);
      }

      setLoaderIsVisible(false);
    };

    fetchImgs();
  }, []);

  return (
    <div className="container flex flex-col min-w-full min-h-screen bg-cover bg-mainBG">
      <Nav
        contactButtons={[
          {
            icon: "fab fa-instagram fa-2xl",
            link: "https://www.instagram.com/artsyalexw/",
          },
          {
            icon: "fab fa-twitter fa-2xl",
            link: "https://twitter.com/artsyalexw",
          },
          {
            icon: "fas fa-envelope fa-2xl",
            link: "mailto:alex@artsyalexw.com",
          },
        ]}
      />
      <Routes>
        <Route
          path="/"
          element={
            <AllieHomepage
              allieGallery={galleryImages}
              loaderIsVisible={loaderIsVisible}
            />
          }
          exact
        />
        <Route
          path="/portfolio"
          element={
            <AlliePortfolio
              allieGallery={galleryImages}
              loaderIsVisible={loaderIsVisible}
            />
          }
        />
        <Route path="/about" element={<AllieAbout />} />
        <Route path="/post/:slug" element={<AllieBlogPost />} />
        <Route path="/blog" element={<AllieBlog />} />
      </Routes>
      <AllieFooter />
    </div>
  );
}

export default App;
