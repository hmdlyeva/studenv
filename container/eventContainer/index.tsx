import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import { IEvent, IUser } from "@/types/common.type";
import LeftSection from "@/components/screens/events/leftSection/LeftSection";
import MiddSection from "@/components/screens/events/middSection/MiddSection";
interface IProps {
  users: IUser[];
  events:IEvent[];
}

const EventContainer = ({users, events}: IProps) => {
  return (
    <main>
     <Navbar url="/events"/>
      <div
        className={`events pt-10 ${
          "white" === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container w-full flex flex-col md:flex-row justify-between gap-2 md:gap-6">
          <MiddSection theme={"white"} users={users} events={events}/>
          <LeftSection theme={"white"} />
        </div>
      </div>
    </main>
  );
};

export default EventContainer;
