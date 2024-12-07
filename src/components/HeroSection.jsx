/** @format */

import { DropDown } from "./Dropdown";
// import { Button } from "./ui/button";

export default function Hero() {
	return (
		<>
			<div className='grid grid-rows-[auto,1fr,auto] grid-cols-[auto,1fr] h-screen text-center'>
				{/* <div className='bg-zinc-500 col-span-2'>Logo</div> */}
				<div className='bg-zinc-200 w-[300px] h-[500px] border-l-4'>
					<DropDown text={"live "} className='bg-white text-black' />
				</div>

				<div className='bg-zinc-300 flex relative place-items-center px-10'>
					<div className='bg-black h-[400px] w-[900px] '>
						up to 10%
					</div>
				</div>
			</div>
		</>
	);
}
