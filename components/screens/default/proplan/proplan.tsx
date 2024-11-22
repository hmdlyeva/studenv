import ConfirmIcon from "@/components/ui/ConfirmIcon";
import React from "react";

type Props = {};

const Proplan = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] container">
      <h2 className="text-5xl text-blue-500">What We Offer ?</h2>
      <p>
        Upgrade your profile according to the given plans and enjoy your
        strikes!
      </p>
      <div className="plans w-full flex gap-12 mt-20 items-center">
        <div className="plan bg-gray-100 p-4 rounded-lg text-center w-1/3">
          <div className="text-2xl py-4">Standart</div>
          <div className="text-3xl font-bold text-blue-400">
            Use Free <br />
            $0 / month
          </div>
          <ul className="flex flex-col gap-4 items-center my-10">
            <li className="flex items-center gap-2 ">
              <ConfirmIcon color="black"/> Space 250mb
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon color="black"/> Space 250mb
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon color="black"/> Space 250mb
            </li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Apply Now</button>
        </div>

        <div className="plan p-4 rounded-lg text-center w-1/3 bg-blue-500 text-white">
          <div className="text-2xl py-4">Gold</div>
          <div className="text-3xl font-bold text-white">
            $200 / year
          </div>
          <ul className="flex flex-col gap-4 items-center my-10">
            <li className="flex items-center gap-2 ">
              <ConfirmIcon /> Space 250mb for Any
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon /> Space 250mb for Any
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon /> Space 250mb for Any
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon /> Space 250mb for Any
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon /> Space 250mb for Any
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon /> Space 250mb for Any
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon /> Space 250mb for Any
            </li>
          </ul>
          <button className="w-full bg-white text-blue-500 py-2 rounded-lg">Apply Now</button>
        </div>

        <div className="plan bg-gray-100 p-4 rounded-lg text-center w-1/3">
          <div className="text-2xl py-4">Silver</div>
          <div className="text-3xl font-bold text-blue-400">
            $10 / month
          </div>
          <ul className="flex flex-col gap-4 items-center my-10">
            <li className="flex items-center gap-2 ">
              <ConfirmIcon color="black"/> Space 250mb
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon color="black"/> Space 250mb
            </li>
            <li className="flex items-center gap-2">
              <ConfirmIcon color="black"/> Space 250mb
            </li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Proplan;
