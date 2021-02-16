import React from "react";
import { Sidebar } from "./Sidebar";

export const FileExplorer = () => {
	return (
		<div className='container mx-auto my-8 px-4 flex'>
			<div className='file-explorer-container w-3/4 mr-8'>
				<div className='branch-navigation flex items-center justify-between'>
					<div className='flex items-center space-x-3'>
						<button className='border border-gray-400 rounded-md px-4 flex py-1 hover:bg-gray-200 items-center space-x-2'>
							<svg
								className='fill-current text-gray-600 w-4'
								viewBox='0 0 16 16'
								aria-hidden='true'
							>
								<path
									fill-rule='evenodd'
									d='M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z'
								></path>
							</svg>
							<div className='font-semibold'>master</div>
							<svg className='w-3 ml-1 fill-current' fill='none' viewBox='0 0 24 24'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>

						<a href='#' className='flex items-center space-x-1 px-3 py-1 group'>
							<svg
								className='w-4 text-gray-600 fill-current group-hover:text-blue-600'
								viewBox='0 0 16 16'
								version='1.1'
							>
								<path
									fill-rule='evenodd'
									d='M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z'
								></path>
							</svg>
							<span className='group-hover:text-blue-600'>
								<span className='font-semibold'>28 </span>
								<span>branches</span>
							</span>
						</a>
						<a href='#' className='flex items-center space-x-1 px-3 py-1 group'>
							<svg
								className='w-4 text-gray-600 fill-current group-hover:text-blue-600'
								viewBox='0 0 16 16'
								version='1.1'
							>
								<path
									fill-rule='evenodd'
									d='M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z'
								></path>
							</svg>
							<span className='group-hover:text-blue-600'>
								<span className='font-semibold'>146 </span>
								<span>tags</span>
							</span>
						</a>
					</div>
					<div className='flex items-center space-x-2'>
						<button className='border border-gray-300 rounded-md px-4 py-1 bg-gray-100  hover:bg-gray-200 font-bold text-black flex items-center space-x-1'>
							<div>Go to file</div>
							<svg
								className='w-3 ml-1'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>
						<button className='border border-gray-300 rounded-md px-4 py-1 bg-gray-100  hover:bg-gray-200 font-bold text-black flex items-center space-x-1'>
							<div>Add file</div>
							<svg
								className='w-3 ml-1'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>
						<button className='border border-gray-400 rounded-md px-4 py-1 bg-green-600 hover:bg-green-700 font-bold text-white flex items-center space-x-1'>
							<svg className='fill-current text-white w-4' viewBox='0 0 16 16' aria-hidden='true'>
								<path
									fill-rule='evenodd'
									d='M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z'
								></path>
							</svg>
							<div>Code</div>
							<svg
								className='w-3 ml-1'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<Sidebar />
		</div>
	);
};
