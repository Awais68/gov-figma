/** @format */

import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "./ui/button";
// import { FiChevronDown } from "react-icons/fi";
import { DropDown } from "@/components/Dropdown";

export default function TopHeader() {
  return (
    <>
      <div className="  text-white">
        <div className="bg-black text-white flex justify-between items-center">
          <div></div>
          <div className="flex items-center">
            <h1>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <Button variant="black"> Shop Now</Button>
          </div>
          <div className="flex mx-2 justify-center dropdownheay ">
            <DropDown
              dropdownTitle={"English"}
              dropdownIcon={<FiChevronDown size={40} color="white" />}
            />
          </div>
        </div>
      </div>
    </>
  );
}
