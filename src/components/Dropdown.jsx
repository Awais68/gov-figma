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
import { FiChevronDown, FiChevronRight, FiChevronUp } from "react-icons/fi";

export function DropDown({ text,dropdownTitle,dropdownIcon }) {
	const [position, setPosition] = React.useState("bottom");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline '>
					{dropdownTitle ? dropdownTitle : 'Dropdown Title'}
					{dropdownIcon}
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
