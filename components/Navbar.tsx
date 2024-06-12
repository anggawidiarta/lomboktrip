import Link from "next/link";
import React from "react";

import { NAV_LINKS } from "@/lib/constant.index";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-30 flex py-5 text-2xl text-white padding-container max-container flexBetween">
      <Link href="/" className="text-black">
        <p className="text-3xl poppins-bold">
          TripIn<span className="text-blue-500">Lombok.</span>
        </p>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="text-gray-50 regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          title="Login"
          type="button"
          variant="bg-green-50 text-xl"
          icon="/user.svg"
        />
      </div>
      <div className="inline-block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36px"
          height="36px"
          viewBox="0 0 24 24"
          className="bg-green-300 shadow-sm cursor-pointer"
        >
          <path
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
