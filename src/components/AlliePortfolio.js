import { React, useEffect, useState } from "react";

import { PhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import LoadingElement from "./LoadingElement.js";

import { motion } from "framer-motion";

const AlliePortfolio = (props) => {
  const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
  const [index, setIndex] = useState(-1);
  let galleryArray = [];

  galleryArray = props.allieGallery.map((image) => {
    const width = breakpoints[0];
    const height = (image.height / image.width) * width;

    return {
      src: image,
      width,
      height,
      images: breakpoints.map((breakpoint) => {
        const height = Math.round((image.height / image.width) * breakpoint);
        const src = image.src;
        return {
          src,
          width: breakpoint,
          height,
        };
      }),
    };
  });

  const slides = galleryArray.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  }));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="container flex flex-col justify-center w-5/6 mx-auto my-auto md:w-2/5 max-h-1/2"
    >
      <div className="p-5 mx-auto my-10 bg-white shadow-2xl lg:p-10 rounded-3xl">
        <PhotoAlbum
          breakpoints={[300, 600, 1200]}
          photos={props.allieGallery}
          layout="rows"
          rowConstraints={{ maxPhotos: 3, minPhotos: 2 }}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <div
          className=""
          style={{
            display: props.loaderIsVisible ? "block" : "none",
          }}
        >
          <LoadingElement />
        </div>
      </div>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Zoom, Thumbnails]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 1,
          borderRadius: 5,
          padding: 4,
          gap: 16,
          imageFit: "contain",
          vignette: true,
        }}
      />
    </motion.main>
  );
};

export default AlliePortfolio;
