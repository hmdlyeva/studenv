import LinkedinIcon from "@/components/ui/LinkedinIcon";
import Link from "next/link";
import React from "react";

type Props = {
  color?:string;
};

const Footer = ({color}: Props) => {
  return (
    <div className={`flex flex-col justify-end h-[80vh] ${color && color}`}>
      <div className="bg-blue-500 h-[35vh] w-full flex flex-col justify-center items-start">
        <div className="container">
          <div className="text-4xl text-white">
            Want to discover student environment with StudenV Digital Community
            Platform?
          </div>
          <button className="bg-blue-500 text-white py-2 rounded-lg border mt-10 md:w-1/4 w-full">
            Apply Now
          </button>
        </div>
      </div>
      <div className="h-[20vh] flex md:flex-row flex-col container items-start">
        <div className="flex flex-col mt-4">
          <img
            alt="logo"
            src="/images/minilogo.png"
            className="object-cover w-1/2"
          />
          <div className="text-2xl">StudenV</div>
        </div>
        <div className="w-full flex justify-end items-start gap-10 mt-10">
          <ul>
            <li>
              <div className="font-bold">About</div>
              <Link href="/about" className="">
                About Us
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <div className="font-bold">Contact</div>
              <Link href="/contact">Contact Us</Link>
              <p>+994 555 44 33</p>
            </li>
          </ul>
          <ul>
            <li className="flex flex-col items-center">
              <div className="font-bold">Get In Touch</div>
              <div className="flex gap-2 mt-1">
                <LinkedinIcon />
                <LinkedinIcon />
                <LinkedinIcon />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container text-gray-500 text-sm">
        <ul className="flex w-full justify-between mb-4">
          <Link href="privacy-policy" className="underline">Privacy Policy</Link>
          <li className="underline">Copyright © 2024 StudenV. All rights reserved.</li>
          <div className="flex gap-4">

          <Link href="terms-and-conditions" className="underline">Terms And Conditions</Link>
          <Link href="faq" className="underline">FAQ</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
