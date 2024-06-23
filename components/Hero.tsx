import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      className="flex flex-col gap-20 py-12 pb-16 md:gap-28 lg:py-20 xl:flex-row "
      aria-label="Hero Section"
    >
      <div className="hero-map dark:bg-none"></div>

      {/* Left */}
      <div className="relative z-20 flex flex-col flex-1 xl:w-1/2">
        <h1 className="text-5xl font-bold tracking-tight dark:text-white">
          TripIn
          <span className="transition-all duration-150 ease-in cursor-pointer text-green-50 hover:text-green-700">
            Lombok
          </span>
        </h1>
        <p className="mt-6 dark:text-white text-gray-30 regular-16 xl:max-w-[520px] text-justify">
          <span className="font-medium transition-all duration-150 cursor-pointer text-green-50 hover:text-green-700">
            TripInLombok
          </span>{" "}
          is your go-to travel companion for exploring the stunning island of
          Lombok. Our website offers comprehensive guides, personalized
          itineraries, and an easy booking system for accommodations, tours, and
          activities. Whether you are seeking adventure, relaxation, or cultural
          experiences, TripInLombok ensures a seamless and memorable journey.
          Let us help you discover the magic of Lombok with ease and confidence.
        </p>

        <div className="flex flex-wrap gap-5 my-11">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="cursor-pointer bold-16 lg:bold-20 dark:text-white hover:text-green-50 text-blue-70">
            198K
            <span className="ml-1 underline regular-16 lg:regular-20">
              Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-all duration-150"
          >
            Download App
          </button>
          <button
            type="button"
            className="dark:text-white fill-green-50 dark:fill-green-50 py-2.5 px-5 flex items-center justify-center gap-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200  hover:text-green-50 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  hover:fill-green-50 transition-all duration-150"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              // className="fill-white hover:fill-green-50"
            >
              <path d="M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z" />
              <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5a9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5" />
            </svg>
            How We Work ?
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="relative flex items-start flex-1">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-[#1f2937] lg:bg-white lg:bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-green-50 ">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
                loading="lazy"
              />
            </div>
            <p className="text-white bold-20 lg:text-black dark:lg:text-white">
              Rinjani, Lombok
            </p>
            <div className="mt-4 flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 text-green-50 dark:lg:text-green-50 lg:text-gray-800">
                  Distance
                </p>
                <p className="text-white bold-20 lg:text-black dark:lg:text-white">
                  127KM
                </p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 text-green-50 dark:lg:text-green-50 lg:text-gray-800">
                  Time
                </p>
                <p className="text-white bold-20 lg:text-black dark:lg:text-white">
                  4 Hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
