/** @format */

import Image from "next/image";
import { DropDown } from "./Dropdown";
import { Button } from "./ui/button";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <>
      <div className="w-[90%] p-2 mx-auto flex justify-between gap-4 ">
        {/* <div className='bg-zinc-500 col-span-2'>Logo</div> */}
        <div className="min-h-[100px]  border-r border-black-600 p-[-10] w-1/4">
          <div className="items-start flex flex-col">
            <DropDown
              text={"live "}
              dropdownIcon={<FiChevronDown size={40} color="black" />}
            />
            <DropDown text={"live "} className="bg-white text-black" />
            <Button variant={"outline"} className="border-none ">
              {" "}
              Electronics
            </Button>
            <Button variant={"outline"} className="border-none ">
              {" "}
              Home & LifeStyle
            </Button>
            <Button variant={"outline"} className="border-none ">
              {" "}
              Medicine{" "}
            </Button>
            <Button variant={"outline"} className="border-none ">
              {" "}
              Sports & Outdoor{" "}
            </Button>
            <Button variant={"outline"} className="border-none ">
              {" "}
              Baby's & Toys
            </Button>
            <Button variant={"outline"} className="border-none ">
              {" "}
              Grossory & Pets
            </Button>
            <Button variant={"outline"} className="border-none ">
              {" "}
              Health & Beauty{" "}
            </Button>
          </div>
        </div>

        <div className="bg-black w-full flex relative  flex-[2] ">
          <div className="bg-black  flex justify-center w-full">
            <div className="text-white ">
              <div className=" flex flex-row mt-12 mx-8 ">
                <Image
                  className=" "
                  src="/images/landing/logo.png"
                  alt="logo"
                  height={30}
                  width={30}
                />
                <span className=" mx-5 font-thin mt-2 flex items-center">
                  iPhone 14 Serise{" "}
                </span>
              </div>
              <div className="flex flex-wrap font-bold size-8 text-center ">
                {" "}
                <h1 className="mx-8 mt-2 font-extrabold flex text-center items-center text-2xl">
                  {" "}
                  Up to 10% <br /> of Voucher
                </h1>{" "}
              </div>
            </div>
            <div>
              {/* Hero image  */}
              <div className="relative w-[400px] h-[350px] ">
                <Image
                  src="/images/landing/hero.png"
                  alt="loading "
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
