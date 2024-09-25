import ThreeDot from "@/components/ui/ThreeDot";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard bg-[#f9f9f9] pt-10">
      <div className="container w-full flex justify-between gap-2 md:gap-6">
        <div className="left w-1/4 flex flex-col gap-6">
          <div className="card bg-white border rounded-2xl">
            <h1 className="font-semibold p-4">My Community</h1>
            <hr />
            <div className="channels pt-2 pb-2">
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">PRIVATE COMMUNITY</p>
                  <h3 className="text-sm">Designer Pemula</h3>
                  <p className="text-sm text-gray-400 pt-2">48 Member</p>
                </div>
              </div>
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">PRIVATE COMMUNITY</p>
                  <h3 className="text-sm">Designer Pemula</h3>
                  <p className="text-sm text-gray-400 pt-2">48 Member</p>
                </div>
              </div>
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">PRIVATE COMMUNITY</p>
                  <h3 className="text-sm">Designer Pemula</h3>
                  <p className="text-sm text-gray-400 pt-2">48 Member</p>
                </div>
              </div>
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">PRIVATE COMMUNITY</p>
                  <h3 className="text-sm">Designer Pemula</h3>
                  <p className="text-sm text-gray-400 pt-2">48 Member</p>
                </div>
              </div>
            </div>
            <button className="rounded-3xl border-2 border-blue-500 text-blue-500 p-1 m-4 w-[90%]">
              See All
            </button>
          </div>

          <div className="card bg-white border rounded-2xl">
            <h1 className="font-semibold p-4">My Event</h1>
            <hr />
            <div className="channels pt-2 pb-2 ">
            <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                  <h3 className="text-sm">We The Fest (Wtf)</h3>
                  <p className="text-sm text-gray-400 pt-2">
                    912 People has jointhis event
                  </p>
                </div>
              </div>
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                  <h3 className="text-sm">We The Fest (Wtf)</h3>
                  <p className="text-sm text-gray-400 pt-2">
                    912 People has jointhis event
                  </p>
                </div>
              </div>
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                  <h3 className="text-sm">We The Fest (Wtf)</h3>
                  <p className="text-sm text-gray-400 pt-2">
                    912 People has jointhis event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle w-1/2 flex flex-col gap-6">
          <div className="card p-4 bg-white border rounded-2xl">
            <div className="up flex gap-4 items-center">
              <div className="img w-10 h-10 rounded-lg bg-slate-400"></div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Share or ask something to everyone!"
                className="border-2 p-2 ps-4 rounded-lg w-full bg-[#f9f9f9]"
              />
            </div>
            <div className="icons">
              <ul className="flex gap-16 lg:gap-10 md:gap-6 sm:gap-3 p-3 pb-0 justify-center">
                <li>Camera</li>
                <li>Images</li>
                <li>Videos</li>
                <li>Files</li>
                <li>Location</li>
              </ul>
            </div>
          </div>
          <div className="post bg-white border rounded-2xl p-4 flex flex-col gap-6">
            <div className="post_hero flex justify-between">
              <div className="left flex gap-4">
              <div className="img w-14 h-14 rounded-lg bg-slate-400"></div>
                <div className="detail flex flex-col justify-between">
                  <h1 className="text-xl font-medium">Dribbble Shots Community</h1>
                  <div className="user flex gap-2 items-center">
                  <div className="img w-6 h-6 rounded-lg bg-slate-400"></div>
                    <p className="text-blue-600">Hamida</p>
                    <p className="text-sm text-gray-400">| Just Now</p>
                  </div>
                </div>
              </div>
                <div className="rotate-90 pr-10">
                  <ThreeDot />
                </div>
            </div>
            <h1>
                Hi gaes, today, i am bringing you a UI design for Logistic Website.
            </h1>
            <ul className="text-gray-500 flex gap-8 lg:gap-5 md:gap-3 sm:gap-2">
                <li>#Website</li>
                <li>#UIUX</li>
                <li>#Design</li>
                <li>#LandingPage</li>
            </ul>
            <div className="img w-full h-[600px] rounded-lg bg-slate-400"></div>
            <div className="post_footer flex justify-between text-gray-500">
                <ul className="flex gap-8">
                    <li>Like</li>
                    <li>Comment</li>
                    <li>Save</li>
                </ul>
                <p>Share</p>
            </div>
          </div>

          <div className="post bg-white border rounded-2xl p-4 flex flex-col gap-6">
            <div className="post_hero flex justify-between">
              <div className="left flex gap-4">
              <div className="img w-14 h-14 rounded-lg bg-slate-400"></div>
                <div className="detail flex flex-col justify-between">
                  <h1 className="text-xl font-medium">Dribbble Shots Community</h1>
                  <div className="user flex gap-2 items-center">
                  <div className="img w-6 h-6 rounded-lg bg-slate-400"></div>
                    <p className="text-blue-600">Hamida</p>
                    <p className="text-sm text-gray-400">| Just Now</p>
                  </div>
                </div>
              </div>
                <div className="rotate-90 pr-10">
                  <ThreeDot />
                </div>
            </div>
            <h1>
                Hi gaes, today, i am bringing you a UI design for Logistic Website.
            </h1>
            <ul className="text-gray-500 flex gap-8 lg:gap-5 md:gap-3 sm:gap-2">
                <li>#Website</li>
                <li>#UIUX</li>
                <li>#Design</li>
                <li>#LandingPage</li>
            </ul>
            <div className="img w-full h-[600px] rounded-lg bg-slate-400"></div>
            <div className="post_footer flex justify-between text-gray-500">
                <ul className="flex gap-8">
                    <li>Like</li>
                    <li>Comment</li>
                    <li>Save</li>
                </ul>
                <p>Share</p>
            </div>
          </div>
        </div>


        <div className="right w-1/4 flex flex-col gap-6">
        <div className="card bg-white border rounded-2xl">
            <h1 className="font-semibold p-4">Popular Hastag on This Day</h1>
            <hr />
            <div className="channels p-4 flex flex-col gap-4">
              <div className="channel flex justify-between items-center">
                <div className="left flex flex-col justify-between gap-2">
                  <h3 className="text-sm font-semibold">#Baku State University</h3>
                  <p className="text-sm text-gray-400">323rb posting</p>
                </div>
                <div className="rotate-90 pr-10">
                  <ThreeDot />
                </div>
              </div>
              <div className="channel flex justify-between items-center">
                <div className="left flex flex-col justify-between gap-2">
                  <h3 className="text-sm font-semibold">#Baku State University</h3>
                  <p className="text-sm text-gray-400">323rb posting</p>
                </div>
                <div className="rotate-90 pr-10">
                  <ThreeDot />
                </div>
              </div>
              <div className="channel flex justify-between items-center">
                <div className="left flex flex-col justify-between gap-2">
                  <h3 className="text-sm font-semibold">#Baku State University</h3>
                  <p className="text-sm text-gray-400">323rb posting</p>
                </div>
                <div className="rotate-90 pr-10">
                  <ThreeDot />
                </div>
              </div>
             
            </div>
            <button className="rounded-3xl border-2 border-blue-500 text-blue-500 p-1 m-4 w-[90%]">
              See All
            </button>
          </div>

          <div className="card bg-white border rounded-2xl">
            <h1 className="font-semibold p-4">Other Event</h1>
            <hr />
            <div className="channels pt-2 pb-2">
            <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                  <h3 className="text-sm">We The Fest (Wtf)</h3>
                  <p className="text-sm text-gray-400 pt-2">
                    912 People has jointhis event
                  </p>
                </div>
              </div>
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                  <h3 className="text-sm">We The Fest (Wtf)</h3>
                  <p className="text-sm text-gray-400 pt-2">
                    912 People has jointhis event
                  </p>
                </div>
              </div>
              <div className="channel p-4 flex flex-col gap-3 md:flex-row">
                <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
                <div className="detail">
                  <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                  <h3 className="text-sm">We The Fest (Wtf)</h3>
                  <p className="text-sm text-gray-400 pt-2">
                    912 People has jointhis event
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer p-4 text-gray-500">
            <ul className="flex flex-wrap gap-2 leading-none">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Accessibility</li>
                <li>Ads info</li>
                <li>More...</li>
            </ul>
            <p className="pt-1">© 2024 StudenV. Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
