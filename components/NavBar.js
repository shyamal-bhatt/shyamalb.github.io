import React from "react";
import Link from "next/link";
import Script from "next/script";

const NavBar = (col) => {
  return (
    <>
      <div className="w-full z-50 top-0 py-3 sm:py-5 absolute" style={col}>
        <div className="container flex items-center justify-between">
          <div className="mx-12">
            <a href="/" className="flex">
              <h2 className="text-white text-xl font-semibold flex-1">
                hello.shyamal();
              </h2>
              <div className="underline decoration-3 text-white text-xl font-bold flex-1 animate-pulse">
                _
              </div>
            </a>
          </div>
          {/* ************* Nav bar *************** */}
          <div className="hidden lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <a href="/#about">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    About
                  </span>
                </a>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6 animate-beat">
                <Link legacyBehavior href={"./projects"}>
                  <a>
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                      Projects
                    </span>
                  </a>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6 animate-wiggle">
                <Link legacyBehavior href={"./blogs"}>
                  <a target={"_blank"}>
                    <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white ">
                      Blog
                    </span>
                  </a>
                </Link>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <a href="/#contact">
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Contact
                  </span>
                </a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
          {/* For Mobile */}
          <div id="toggel" className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      {/* menu */}
      <div
        id="menuMobile"
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
          <button id="toggelClose" className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src="./assets//img/icon-close.svg"
              className="h-10 w-auto"
              alt=""
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
                <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                  About
                </span>
            </li>

            <li className="py-2">
            <Link legacyBehavior href={"./projects"}>
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Projects
              </span>
            </Link>
            </li>

            <li className="py-2">
              <Link legacyBehavior href={"./blogs"}>
                <a target={"_blank"}>
                  <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                    Blog
                  </span>
                </a>
              </Link>
            </li>

            <li className="py-2">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
