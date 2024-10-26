import Arrow from "@/components/ui/Arrow";
import DownArrow from "@/components/ui/DownArrow";
import React from "react";


const About = () => {
  return (
    <div className="about w-full flex gap-10 py-20">
      <div className="left bg-[#f9f9f9] w-[55%] rounded-xl flex flex-col justify-between p-8">
        <div className="upper flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Experience</h2>
          <p>
            I specialise in UX/UI design, brand strategy, and Webflow
            development.
          </p>
        </div>
        <hr/>
        <div className="down flex flex-col gap-4 max-w-[90%]">
          <h3 className="font-semibold text-lg">About me</h3>
          <p>
            I&apos;m a Product Designer based in Melbourne, Australia. I specialise
            in UX/UI design, brand strategy, and Webflow development. I&apos;m always
            striving to grow and learn something new and and i don&apos;t take myself
            too seriously.
          </p>

          <p>
            My work has been featured on Typewolf, Mindsparkle magazine,
            Webflow, Fonts in Use, CSS Winner, httpster, Siteinspire, and Best
            Website Gallery.
          </p>

          <span className="flex items-center gap-1 font-semibold mt-2">
            Read more <DownArrow />
          </span>
        </div>
      </div>
      <div className="right bg-[#f9f9f9] w-[45%] rounded-xl p-8">
        <h3 className="font-semibold text-lg">Skills</h3>
        <div className="tags my-3">
          <ul className="flex items-center gap-2 text-black">
            <li className="rounded-2xl border border-black p-1 px-3 flex justify-center items-center font-medium">
              UX Design
            </li>
            <li className="rounded-2xl border border-black p-1 px-3 flex justify-center items-center font-medium">
              Product Design
            </li>
            <li className="rounded-2xl border border-black p-1 px-3 flex justify-center items-center font-medium">
              Webflow
            </li>
            <li className="rounded-2xl border border-black p-1 px-3 flex justify-center items-center font-medium">
              Figma
            </li>
          </ul>
        </div>

        <h3 className="font-semibold text-lg mt-6">Location</h3>
        <div className="location flex items-center gap-3 my-2">
          <img
            className="rounded-full w-6 h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png"
            alt=""
          />
          <p className="font-[600]">Melbourne, Australia</p>
        </div>

        <h3 className="font-semibold text-lg mt-6">Website</h3>
        <div className="location flex items-center gap-3 my-2">
          <p className="font-[600]">minawinkel.com</p>
          <div className="-rotate-45">
            <Arrow />
          </div>
        </div>

        <h3 className="font-semibold text-lg mt-6">Email</h3>
        <div className="location flex items-center gap-3 my-2">
          <p className="font-[600]">hello@minawinkel.com</p>
          <div className="-rotate-45">
            <Arrow />
          </div>
        </div>


        <div className="btns w-full flex gap-4 mt-8">
            <button className="bg-white p-2 w-1/2 border rounded-lg">Add to list</button>
            <button className="bg-black p-2 w-1/2 border rounded-lg text-white">Message</button>
        </div>
      </div>
    </div>
  );
};

export default About;
