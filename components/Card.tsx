import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Card = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="relative flex flex-col py-10 lg:py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="250"
    >
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[340px] lg:h-[400px] xl:h-[550px] shadow-md shadow-gray-400 rounded-3xl w-full bg-green-50"
      >
        <SwiperSlide>
          <div className="flex flex-col items-start w-full h-full md:flex-row">
            <img
              alt="Travel"
              src="/images/sembalun.jpg"
              className="w-full h-64 md:w-1/2 object-cover md:h-[500px] md:min-h-full"
              loading="lazy"
            />
            <div className="flex flex-col w-full h-full p-5 md:pt-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 md:text-6xl dark:text-white">
                Sembalun Village
              </h2>
              <h5 className="text-sm text-gray-600 md:text-lg">
                East Lombok, West Nusa Tenggara, Indonesia
              </h5>
              <p className="mt-6 text-xs md:text-[16px] leading-normal font-normal text-white xl:mt-12 dark:text-gray-400 text-justify md:text-left max-sm:line-clamp-5">
                Sembalun Village, located on the eastern side of Lombok Island,
                Indonesia, is a picturesque highland area renowned for its
                stunning natural beauty and cultural richness. Nestled at the
                foot of Mount Rinjani, this village boasts lush green valleys,
                rolling hills, and expansive rice fields that create a
                breathtaking landscape.
              </p>

              <div className="hidden gap-3 mt-6 xl:flex">
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Andres Fernando
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis max-sm:line-clamp-5">
                    Sembalun Village in Lombok Island, Indonesia, is a hidden
                    gem with breathtaking landscapes. Nestled in the mountains,
                    it offers stunning views, vibrant culture, and serene hiking
                    trails.
                  </p>
                </a>
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Michelle Henderson
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis max-sm:line-clamp-5">
                    Sembalun Village on Lombok Island, Indonesia, is absolutely
                    magical! The lush green hills and clear blue skies are like
                    something out of a dream. The hiking trails are incredible,
                    and the friendly locals make you feel so welcome.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start w-full h-full md:flex-row">
            <img
              alt="Travel"
              src="/images/rinjani.jpg"
              className="w-full h-64 md:w-1/2 object-cover md:h-[500px] md:min-h-full"
              loading="lazy"
            />
            <div className="flex flex-col w-full h-full p-5 md:pt-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 md:text-6xl dark:text-white">
                Rinjani Mountain
              </h2>
              <h5 className="text-sm text-gray-600 md:text-lg">
                East Lombok, West Nusa Tenggara, Indonesia
              </h5>
              <p className="mt-6 text-xs md:text-[16px] leading-normal font-normal text-white xl:mt-12 dark:text-gray-400 text-justify md:text-left max-sm:line-clamp-5">
                Sembalun Village, located on the eastern side of Lombok Island,
                Indonesia, is a picturesque highland area renowned for its
                stunning natural beauty and cultural richness. Nestled at the
                foot of Mount Rinjani, this village boasts lush green valleys,
                rolling hills, and expansive rice fields that create a
                breathtaking landscape.
              </p>

              <div className="hidden gap-3 mt-6 xl:flex">
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Andres Fernando
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
                    Sembalun Village in Lombok Island, Indonesia, is a hidden
                    gem with breathtaking landscapes. Nestled in the mountains,
                    it offers stunning views, vibrant culture, and serene hiking
                    trails.
                  </p>
                </a>
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Michelle Henderson
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
                    Sembalun Village on Lombok Island, Indonesia, is absolutely
                    magical! The lush green hills and clear blue skies are like
                    something out of a dream. The hiking trails are incredible,
                    and the friendly locals make you feel so welcome.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start w-full h-full md:flex-row">
            <img
              alt="Travel"
              src="/images/senggigi.jpg"
              className="w-full h-64 md:w-1/2 object-cover md:h-[500px] md:min-h-full"
              loading="lazy"
            />
            <div className="flex flex-col w-full h-full p-5 md:pt-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 md:text-6xl dark:text-white">
                Senggigi Beach
              </h2>
              <h5 className="text-sm text-gray-600 md:text-lg">
                East Lombok, West Nusa Tenggara, Indonesia
              </h5>
              <p className="mt-6 text-xs md:text-[16px] leading-normal font-normal text-white xl:mt-12 dark:text-gray-400 text-justify md:text-left ">
                Sembalun Village, located on the eastern side of Lombok Island,
                Indonesia, is a picturesque highland area renowned for its
                stunning natural beauty and cultural richness. Nestled at the
                foot of Mount Rinjani, this village boasts lush green valleys,
                rolling hills, and expansive rice fields that create a
                breathtaking landscape.
              </p>

              <div className="hidden gap-3 mt-6 xl:flex">
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Andres Fernando
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
                    Sembalun Village in Lombok Island, Indonesia, is a hidden
                    gem with breathtaking landscapes. Nestled in the mountains,
                    it offers stunning views, vibrant culture, and serene hiking
                    trails.
                  </p>
                </a>
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Michelle Henderson
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
                    Sembalun Village on Lombok Island, Indonesia, is absolutely
                    magical! The lush green hills and clear blue skies are like
                    something out of a dream. The hiking trails are incredible,
                    and the friendly locals make you feel so welcome.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-start w-full h-full md:flex-row">
            <img
              alt="Travel"
              src="/images/gili-trawangan.jpg"
              className="w-full h-64 md:w-1/2 object-cover md:h-[500px] md:min-h-full"
              loading="lazy"
            />
            <div className="flex flex-col w-full h-full p-5 md:pt-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 md:text-6xl dark:text-white">
                Gili
              </h2>
              <h5 className="text-sm text-gray-600 md:text-lg">
                East Lombok, West Nusa Tenggara, Indonesia
              </h5>
              <p className="mt-6 text-xs md:text-[16px] leading-normal font-normal text-white xl:mt-12 dark:text-gray-400 text-justify md:text-left ">
                Sembalun Village, located on the eastern side of Lombok Island,
                Indonesia, is a picturesque highland area renowned for its
                stunning natural beauty and cultural richness. Nestled at the
                foot of Mount Rinjani, this village boasts lush green valleys,
                rolling hills, and expansive rice fields that create a
                breathtaking landscape.
              </p>

              <div className="hidden gap-3 mt-6 xl:flex">
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Andres Fernando
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
                    Sembalun Village in Lombok Island, Indonesia, is a hidden
                    gem with breathtaking landscapes. Nestled in the mountains,
                    it offers stunning views, vibrant culture, and serene hiking
                    trails.
                  </p>
                </a>
                <a
                  href="#"
                  className="block w-1/2 max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Michelle Henderson
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400 text-ellipsis">
                    Sembalun Village on Lombok Island, Indonesia, is absolutely
                    magical! The lush green hills and clear blue skies are like
                    something out of a dream. The hiking trails are incredible,
                    and the friendly locals make you feel so welcome.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Card;
