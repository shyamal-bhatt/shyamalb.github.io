import React from "react";
import Link from "next/link";
const Footer = (socialLinks) => {
  return (
    <>
      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <p className="text-center font-body text-white md:text-left">
            © Copyright 2022. All right reserved.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href={socialLinks.github} className="cursor-pointer" target="_blank">
              <i className="bx bxl-github text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>
            <a
              href={socialLinks.medium}
              className="cursor-pointer pl-4"
              target="_blank"
            >
              <i className="bx bxl-medium text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>
            <a
              href={socialLinks.linkedin}
              className="cursor-pointer pl-4"
              target="_blank"
            >
              <i className="bx bxl-linkedin text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>

          <Link href={"mailto:"+socialLinks.gmail}>
            <a
              className="cursor-pointer pl-4"
              target="_blank"
            >
              <i className="bx bxl-gmail text-2xl text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-yellow"></i>
            </a>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
