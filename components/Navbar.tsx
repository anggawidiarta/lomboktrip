import Link from "next/link";
import React from "react";

import { NAV_LINKS } from "@/lib/constant.index";
import Button from "./Button";
import DarkModeSwitcher from "./DarkModeSwitcher";

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-30 flex py-5 text-2xl text-white padding-container max-container flexBetween">
      <Link href="/" className="text-black">
        <p className="text-3xl poppins-bold dark:text-white">
          TripIn<span className="text-green-50">Lombok.</span>
        </p>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="text-gray-50 font-normal dark:text-white hover:text-green-50 text-[1rem] flexCenter cursor-pointer pb-1.5 transition-all duration-150 hover:font-bold"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <DarkModeSwitcher />
      <div className="hidden lg:flexCenter">
        <Button
          title="Sign In"
          type="button"
          variant="bg-green-50 text-xl py-1 px-3 hover:bg-green-700 transition-all duration-150 dark:border-none"
          icon="/mdi--user.svg"
        />
      </div>
      <div className="inline-block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
          className="cursor-pointer group"
        >
          <path
            className="transition-all duration-150 shadow-sm group-hover:stroke-green-50 dark:stroke-green-50 dark:group-hover:stroke-white"
            fill="none"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 17h14M5 12h14M5 7h14"
          />
        </svg>
      </div>
      {/* <Dropdown /> */}
    </nav>
  );
};

export default Navbar;
