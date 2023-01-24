import React, { useState } from "react";

import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import allieConfig from "../allie_config.json";
import LoadingElement from "./LoadingElement";

const homepageImgs = allieConfig.SiteImages.homepage.map((el) => {
  return { original: el.imgSrc, thumbnail: el.imgSrc };
});

function AllieMiniGallery(props) {
  if (props.loaderIsVisible) {
    return <LoadingElement />;
  }

  return (
    // <div className="rounded-xl">
    //   <div className="p-5 pt-10 text-5xl md:p-5 text-centered font-handwritten ">
    //     Come take a look at my portfolio!
    //   </div>
    //   <div className="min-h-full p-5 pt-0 md:p-10">
    //     <Link to={"/portfolio"}>
    //       <ImageGallery
    //         id="mini-gallery"
    //         items={homepageImgs}
    //         showThumbnails={false}
    //         showFullscreenButton={false}
    //         showPlayButton={false}
    //         showNav={false}
    //         autoPlay={true}
    //         className=""
    //       />
    //     </Link>
    //   </div>
    // </div>
    <div
      id="mini-gallery"
      className="relative flex flex-col justify-center w-full h-full overflow-hidden"
    >
      {props.allieGallery &&
        props.allieGallery.slice(0, 3).map((img, index) => (
          <div
            key={index}
            className={`h-full w-full absolute bg-white gallery-slide-${index} rounded-xl`}
          >
            <img
              className={`h-full object-contain rounded-xl gallery-img-${index} mx-auto`}
              src={img.src}
              alt="A small fading carousel featuring some of Allie's works."
            />
          </div>
        ))}
    </div>
  );
}
export default AllieMiniGallery;
