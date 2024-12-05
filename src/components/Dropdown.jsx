/** @format */

"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiChevronDown } from "react-icons/fi";

export function DropDown() {
	const [position, setPosition] = React.useState("bottom");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline ' className='bg-black text-white'>
					English <FiChevronDown size={24} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>listing </DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value='top'>Spanish</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='bottom'>Arabic</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='right'>Urdu</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
