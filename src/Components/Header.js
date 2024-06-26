import React from "react";
import Navbar from "./Navbar";
import logo from '../assets/dhsLogo.png'

function Header() {
  return (
    <div className="from-[#2B263F] to-[#231E3D] bg-gradient-to-b px-10 lg:px-28 lg:h-screen overflow-hidden">
      <Navbar className="z-50" />
      <div className="lg:flex xl:justify-evenly lg:pt-8 lg:pb-8">
          <div className="lg:w-[800px] container xl:pt-15 lg:pt-10 pt-3">
          <h1 class="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-white xl:leading-[5rem] md:leading-[4rem]">
            Craft killer <span class="text-[#6664F1]">landing pages</span> & dominate <span class="text-[#C94AF0]">SEO</span>. We're your growth obsessed agency.
          </h1>
            <div className="xl:flex justify-start mt-7">
              <div>
                <button className="rounded px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
                  <span className="absolute inset-0 bg-[#5558ff]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Work with us
                  </span>
                  Work with us
                </button>
              </div>
              <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-gray-400 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4">
              "DHS, or Digital Horizons Studio, is your premier destination for web and app development, SEO, email marketing, e-commerce solutions, and more."
              </p>
            </div>
          </div>

        <div className="pr-24 lg:pr-0">
          {/* <right cascade> */}
            <div className="rocket-illustration">
              <img
                src={logo}
                alt="rocket-illustration"
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
