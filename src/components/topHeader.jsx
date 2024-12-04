/** @format */

import { Button } from "./ui/button";
import { FiChevronDown } from "react-icons/fi";
import { DropdownMenu } from "./ui/dropdown-menu";

export default function TopHeader() {
	return (
		<div className='bg-black text-white flex justify-center items-center'>
			<h1>
				Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
			</h1>
			<Button variant='black'> Shop Now</Button>

			<Button>
				{" "}
				English
				<FiChevronDown size={24} />
			</Button>

			<DropdownMenu variant='outline' />
		</div>
	);
}
