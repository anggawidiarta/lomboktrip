"use client";

import React, { useEffect } from "react";
import { NextPage } from "next";

import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/globals.css";

import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Guide from "@/components/Guide";
import Feature from "@/components/Feature";
import GetApp from "@/components/GetApp";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="flex flex-col max-container poppins-regular padding-container">
      <Hero />
      <Card />
      <Guide />
      <Feature />
      <GetApp />
      <Footer />
    </main>
  );
};

export default Home;
