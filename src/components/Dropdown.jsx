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

export function DropDown({ text, bgColor, }) {
	const [position, setPosition] = React.useState("bottom");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>

				<Button
					variant='outline '
					bgColor={bgColor}
					icon={<FiChevronDown size={24} />}>
					{""}
				</Button>

				{/* */}
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>listing </DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
					<DropdownMenuRadioItem value='top'>{text}</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='bottom'>{text}</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='right'>{text}</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
