import React from "react";
import Image from "next/image";
import Button from "./Button";

const GetApp: React.FC = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex flex-col items-start justify-center flex-1 w-full gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white hover:bg-gray-200 duration-150 transition-all"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline hover:bg-green-50 duration-150 transition-all"
              full
            />
          </div>
        </div>

        <div className="flex items-center justify-end flex-1 max-sm:hidden">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
