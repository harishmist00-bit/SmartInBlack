import React from "react";
import {
  ArrowUpRight,
  Play,
  Sparkles,
} from "lucide-react";
import aboutMain from "../assets/about/about-main.png";
import aboutSecondary from "../assets/about/about-secondary.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f9f7] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="absolute -left-24 top-20 h-52 w-52 rounded-full bg-green-100/40 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-lime-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-8">

        {/* ================= LEFT CONTENT ================= */}
        <div className="max-w-xl">

          {/* Small Label */}
          <div className="mb-5 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dfff00]">
              <Sparkles size={14} className="text-black" />
            </span>

            <span className="text-sm font-semibold tracking-wide text-gray-700">
              Elevate Your Everyday Style
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl lg:text-[56px]">
            About Smart In Black
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-lg text-base leading-7 text-gray-500 sm:text-lg text-justify">
            Discover modern fashion made for men who move with confidence. From everyday essentials to statement pieces, SmartInBlack brings clothing, footwear, bags, accessories, and sportswear together in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            {/* Primary Button */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#124d2d] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0d3c22] hover:shadow-lg"
            >
              Shop Now

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dfff00] text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-gray-800"
            >
              Explore Collection

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* ================= RIGHT IMAGE AREA ================= */}
        <div className="relative mx-auto h-[430px] w-full max-w-[550px] sm:h-[500px]">

          {/* Main Large Image */}
          <div
            className="
              absolute
              right-0
              top-4
              h-[300px]
              w-[245px]
              overflow-hidden
              rounded-[28px]
              bg-gray-300
              shadow-2xl
              sm:h-[390px]
              sm:w-[315px]
              lg:h-[410px]
              lg:w-[330px]
            "
          >
            <img
              src={aboutMain}
              alt="Digital professional"
              className="h-full w-full object-cover grayscale"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
          </div>

          {/* Secondary Image */}
          <div
            className="
              absolute
              left-4
              top-24
              z-10
              h-[230px]
              w-[170px]
              overflow-hidden
              rounded-[24px]
              border-[8px]
              border-[#f8f9f7]
              bg-gray-300
              shadow-xl
              sm:left-5
              sm:top-28
              sm:h-[290px]
              sm:w-[215px]
            "
          >
            <img
              src={aboutSecondary}
              alt="Creative professional"
              className="h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-black/5" />
          </div>

          {/* Horizontal White Divider */}
          <div className="absolute right-0 top-[195px] z-20 h-[7px] w-[245px] bg-white sm:top-[250px] sm:w-[315px] lg:w-[330px]" />

          {/* Green Circle */}
          <div className="absolute bottom-16 left-0 z-30 flex h-20 w-20 items-center justify-center rounded-full bg-[#124d2d] shadow-xl sm:h-24 sm:w-24">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfff00] sm:h-14 sm:w-14">
              <div className="h-4 w-4 rounded-full bg-[#dfff00] sm:h-5 sm:w-5" />
            </div>
          </div>

          {/* Lime Decorative Circle */}
          <div className="absolute bottom-10 right-4 z-30 h-9 w-9 rounded-full bg-[#dfff00] sm:h-11 sm:w-11" />

          {/* Star / Plus Decoration */}
          <div className="absolute bottom-4 right-0 z-30 text-[#dfff00]">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5 0C29.5 17 38 25.5 55 27.5C38 29.5 29.5 38 27.5 55C25.5 38 17 29.5 0 27.5C17 25.5 25.5 17 27.5 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Small Floating Card */}
          <div className="absolute bottom-28 right-[25%] z-30 hidden rounded-xl bg-white px-4 py-3 shadow-lg sm:block">
            <p className="text-xs font-medium text-gray-500">
              Digital Excellence
            </p>

            <div className="mt-1 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              <span className="text-sm font-bold text-gray-900">
                100% Focused
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;