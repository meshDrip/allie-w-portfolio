import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllieMiniGallery from "./AllieMiniGallery";

function AllieHomepage(props) {
  return (
    <main className="flex flex-col justify-center flex-1 h-full mx-auto my-10 text-center content-section font-poppins">
      <Link to={"/about"}>
        <div id="allieHero" className="mb-10 ">
          <div className="flex flex-col justify-center w-auto p-1 mx-5 bg-white shadow-md md:mx-10 has-text-centered rounded-xl lg:flex-row">
            <div className="flex flex-row justify-center mx-auto md:w-2/5 basis-64 md:basis-auto">
              <img
                className="object-contain"
                src="https://firebasestorage.googleapis.com/v0/b/allie-s-homepage.appspot.com/o/hero-img%2Falliecolorhero.png?alt=media&token=b277d993-980f-4f95-a9da-cef39dfcc329"
                alt="Illustration by Alex 'Allie' Wuollet, a self-portrait where the artist is surrounded by her original characters while drawing on her tablet."
              />
            </div>

            <div className="flex flex-col justify-center p-3 mx-auto my-auto text-center lg:w-1/2 h-1/2 ">
              <div
                id="allieTitle"
                className="flex flex-row flex-wrap justify-center text-5xl md:text-7xl font-handwritten"
                aria-hidden="true"
              >
                <p className="flex-none mx-2">
                  <span className="">
                    <span style={{ "--i": 1 }}>A</span>
                    <span style={{ "--i": 2 }}>l</span>
                    <span style={{ "--i": 3 }}>e</span>
                    <span style={{ "--i": 4 }}>x</span>
                  </span>
                </p>
                <p className="flex-none mx-2">
                  <span className="">
                    <span style={{ "--i": 6 }}>"</span>
                    <span style={{ "--i": 7 }}>A</span>
                    <span style={{ "--i": 8 }}>l</span>
                    <span style={{ "--i": 9 }}>l</span>
                    <span style={{ "--i": 10 }}>i</span>
                    <span style={{ "--i": 11 }}>e</span>
                    <span style={{ "--i": 12 }}>"</span>
                  </span>
                </p>
                <p className="flex-none mx-2">
                  <span className="">
                    <span style={{ "--i": 14 }}>W</span>
                    <span style={{ "--i": 15 }}>u</span>
                    <span style={{ "--i": 16 }}>o</span>
                    <span style={{ "--i": 17 }}>l</span>
                    <span style={{ "--i": 18 }}>l</span>
                    <span style={{ "--i": 19 }}>e</span>
                    <span style={{ "--i": 20 }}>t</span>
                  </span>
                </p>
              </div>
              <div className="my-5 text-xl">
                Character Designer / Illustrator
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/portfolio"}>
        <div className="flex flex-col justify-center w-5/6 p-2 pb-5 mx-auto my-auto text-center bg-white shadow-md h-160 md:w-4/6 rounded-xl">
          <h2 className="p-5 pb-2 text-5xl font-handwritten">
            Come check out my art!
          </h2>
          <AllieMiniGallery
            allieGallery={props.allieGallery}
            loaderIsVisible={props.loaderIsVisible}
          />
          <button className="w-4/6 px-4 py-2 mx-auto mt-4 text-5xl text-center text-white md:text-3xl h-18 md:w-1/6 bg-canvasPink font-handwritten rounded-xl">
            <span>Click me!</span>
          </button>
        </div>
      </Link>
    </main>
  );
}

export default AllieHomepage;
