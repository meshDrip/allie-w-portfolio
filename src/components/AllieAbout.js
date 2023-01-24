import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import LoadingElement from "./LoadingElement.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

function AllieAbout() {
  const [allieAbout, setAllieAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAllieAbout(data[0]))
      .catch(console.error);
  }, []);

  if (!allieAbout)
    return (
      <div className="w-4/5 p-32 mx-auto my-auto text-white bg-canvasPink h-4/5 rounded-2xl">
        <LoadingElement className="" />
      </div>
    );

  return (
    <main className="flex flex-col flex-1 w-5/6 max-w-5xl mx-auto my-5 text-white md:w-3/5 md:justify-center">
      <section className="flex flex-col justify-center min-h-full mx-auto my-auto text-center border-white bg-canvasPink rounded-3xl">
        <div className="mx-auto ">
          <img
            src={allieAbout.authorImage}
            className="object-contain h-auto max-w-full rounded md:h-96"
            alt={allieAbout.name}
          />
        </div>
        <div>
          <h1>
            <span className="text-4xl md:text-6xl font-handwritten">
              {allieAbout.name}
            </span>
          </h1>
          <div className="p-5 text-center">
            <BlockContent
              id="allie-abt"
              blocks={allieAbout.bio}
              projectId="dwrv7983"
              dataset="production"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AllieAbout;
