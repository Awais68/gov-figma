/** @format */

import Link from "next/link";
import Searchbar from "@/components/search";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className=" body-font border-b-indigo-500">
      <div className=" w-[90%] mx-auto  flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div>
          <a className="flex title-font font-medium items-center text-gray-900 ">
            <span className="ml-3 text-xl font-extrabold">Exclusive</span>
          </a>
        </div>
        <nav className=" flex flex-wrap items-center text-base justify-center gap-5">
          <Link href={"/"} className="">
            {" "}
            Home{" "}
          </Link>
          <Link href={"/contact"} className="">
            {" "}
            Contact{" "}
          </Link>
          <Link href={"/about"} className="">
            {" "}
            About{" "}
          </Link>
          <Link href={"/singup"} className="">
            {" "}
            Sign Up{" "}
          </Link>
        </nav>
        <div className="flex justify-between items-center gap-5">
          <Searchbar />
          <FaRegHeart size={24} className="" />
          <IoCartOutline size={24} />
        </div>
      </div>
		<hr/>
    </header>
  );
}
