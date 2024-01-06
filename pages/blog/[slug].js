// NextJS Components
import Head from "next/head";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Script from "next/script";
import SyntaxHighlighter from "react-syntax-highlighter";

// Sanity Requirements
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";

// miscellaneous
import moment from "moment";
import getYouTubeID from "get-youtube-id";

// Exp imports
import { PortableText as PortableTextReact } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

const myConfiguredSanityClient = ({sanityKey}) => createClient({
  projectId: sanityKey.sanity_project_id,
  dataset: sanityKey.sanity_dataset,
  useCdn: false,
});
const builder = imageUrlBuilder(myConfiguredSanityClient);

const SampleImageComponent = ({ value, isInline }) => {

  const { width, height } = getImageDimensions(value);

  return (
    <img
      src={builder.image(value).url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,
    code: (node) => {
      const { code, language } = node.value;
      return (
        <SyntaxHighlighter language={language || "text"}>
          {code}
        </SyntaxHighlighter>
      );
    },

    youtube: (yt) => {
      const { url } = yt.value;
      const id = getYouTubeID(url);

      const yturl = `https://www.youtube.com/embed/${id}`;

      return (
        <div style={{overFlow: "hidden", paddingBottom: "56.25%", position: "relative", height: "0"}}>
        <iframe
          width="560"
          height="315"
          src= {yturl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{left: "0", top: "0", height: "100%", width: "100%", position: "absolute"}}
        ></iframe>
        </div>
      );
    },
  },
};

const Post = ({ blog, profile, social, sanityKey }) => {
  const myConfiguredSanityClient = createClient({
    projectId: sanityKey.sanity_project_id,
    dataset: sanityKey.sanity_dataset,
    useCdn: false,
  });
  const builder = imageUrlBuilder(myConfiguredSanityClient);

  return (
    <>
      <Script defer src="./assets/js/main.js"></Script>
      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>Shyamal | {blog.title}</title>

        <meta
          property="og:title"
          content="How to become a frontend developer | Atom Template"
        />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="./assets/img/SB.jfif" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossOrigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="./assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />

        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
        
      </Head>

      <div id="main" className="relative">
        <div>
          <NavBar backgroundColor="#070e18" />
          <div>
            <div className="container py-6 md:py-10">
              <div className="mx-auto max-w-4xl" style={{ marginTop: "7rem" }}>
                <div className="">
                  <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                    {blog.title}
                  </h1>
                  <div className="flex items-center pt-5 md:pt-10">
                    <div>
                      <img
                        src={builder.image(profile.myImage).url()}
                        className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                        alt="author image"
                      />
                    </div>
                    <div className="pl-5">
                      <span className="block font-body text-xl font-bold text-grey-10">
                        By {profile.name}
                      </span>
                      <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                        {moment(blog.date).format("MMMM DD YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
                {/* *************** Blog Content *************** */}
                <div className="prose max-w-none pt-8 " id="blogBodyContent">
                  {console.log(blog.content)}
                  <PortableTextReact
                    value={blog.content}
                    components={myPortableTextComponents}
                  />
                </div>

                {/* *************** Blog Tags *************** */}
                <div className="flex pt-10">
                  {blog.tags.map((item, index) => {
                    return (
                      <div
                        key={index} 
                        href="/"
                        className="cursor-default rounded-xl bg-primary px-4 py-1 font-body font-bold text-white hover:bg-grey-20 mx-0.5"
                      >
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10 flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                  <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                    <img
                      src={builder.image(profile.myImage).url()}
                      className="rounded-full shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                    <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                      {profile.name}
                    </h3>
                    <div className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                      <PortableText
                        // Pass in block content straight from Sanity.io
                        content={profile.desc}
                        projectId= {sanityKey.sanity_project_id}
                          dataset = {sanityKey.sanity_dataset}
                        // Optionally override marks, decorators, blocks, etc. in a flat
                        // structure without doing any gymnastics
                        serializers={{
                          h1: (props) => (
                            <h1 style={{ color: "red" }} {...props} />
                          ),
                          li: ({ children }) => (
                            <li className="special-list-item">{children}</li>
                          ),
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-center pt-5 md:justify-start">
                      <a href={social.github}>
                        <i className="bx bxl-github text-2xl text-primary hover:text-yellow"></i>
                      </a>
                      <a href={social.medium} className="pl-4">
                        <i className="bx bxl-medium text-2xl text-primary hover:text-yellow"></i>
                      </a>
                      <a href={social.linkedin} className="pl-4">
                        <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                      </a>
                      <a href={"mailto:" + social.gmail} className="pl-4">
                        <i className="bx bxl-gmail text-2xl text-primary hover:text-yellow"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const sanity_project_id = process.env.NEXT_PUBLIC_PROJECT_ID
  const sanity_dataset = process.env.NEXT_PUBLIC_DATASET
  const { slug } = context.query;
  const client = createClient({
    projectId: sanity_project_id,
    dataset: sanity_dataset,
    useCdn: false,
  });

  const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;
  const blog = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const socialQuery = `*[_type == "social"][0]`;
  const social = await client.fetch(socialQuery);
  return {
    props: {
      blog,
      profile,
      social,
      
      sanityKey:{
        sanity_project_id,
        sanity_dataset
      }
    },  
  };
}
