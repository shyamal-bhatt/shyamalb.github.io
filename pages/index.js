// Color pallete
// #1A1A1D : rgb(26, 26, 29)
// #4E4E50 : rgb(78, 78, 80)
// #6F2232 : rgb(111, 34, 50)
// #950740 : rgb(149, 7, 80)
// #C3073F : rgb(195, 7, 63)
// #070e18
// rgba(7,14,24,1)
// 159 202 215

// Next js compenents
import React, { useRef } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import PortableText from "react-portable-text";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import emailjs from "@emailjs/browser";

// Sanity associated modules
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";



export default function Home({ blog, profile, social, skills, project, emailKeys, sanityKey }) {

  const myConfiguredSanityClient = createClient({
    projectId: sanityKey.sanity_project_id,
    dataset: sanityKey.sanity_dataset,
    useCdn: false,
  });
  const builder = imageUrlBuilder(myConfiguredSanityClient);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailKeys.serviceId,
        emailKeys.templateId,
        form.current,
        emailKeys.userKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Script src="/assets//js/main.js"></Script>
      <Head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{profile.title}</title>

        <meta property="og:title" content="Shyamal | Data Analyst" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />

        <meta property="og:url" content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets//img/SB.jfif" />

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

        {/* social media icons from here. */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />

        {/* Style sheets import here */}
        <link
          crossOrigin="anonymous"
          href="/assets//styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <Script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></Script>

        <Script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></Script>

        <Script src="/assets//js//main.js"></Script>
      </Head>

      {/* ==================================================== */}
      <div id="main" className="relative">
        <NavBar />

        {/* Info section */}
        <div>
          {/* blur Background image */}
          <div
            className="relative bg-cover bg-center bg-no-repeat py-8"
            style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
          >
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

            <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
              <div className="flex flex-col items-center justify-center lg:flex-row">
                <div
                  className="rounded-full border-8 border-primary shadow-xl"
                >
                  {/* ********* My image ************** */}
                  <img
                    src={builder.image(profile.myImage).url()}
                    className="h-48 rounded-full sm:h-56"
                    alt="author"
                  />
                </div>
                {/* ********* My Name ********* */}
                <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                  <h1 className=" text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                    Hello, I'm {profile.name} !
                  </h1>
                  <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start ">
                    <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                      <p className="font-body text-lg uppercase text-white">
                        Let's connect
                      </p>
                      <div className="hidden sm:block">
                        <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                      <a
                        href={social.github}
                        className="cursor-pointer"
                        target="_blank"
                      >
                        <i className="bx bxl-github text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
                      </a>
                      <a
                        href={social.medium}
                        className="cursor-pointer pl-4"
                        target="_blank"
                      >
                        <i className="bx bxl-medium text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
                      </a>
                      <a
                        href={social.linkedin}
                        className="cursor-pointer pl-4"
                        target="_blank"
                      >
                        <i className="bx bxl-linkedin text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
                      </a>
                      <a
                        href={"mailto:" + social.gmail}
                        className="cursor-pointer pl-4"
                        target="_blank"
                      >
                        <i className="bx bxl-gmail text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className="buttons text-center  md:text-left"
                    style={{ paddingLeft: "4px" }}
                  >
                    <Link href={profile.resume}>
                      <button className="hover:underline decoration-yellow-500 font-body text-lg font-semibold uppercase text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                        My Resume
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section starts */}
          <div className="bg-grey-50" id="about">
            <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
              <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
                <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                  Who am I?
                </h2>
                <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                  I'm {profile.name}, {profile.jobRole}.
                </h4>
                <div className="pt-6 font-body leading-relaxed text-grey-20">
                  <PortableText
                    content={profile.desc}
                    projectId= {sanityKey.sanity_project_id}
                    dataset = {sanityKey.sanity_dataset}
                  />
                </div>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                  <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-body text-lg font-semibold uppercase text-grey-20">
                      Connect with me
                    </p>
                    <div className="hidden sm:block">
                      <i className="bx bx-chevron-right text-2xl text-primary"></i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
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
              <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
                {skills.map((item) => {
                  return (
                    <div className="pt-6">
                      <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                          {item.skill_name}
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">
                          {item.skill_perct}
                        </h3>
                      </div>
                      <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div
                          className="h-3 rounded-full bg-primary"
                          style={{ width: item.skill_perct }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* About Section ends */}

          {/* Projects */}
          <div className="container py-16 md:py-20" id="project">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My Projects
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Here's what I have done in the past
            </h3>

            <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
              {project.map((item) => {
                return (
                  <article className="relative rounded-lg shadow-xl bg-white p-16 transform transition-all hover:scale-105 md:mx-0 hover:bg-slate-300">
                    <h3 className="text-gray-800 text-3xl font-bold mb-2">
                      {item.project_title}
                    </h3>
                    <div className="text-gray-500 text-xs space-x-4">
                      <span>
                        <strong className="font-bold">Type</strong>:
                        <span className="ml-1 px-1 border rounded bg-slate-200">
                          {item.project_type}
                        </span>
                      </span>

                      <div className="my-6 text-lg text-gray-700 leading-relaxed">
                        <PortableText
                          content={item.project_desc}
                          projectId= {sanityKey.sanity_project_id}
                          dataset = {sanityKey.sanity_dataset}
                        />
                      </div>
                      <Link href={item.project_link}>
                        <a
                          className="text-violet-500 font-bold hover:underline hover:text-red-400"
                          target="_blank"
                        >
                          Project Link
                        </a>
                      </Link>
                      <span></span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Latest blog posts */}
          <div className="bg-grey-50" id="blog">
            <div className="container py-16 md:py-20">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                I also like to write
              </h2>
              <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Check out my latest posts!
              </h4>
              <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
                {/* First post */}

                {blog.map((item) => {
                  // appends the slug to the url
                  return (
                    <Link
                      key={item.slug.current}
                      href={"/blog/" + item.slug.current}
                      className="shadow"
                    >
                      <div>
                        <div
                          // careating variable; fetching images from item object; if null set the deafult image.
                          // builder is the sanity object defined above.
                          style={{
                            backgroundImage: `url(${
                              builder.image(item.image).width(200).url() ||
                              "/assets/img/post-01.png"
                            })`,
                          }}
                          className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                        >
                          <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                          <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 bg-slate-800 border-gray-400 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-200 md:text-base cursor-pointer">
                            Read More
                          </span>
                        </div>
                        <div className="bg-white py-6 px-5 xl:py-8">
                          <span className="block font-body text-lg font-semibold text-black">
                            {item.title}
                          </span>
                          <span className="block pt-2 font-body text-grey-20">
                            {item.metadesc}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="container py-16 md:py-20" id="contact">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              drop a message here
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Have Any Questions?
            </h4>
            <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
              <p className="font-body text-grey-10">
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                condimentum turpis nisl sem, viverra habitasse urna ante
                lobortis fermentum accumsan. Viverra habitasse urna ante
                lobortis fermentum accumsan.
              </p>
            </div>

            <form
              className="mx-auto w-full pt-10 sm:w-3/4"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="flex flex-col md:flex-row">
                <input
                  className="mr-3 w-full rounded border-slate-900 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
                <input
                  className="mt-6 w-full rounded border-slate-900 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                  minLength="3"
                />
              </div>
              <textarea
                className="mt-6 w-full rounded border-slate-900 px-4 py-3 font-body text-black md:mt-8"
                placeholder="Message"
                id="message"
                name="message"
                cols="30"
                rows="10"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-6 flex items-center justify-center rounded bg-[#070e18] px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
              >
                Send
                <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
              </button>
            </form>

            <div className="flex flex-col pt-16 lg:flex-row justify-center">
              <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-2 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-envelope text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Email
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                {profile.email}
                </p>
              </div>
              <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
                <div className="flex items-center">
                  <i className="bx bx-map text-2xl text-grey-40"></i>
                  <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                    My Location
                  </p>
                </div>
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                {profile.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroller */}
        <div>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block p-3 bg-slate-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700
             hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-salte-800 active:shadow-lg transition duration-150 
             ease-in-out bottom-5 right-5 delay-150 hover:-translate-y-1 hover:scale-110 animate-bounce"
            id="btn-back-to-top"
            style={{ position: "fixed", display: "none" }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        </div>

        <Footer socialLinks={social} />
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
  
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const userKey = process.env.EMAILJS_PUBLIC_USER_KEY;
  
  const sanity_project_id = process.env.PUBLIC_SANITY_PROJECT_ID
  const sanity_dataset = process.env.PUBLIC_SANITY_DATASET

  const client = createClient({
    projectId: sanity_project_id,
    dataset: sanity_dataset,
    useCdn: false,
  });

  const query = `*[_type == "blog"] | order(_createdAt desc)[0...3]`;
  const blog = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  const socialQuery = `*[_type == "social"][0]`;
  const social = await client.fetch(socialQuery);

  const skillsQuery = `*[_type == "skills"]`;
  const skills = await client.fetch(skillsQuery);

  const projectQuery = `*[_type == "projects"] | order(_createdAt desc)[0...2]`;
  const project = await client.fetch(projectQuery);

  return {
    props: {
      blog,
      profile,
      social,
      skills,
      project,

      emailKeys:{
        serviceId,
        templateId,
        userKey, 
      },
      sanityKey:{
        sanity_project_id,
        sanity_dataset
      }
    },
  };
}
