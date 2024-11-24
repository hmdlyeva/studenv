import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import { IResource} from "@/types/common.type";
import FilterSection from '@/components/screens/resouces/filtersection/FilterSection'
import MiddSection from '@/components/screens/resouces/middSection/MiddSection'
interface IProps {
  resources:IResource[];
}

const ResourceContainer = ({ resources}: IProps) => {
  return (
    <main>
      <Navbar url="/resources"/>
    <div className={`resouces ${"white" === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}>
        <FilterSection theme={"white"}/>
      <div className="container w-full mt-10">
        <MiddSection theme={"white"} resources={resources}/>
      </div>
    </div>
    </main>
  );
};

export default ResourceContainer;
