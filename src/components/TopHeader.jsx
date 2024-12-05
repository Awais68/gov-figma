/** @format */

import { Button } from "./ui/button";
// import { FiChevronDown } from "react-icons/fi";
import { DropDown } from "@/components/Dropdown";

export default function TopHeader() {
	return (
		<>
			<div className=' bg-black text-white justify-evenly'>
				<div className='bg-black text-white flex justify-center items-center'>
					<h1>
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
					</h1>
					<Button variant='black'> Shop Now</Button>
					<div className='flex justify-self-end gap-44'>
						<DropDown className='flex justify-end' />
					</div>
				</div>
			</div>
		</>
	);
}