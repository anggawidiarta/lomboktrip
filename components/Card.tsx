// Card.js
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { DESTINATIONS } from "@/lib/constant.index";

const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="relative flex flex-col py-16 lg:py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="150"
    >
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[340px] lg:h-[400px] xl:h-[550px] shadow-md shadow-gray-400 rounded-3xl w-full bg-green-50"
      >
        {DESTINATIONS.map((destination) => (
          <SwiperSlide key={destination.id}>
            <div className="flex flex-col items-start w-full h-full md:flex-row">
              <img
                alt="Travel"
                src={destination.imageSrc}
                className="w-full h-64 relative z-[9999] items-stretch md:w-1/2 object-cover md:h-[575px] md:min-h-full"
                loading="lazy"
              />
              <div className="flex flex-col w-full h-full p-5 md:pt-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 md:text-6xl dark:text-white">
                  {destination.title}
                </h2>
                <h5 className="text-sm text-gray-600 md:text-lg">
                  {destination.location}
                </h5>
                <p className="mt-6 text-xs md:text-[16px] leading-normal font-normal text-white xl:mt-12 dark:text-gray-400 text-justify md:text-left max-sm:line-clamp-5">
                  {destination.description}
                </p>

                <div className="hidden gap-3 mt-6 xl:flex">
                  {destination.reviews.map((review, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                        {review.name}
                      </h5>
                      <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis max-sm:line-clamp-5">
                        {review.text}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Card;
