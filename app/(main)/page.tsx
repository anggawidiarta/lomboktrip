"use client";
import React from "react";
import { NextPage } from "next";
import Image from "next/image";

import "@/styles/globals.css";

import Hero from "@/components/Hero";
import Card from "@/components/Card";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col max-container poppins-regular padding-container pb-20">
      <Hero />
      <Card />
      <section className="flex-col flexCenter max-container">
        <div className="w-full pb-24 padding-container">
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
          <p className="mb-3 -mt-1 uppercase regular-18 text-green-50">
            We are here for you
          </p>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
              Guide You to Easy Path
            </h2>
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              Only with the hilink application you will no longer get lost and
              get lost again, because we already support offline maps when there
              is no internet connection in the field. Invite your friends,
              relatives and friends to have fun in the wilderness through the
              valley and reach the top of the mountain
            </p>
          </div>
        </div>

        <div className="relative w-full flexCenter">
          <Image
            src="/images/savana.jpg"
            alt="Savana Picture"
            width={1440}
            height={425}
            className="object-cover max-h-[475px] object-center w-full rounded-3xl 2xl:rounded-5xl drop-shadow-lg shadow-slate-600"
          />

          <div className="absolute flex bg-white py-12 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:right-[5%] lg:top-20">
            <Image
              src="/meter.svg"
              alt="meter"
              width={16}
              height={158}
              className="w-auto h-full"
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
    </main>
  );
};

export default Home;
