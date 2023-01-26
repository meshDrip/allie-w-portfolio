import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { motion } from "framer-motion";

const AllieBlog = () => {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url}
            }
        }
      `
      )
      .then((data) => {
        setPostData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="flex-1 overflow-hidden lg:mx-auto"
    >
      <section className="flex flex-col lg:justify-center ">
        <div className="flex flex-col-reverse justify-center h-64 mx-5 my-auto mt-10 text-center rounded-md shadow-lg md:mx-auto bg-canvasPink min-w-64 md:w-3/5 min-h-32 lg:flex-row lg:rounded-xl lg:min-w-3/5">
          <div className="flex justify-center mt-auto overflow-hidden lg:w-1/2 lg:max-h-full lg:flex-shrink-0">
            <img
              className="object-contain"
              src="https://firebasestorage.googleapis.com/v0/b/allie-s-homepage.appspot.com/o/blog-hero-img%2Fslumber.png?alt=media&token=dbdb3741-ff87-48e7-ae1b-e7734508a69f"
              alt="A headshot of Allie's character, Slumber!"
            />
          </div>
          <div className="mx-auto my-auto text-center">
            <h1 className="flex justify-center h-auto pt-5 mb-5 text-5xl text-white md:mr-5 lg:text-8xl font-handwritten lg:mb-auto">
              My Blog!
            </h1>
          </div>
        </div>
        <div className="grid gap-10 mx-auto my-10 lg:my-40 md:grid-cols-2 lg:grid-cols-3">
          {postData &&
            postData.map((post, index) => (
              <article key={post.slug.current} className=" w-72">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="relative block h-64 leading-snug border-b-8 rounded shadow border-coolViolet"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="absolute object-cover w-full h-full rounded-r"
                    />
                    <div className="relative flex items-end justify-end h-full">
                      <div className="p-5 mb-5 ml-16 mr-2 text-white bg-gray-800 bg-opacity-75 rounded">
                        <div className="mr-2 line-clamp-2 font-poppins">
                          {post.title}
                        </div>
                      </div>
                    </div>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </motion.main>
  );
};

export default AllieBlog;
