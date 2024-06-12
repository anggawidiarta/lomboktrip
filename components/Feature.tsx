import React from "react";
import Image from "next/image";
import { FEATURES } from "@/lib/constant.index";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem: React.FC<FeatureItem> = ({ title, icon, description }) => {
  return (
    <li className="flex flex-col items-start flex-1 w-full">
      <div className="p-4 rounded-full lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="mt-5 capitalize bold-20 lg:bold-32">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

const Feature = () => {
  return (
    <section className="flex flex-col w-full py-20 overflow-hidden bg-center bg-no-repeat flexCenter bg-feature-bg">
      <h2 className="lg:text-[64px] text-[40px] font-bold text-center">
        Our{" "}
        <span className="transition-all duration-150 ease-in cursor-pointer text-green-50 hover:text-green-700">
          Features
        </span>
      </h2>
      <div className="relative flex justify-end w-full">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col xl:w-[60%]">
          <ul className="grid gap-10 mt-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;
