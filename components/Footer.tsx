import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "@/lib/constant.index";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap dark:text-green-50">{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="container flex flex-col mb-5 flexCenter max-container padding-container">
      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <p className="text-3xl text-black poppins-bold dark:text-white">
              TripIn
              <span className="transition-all duration-150 text-green-50 hover:text-green-700">
                Lombok.
              </span>
            </p>
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-30 dark:text-white">
                  {columns.links.map((link) => (
                    <Link
                      href="/"
                      key={link}
                      className="transition-all duration-150 hover:text-green-50"
                    >
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex items-center gap-4 md:flex-col lg:flex-row"
                  >
                    <p className=" whitespace-nowrap dark:text-white">
                      {link.label}:
                    </p>
                    <p className="transition-all duration-150 dark:text-green-50 dark:hover:text-green-700 hover:text-green-50 medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4 regular-14 text-gray-30 items-center">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="w-full text-center regular-14 text-gray-30 dark:text-white">
          {new Date().getFullYear()} TripInLombok | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
