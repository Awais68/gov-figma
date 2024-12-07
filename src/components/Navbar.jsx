/** @format */

import Link from "next/link";
import Searchbar from "@/components/search";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
	return (
		<header className='text-gray-600 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
					<span className='ml-3 text-xl font-extrabold'>Exclusive</span>
				</a>
				<nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
					<Link href={"/"} className='mr-5'>
						{" "}
						Home{" "}
					</Link>
					<Link href={"/contact"} className='mr-5'>
						{" "}
						Contact{" "}
					</Link>
					<Link href={"/about"} className='mr-5'>
						{" "}
						About{" "}
					</Link>
					<Link href={"/singup"} className='mr-5'>
						{" "}
						Sign Up{" "}
					</Link>
				</nav>
				<Searchbar />
				<FaRegHeart size={24} className='mx-5' />
				<IoCartOutline size={24} />
			</div>
		</header>
	);
}
