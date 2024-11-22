"use client"
import React, { useState } from "react";

type Props = {};

const Form = (props: Props) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, ""); 
    if (input.length > 10) input = input.slice(0, 10); 

    const formattedPhone = input.replace(
      /(\d{3})(\d{3})?(\d{2})?(\d{2})?/,
      (_, g1, g2, g3, g4) => [g1, g2, g3, g4].filter(Boolean).join(" ")
    );

    setPhone(formattedPhone);
  };
  return (
    <div className="border p-4 rounded-lg w-2/3 mx-auto flex flex-col gap-4 mt-14">
      <div className="flex gap-10">
        <input
          type="text"
          placeholder="First Name"
          className="w-1/2 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-1/2 p-2 rounded-md"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 rounded-md"
      />
      <div className="">
        <p className="absolute mt-2 ms-2 text-gray-400">+994</p>
        <input
        type="text"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="050 500 50 50"
        className="w-full p-2 rounded-md pl-12"
      />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Type Here..."
        className="p-2 rounded-md w-full resize-none"
      ></textarea>
      <button className="rounded-md py-1 px-10 bg-blue-500 text-white hover:bg-blue-600">
        Send Message
      </button>
    </div>
  );
};

export default Form;
