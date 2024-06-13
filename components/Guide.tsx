import React from "react";
import Image from "next/image";

const Guide: React.FC = () => {
  return (
    <section className="flex-col flexCenter">
      <div className="w-full pb-24">
        <p className="mb-3 -mt-1 uppercase regular-18 text-green-50">
          We Are Here For You
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[450px]">
            Discover{" "}
            <span className="transition-all duration-150 cursor-pointer hover:font-extrabold text-green-50">
              Lombok
            </span>{" "}
            Like Never Before
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px] max-lg:text-justify">
            At <span className="font-medium text-green-50">TripInLombok</span>
            , your travel experience is our top priority. We understand that
            planning a trip can be overwhelming, which is why we are committed
            to making your journey as seamless and enjoyable as possible. Our
            user-friendly website is designed to provide you with all the tools
            and information you need to explore the beauty of Lombok with ease.
            <br />
            <br />
            From detailed destination guides to personalized travel itineraries,
            our platform offers everything you need to create your perfect
            getaway. Whether you are seeking adventure, relaxation, or cultural
            immersion, we have tailored solutions to meet your every need. Our
            easy booking system allows you to reserve accommodations, tours, and
            activities in just a few clicks, ensuring a hassle-free planning
            process.
          </p>
        </div>
      </div>

      <div className="relative w-full flexCenter">
        <Image
          src="/images/savana.jpg"
          alt="Savana Picture"
          width={1440}
          height={425}
          className="object-cover max-h-[550px] object-center w-full rounded-3xl 2xl:rounded-5xl drop-shadow-lg shadow-slate-600"
          loading="lazy"
        />

        <div className="absolute flex bg-white py-12 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:right-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="w-auto h-full"
            loading="lazy"
          />
          <div className="flex-col flexBetween">
            <div className="flex flex-col w-full">
              <div className="w-full flexBetween">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">1 Hour 30 Min</p>
              </div>
              <p className="mt-2 bold-20">Savana Lendang Danger</p>
            </div>

            <div className="flex flex-col w-full">
              <p className="regular-16 text-gray-20">Start</p>
              <h4 className="mt-2 bold-20 whitespace-nowrap">Sembalun</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
