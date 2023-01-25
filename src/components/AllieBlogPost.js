import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

import sanityClient from "../client.js";
import LoadingElement from "./LoadingElement.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const AllieBlogPost = (props) => {
  const [blogPost, setBlogPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      publishedAt,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      content
    }`
      )
      .then((data) => setBlogPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!blogPost)
    return (
      <div className="flex flex-col justify-center my-auto">
        <LoadingElement />
      </div>
    );

  return (
    <main className="flex-1 p-12">
      <article className="container mx-auto bg-white rounded-lg shadow-lg drop-shadow">
        <header className="relative">
          <div className="absolute flex justify-center w-full h-full p-8 center">
            <div className="flex flex-col justify-center p-12 my-auto text-center bg-white bg-opacity-95 column rounded-xl">
              <h1 className="p-5 text-3xl md:p-10 lg:text-5xl font-handwritten">
                {blogPost.title}
              </h1>
              <h2>
                {" "}
                {blogPost.publishedAt
                  ? `${new Date(
                      blogPost.publishedAt
                    ).toDateString()} at ${new Date(
                      blogPost.publishedAt
                    ).toLocaleTimeString()}`
                  : ""}
              </h2>
            </div>
          </div>
          <img
            src={blogPost.mainImage.asset.url}
            alt={blogPost.title}
            className="object-cover w-full rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="max-w-full px-16 py-12 prose lg:px-48 lg:py-20 lg:prose-xl">
          <BlockContent
            blocks={blogPost.content}
            projectId="d340rx8h"
            dataset={"production"}
          />
        </div>
      </article>
    </main>
  );
};

export default AllieBlogPost;
