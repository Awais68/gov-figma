/** @format */
import { CiSearch } from "react-icons/ci";

export default function Searchbar() {
	return (
		<form className='max-w-md mx-auto'>
			<label
				htmlFor='default-search'
				className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 end-2 flex items-center ps-3 pointer-events-none'>
					<CiSearch />
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='What are you looking for?'
					required=''
				/>
				{/* <button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Search
				</button> */}
			</div>
		</form>
	);
}
