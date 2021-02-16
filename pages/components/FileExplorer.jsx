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
				<div
					className='commits-container bg-blue-50 rounded-md rounded-b-none border border-blue-200 border-b-0 flex items-center justify-between px-4 py-4 mt-5
        '
				>
					<div className='flex items-center space-x-2'>
						<a href='#'>
							<img
								alt='@depfu'
								src='https://avatars.githubusercontent.com/in/715?s=60&amp;v=4'
								className='w-6 h-6 rounded-md'
							/>
						</a>
						<a href='#' className='font-semibold hover:underline'>
							depfu
						</a>
						<a href='#' className='hover:underline hover:text-blue-600'>
							Update postcss to version 8.2.6
						</a>
					</div>
					<div className='flex items-end'>
						<a href='#'>
							<svg class='w-4 fill-current text-green-500' viewBox='0 0 16 16'>
								<path
									fill-rule='evenodd'
									d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'
								></path>
							</svg>
						</a>
						<a
							href='#'
							className='font-mono text-xs text-gray-600 hover:underline hover:text-blue-500 ml-2'
						>
							e2fcb92
						</a>
						<a href='#' className=' text-gray-600 hover:underline hover:text-blue-500 ml-2'>
							2 days ago
						</a>
						<a href='#' className='flex items-center ml-3'>
							<span className='ml-1'>
								<span className='font-semibold'>3,620</span> commits
							</span>
						</a>
					</div>
				</div>
				<div className='file-explorer rounded-md rounded-t-none border border-gray-400 text-gray-700 divide-y divide-gray-400'>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								.github
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								fix command name
							</a>

							<a href='#' className='ml-1 hover:underline hover:text-blue-600'>
								(#3297)
							</a>
						</div>
						<div className='w-2/12 text-right'>18 days ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								_tests_
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Update fixtures
							</a>
						</div>
						<div className='w-2/12 text-right'>9 days ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								dist
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Add empty .npmignore so dist files are distributed with releases
							</a>
						</div>
						<div className='w-2/12 text-right'>3 years ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								jest
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Fix !important on multiple selectors
							</a>

							<a href='#' className='ml-1 hover:underline hover:text-blue-600'>
								(#2824)
							</a>
						</div>
						<div className='w-2/12 text-right'>3 months ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								perf
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Performance improvements + memory leak fix
							</a>

							<a href='#' className='ml-1 hover:underline hover:text-blue-600'>
								(#3032)
							</a>
						</div>
						<div className='w-2/12 text-right'>2 months ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								scripts
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								make some changes to compat mode
							</a>
						</div>
						<div className='w-2/12 text-right'>3 months ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								src
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Fix function colors bug
							</a>

							<a href='#' className='ml-1 hover:underline hover:text-blue-600'>
								(#2919)
							</a>
						</div>
						<div className='w-2/12 text-right'>9 days ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-blue-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z'
								></path>
							</svg>
							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								stubs
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Generate dark variants for ringOpacity by default
							</a>
						</div>
						<div className='w-2/12 text-right'>9 days ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								.editorconfig
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Convert new stuff to use ES6 modules
							</a>
						</div>
						<div className='w-2/12 text-right '>4 years ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								.eslintignore
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Updated CLI init commend
							</a>
						</div>
						<div className='w-2/12 text-right '>2 years ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								.eslintrc.json
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Remove eslint-config-postcss
							</a>
						</div>
						<div className='w-2/12 text-right '>4 months ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								.gitignore
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Ignore coverage folder
							</a>
						</div>
						<div className='w-2/12 text-right '>4 months ago</div>
					</div>
					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								CHANGELOG.md
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Update changelog
							</a>
						</div>
						<div className='w-2/12 text-right '>9 days ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								LICENSE
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Avoid updating license every year
							</a>
						</div>
						<div className='w-2/12 text-right '>3 years ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								README.md
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Fix Codecov badge (<span className='text-blue-600'>#2678</span>)
							</a>
						</div>
						<div className='w-2/12 text-right '>4 months ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								base.css
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Remove preflight CSS export in favor of base
							</a>
						</div>
						<div className='w-2/12 text-right '>2 years ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								color.js
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Move black and white colors to colors.js
							</a>
						</div>
						<div className='w-2/12 text-right '>3 months ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								components.css
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Move CSS files to root for easier imports
							</a>
						</div>
						<div className='w-2/12 text-right '>3 years ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								defaultConfig.js
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Updated CLI init commend
							</a>
						</div>
						<div className='w-2/12 text-right '>2 years ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								defaultTheme.js
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Updated CLI init commend
							</a>
						</div>
						<div className='w-2/12 text-right '>2 years ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								package.json
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Update postcss to version 8.2.6
							</a>
						</div>
						<div className='w-2/12 text-right '>2 days ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								package.postcss7.json
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Postcss7 compatibility (<span className='text-blue-600'>#2773</span>)
							</a>
						</div>
						<div className='w-2/12 text-right '>3 months ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								plugin.js
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Add `default` interop to tailwindcss/plugin
							</a>
						</div>
						<div className='w-2/12 text-right '>4 months ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								resolveConfig.js
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Support new `presets` key + extending core plugins config (
								<span className='text-blue-600'>#2474</span>)
							</a>
						</div>
						<div className='w-2/12 text-right '>4 months ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								screen.css
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Add screen.css file for postcss-import convenience
							</a>
						</div>
						<div className='w-2/12 text-right '>2 years ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								tailwind.css
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Undo accidental changes to CDN build process
							</a>
						</div>
						<div className='w-2/12 text-right '>14 months ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								utilities.css
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Move CSS files to root for easier imports
							</a>
						</div>
						<div className='w-2/12 text-right '>3 years ago</div>
					</div>

					<div className='flex justify-between px-4 py-2 hover:bg-gray-100'>
						<div className='w-4/12 flex items-center'>
							<svg
								aria-label='Directory'
								className='w-4 fill-current text-gray-400'
								viewBox='0 0 16 16'
								role='img'
							>
								<path
									fill-rule='evenodd'
									d='M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z'
								></path>
							</svg>

							<a href='#' className='hover:underline hover:text-blue-600 ml-3'>
								yarn.lock
							</a>
						</div>
						<div className='w-6/12 truncate'>
							<a href='' className='hover:underline hover:text-blue-600'>
								Update postcss to version 8.2.6
							</a>
						</div>
						<div className='w-2/12 text-right '>2 days ago</div>
					</div>
				</div>
				<div className='readme-container rounded-md border border-gray-400 px-4 py-4 mt-4'>
					<h4 className='font-semibold'>README.md</h4>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit vel tempora placeat
						mollitia corrupti quaerat consectetur unde obcaecati nobis ab laborum dolore, quas
						doloremque enim a rerum illum? Modi, consequatur? Eos et consequatur iure omnis
						voluptatibus. Distinctio reprehenderit dignissimos itaque sequi eos! Unde mollitia vitae
						pariatur sed velit laboriosam eveniet exercitationem voluptatum quae qui totam ut,
						ducimus non facilis illum? Sint explicabo dolor ipsa debitis ullam perferendis quisquam
						neque eveniet veniam! Impedit rem numquam exercitationem consequuntur iste eius, modi
						sunt sapiente aliquid dolore neque dolor harum, veniam repellendus veritatis quam! Nobis
						quisquam reiciendis aliquid repudiandae facilis ipsam adipisci quia id modi eius, esse
						doloribus dolore recusandae tenetur aperiam iure. Quos sit iure veritatis provident
						eaque ut quo fugit culpa pariatur? Magnam, sequi, quia, cupiditate sunt quasi pariatur
						architecto deserunt reiciendis in eum molestias accusamus totam aperiam dolore.
						Reprehenderit, laudantium laboriosam eligendi assumenda delectus unde, nulla odio vel
						eius amet consequuntur. Reprehenderit dolorem necessitatibus culpa debitis, possimus
						exercitationem totam blanditiis ducimus tempora consequatur. Vitae quis molestias
						ratione voluptatem laboriosam distinctio! Assumenda non velit obcaecati nesciunt aliquam
						neque mollitia incidunt amet error. Sunt eveniet ab iste rem veritatis officiis error
						nihil, illo laborum dolore quaerat ex facere nisi odit, deserunt pariatur molestias
						tenetur. Dignissimos magnam rem optio ullam ipsam dolores architecto perspiciatis! Nobis
						blanditiis recusandae illum. Aliquid, dolorem adipisci? Consequuntur, iusto pariatur
						incidunt vel quisquam beatae facere quas eos rem repellat natus totam quod doloribus
						dolorem porro illum deserunt commodi. Suscipit, unde. Eum fugiat totam harum eaque
						nostrum, amet nam placeat, corporis ex dolores delectus expedita, dicta error fugit quia
						ipsum officiis minus facilis tempora veritatis facere! Autem ratione dolore soluta vero!
						Animi exercitationem, quam, praesentium accusantium distinctio corrupti atque aut
						facilis officia perspiciatis impedit, laboriosam ipsam libero deleniti fuga enim.
						Tenetur dolore aliquid id consectetur optio ex ut et blanditiis doloribus! Consequatur,
						eum officiis temporibus rerum possimus, adipisci placeat esse, eos consectetur cumque
						fugiat provident sit nulla libero voluptatibus. Tenetur laborum facilis omnis eaque
						officiis explicabo aliquam quis iure magnam laudantium. Officia tempore, possimus beatae
						laudantium illum quibusdam voluptatem velit. At, magnam quibusdam cupiditate hic modi
						praesentium accusamus repellat, veritatis numquam aut ratione error labore maiores
						molestiae. Ipsum mollitia sint modi. Tempora a corporis error cum beatae ipsum vitae
						minima soluta iste ad adipisci corrupti recusandae ut, culpa impedit ullam molestiae
						placeat eveniet quaerat doloribus, qui dicta velit! Corporis, aspernatur possimus.
						Veritatis libero suscipit id perspiciatis. Minus sint sequi laborum totam reiciendis rem
						quos, aspernatur adipisci soluta itaque fugit voluptatum iure dignissimos placeat
						perspiciatis consequuntur similique ipsa quo amet delectus ipsam! Quisquam voluptas
						dicta officiis aspernatur nesciunt. Ipsa omnis possimus voluptates placeat cum explicabo
						ab consectetur provident, dolor, voluptate repudiandae sit recusandae delectus porro
						quod sunt voluptatem. Temporibus ab dignissimos nam! Velit quae harum molestias.
						Repellendus omnis aliquam asperiores eius, rem sequi ab nesciunt, provident eveniet modi
						tempora, ipsum libero officia sunt debitis magni dolore sint et itaque vitae adipisci?
						Ullam. Eos distinctio voluptatem numquam voluptate debitis nesciunt explicabo sunt,
						veritatis culpa eveniet quo dolores reiciendis velit natus, minus tempora necessitatibus
						iusto voluptates dolorem totam fugiat voluptatibus! Officia ratione pariatur commodi?
						Optio odio eius et vero, cumque earum, laborum doloribus omnis corrupti obcaecati
						eligendi reprehenderit cum! Sint sequi autem et maiores atque corrupti at, voluptate,
						quam commodi aliquam voluptates, eligendi eveniet! Suscipit in, et ipsa, vitae est hic
						corporis ullam sed autem consectetur repellat, deserunt illum eius. Nesciunt expedita,
						vitae voluptate impedit magnam aperiam consequatur. Facere asperiores fuga neque vero
						sed. Minima odit non sint nihil delectus laudantium, numquam, tenetur doloremque sequi,
						laborum saepe quam dolorem repudiandae aut in natus. Hic sunt, unde magnam ad quas
						reiciendis deserunt repellat earum praesentium. Illum perspiciatis tenetur voluptatem
						deserunt enim debitis eligendi aliquam alias iure dolor, nam assumenda temporibus nulla
						reprehenderit optio, voluptates laudantium repudiandae fugiat quidem minus dolore
						expedita inventore ipsam. Consectetur, aliquam? Vitae esse voluptatem, aliquam rem
						voluptas culpa est adipisci porro, aspernatur autem maiores commodi repudiandae delectus
						dolor, dolorem dolorum labore! Adipisci dicta, esse nemo architecto cum quia quis amet
						repudiandae. Cum ipsa error quod quasi voluptates alias magnam! Officiis ab qui
						exercitationem, eos commodi, excepturi, quis unde maxime odit itaque adipisci. Fugit
						minus nam inventore dolores facilis hic suscipit. Provident. Architecto, maiores. Dicta
						suscipit eum ipsum sunt perspiciatis ea at placeat eius illum illo tempore fugiat
						voluptas consequuntur vitae molestiae blanditiis fugit aliquid voluptatibus, officia
						expedita dignissimos consequatur dolore! Harum! Voluptate, facere unde atque velit
						dolorum at praesentium reiciendis alias libero obcaecati dolore, dolor accusamus
						repellat, minus expedita ad nemo? Quia quae amet perspiciatis odit laboriosam deleniti
						laudantium adipisci provident? Non, numquam provident omnis quasi, eligendi sunt facere
						sequi rerum dolorem deserunt quaerat reprehenderit. Dicta eius ex suscipit non
						cupiditate, itaque consectetur quam! Dolor distinctio tenetur nemo tempore esse sint!
						Numquam, aperiam? Animi esse illo, iure debitis voluptatem reiciendis quae doloremque
						beatae necessitatibus maiores pariatur. Molestias animi qui odit mollitia accusamus?
						Rerum minus facilis aperiam, sed velit amet placeat neque. Sequi possimus, fuga
						perspiciatis commodi illo asperiores quos aliquid magnam necessitatibus voluptatum
						placeat sit aliquam provident. Est consectetur sed molestias quo repellendus! Voluptas
						minus soluta sequi. Id a porro amet? Officia maxime iure quia assumenda possimus vitae,
						sunt ad, esse doloremque magni ea maiores adipisci voluptatum neque suscipit amet
						facilis labore incidunt alias magnam obcaecati explicabo sed, minus est! Natus. Facere
						molestias velit aut accusamus voluptate, odio nam atque quis maxime, suscipit
						repellendus nemo modi corrupti. Dolorum eum hic deleniti eligendi soluta. Sunt sequi
						repellendus ut dolores hic soluta. Rem. Officia quo doloremque eum delectus, doloribus,
						maiores fugiat impedit voluptatem fuga qui, enim repudiandae! Perspiciatis error neque
						dignissimos quo voluptate. Nostrum sit recusandae eveniet dignissimos, officia ea
						similique eligendi nisi? Quos accusantium repudiandae id inventore blanditiis incidunt
						ex ea maiores vel voluptate facilis reiciendis in deserunt necessitatibus magni repellat
						aperiam, itaque atque suscipit? Obcaecati blanditiis vel quaerat, expedita iusto itaque?
						Aut in deleniti, tempora architecto repellendus fugit cum, doloremque ex modi ducimus
						odio ad molestias, autem odit! Fugiat, sed natus dicta illo tempore magnam in impedit
						ratione explicabo itaque pariatur? Quis, repellat iste? Eos rerum soluta architecto
						cumque quidem, maxime, error voluptate excepturi et, dignissimos eaque minus officia
						reprehenderit nostrum ad? Earum laborum est tenetur at magni, aut commodi alias. Numquam
						minus fuga nisi ratione, sapiente molestias. Ex corrupti perspiciatis, voluptates soluta
						repellat exercitationem earum accusantium nobis doloremque nesciunt? Nesciunt voluptatum
						unde sed consequatur numquam corrupti omnis deserunt, eaque reiciendis? Voluptate non
						blanditiis numquam pariatur nisi illo autem soluta ipsum ut odio et fuga cupiditate
						velit, exercitationem commodi vel. Tempore, numquam. Neque minima pariatur, at dolores
						voluptas labore nisi non? Esse a odio perferendis placeat magnam modi veniam magni dolor
						mollitia, fugiat nemo neque culpa soluta dolorum enim aperiam laboriosam illum quasi
						nobis facilis eius ducimus doloremque eos delectus! Porro. Ipsam corporis est autem,
						quam, quod atque voluptate at dolorem consequatur rerum cumque. Molestiae, dignissimos
						omnis veniam doloribus, quae quas iste sequi temporibus modi magni consequuntur, dolore
						sed! Sapiente, cupiditate. Perspiciatis eaque sed quaerat saepe commodi ullam vel
						asperiores assumenda, id atque ex distinctio cum, et necessitatibus in. Vitae omnis iste
						fuga deleniti saepe, voluptate fugit rem? Ipsum, in asperiores? Adipisci saepe
						consequuntur fugiat ipsa eius, pariatur minima tenetur facilis officia, expedita at
						nesciunt esse dolores veritatis mollitia necessitatibus? Doloremque, eligendi facere
						cumque tenetur alias deleniti obcaecati commodi fugiat et. Ad omnis dolores dolorem
						architecto. Maxime fugit possimus ratione aliquam nostrum voluptatem dolorem, voluptatum
						distinctio velit voluptas sapiente quaerat tenetur maiores accusamus nemo a eum corrupti
						omnis quis exercitationem blanditiis. Itaque dignissimos earum quia! Amet sapiente eius
						iure! Veritatis excepturi eius nobis, quos iusto odio accusantium ab ipsam, a numquam,
						aspernatur dolorem eum similique enim nostrum quibusdam assumenda optio eveniet! Animi
						quos fugit facere ut? Fugit fugiat unde tempore iusto, placeat natus tempora laudantium
						doloremque necessitatibus magnam eum ex error? Error dolore reprehenderit expedita
						distinctio modi, voluptatem consequuntur earum minus! Enim, iste saepe adipisci esse
						tenetur soluta. Amet labore perspiciatis eius maxime. A et pariatur iste explicabo enim
						harum aut quasi, aliquam autem, unde assumenda maxime recusandae dignissimos totam
						ducimus? Suscipit ad aperiam consectetur, doloribus deserunt ratione consequuntur
						reiciendis culpa, omnis nostrum nihil alias deleniti porro expedita dolore earum quas
						id, eos harum hic! Quia aliquam facere officiis repellat aut! Id dolorum perferendis
						voluptate repellat? Unde ullam error nostrum magni accusamus totam, amet modi
						laudantium! Commodi quia accusantium quas perferendis sint! Laudantium cumque
						consequuntur ratione reiciendis. Nisi officia cupiditate fugit? Sed suscipit aliquam
						doloremque ullam animi eligendi similique reiciendis error, quo illum maxime modi
						laudantium minima, magni ipsum! Perferendis minus quibusdam voluptate, exercitationem
						fuga in amet et veniam alias quas? Aspernatur non dignissimos distinctio error, omnis
						saepe tempore obcaecati ipsam quidem consectetur ea minima illum earum dolorem velit
						praesentium dolores magnam, expedita fuga. Laborum asperiores corrupti exercitationem
						quod enim reiciendis. Et quasi reiciendis voluptate, eaque veniam ad debitis ea fugit,
						quidem odit labore optio illo quibusdam cupiditate nihil numquam architecto assumenda
						ut? Accusamus accusantium pariatur neque nemo qui soluta aliquid. Quod asperiores nobis
						aut esse est harum sapiente rerum veniam atque cupiditate? Autem, provident unde nihil
						accusantium beatae esse a aspernatur, quis, voluptatum laborum quas ducimus. Officia
						soluta ex quia!
					</div>
				</div>
			</div>
			<Sidebar />
		</div>
	);
};
