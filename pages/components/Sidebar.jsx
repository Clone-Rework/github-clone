import React from "react";
import { Tags } from "./Tags";

export const Sidebar = () => {
	return (
		<div className='sidebar w-1/4 '>
			<div className='about'>
				<h4 className='text-base font-semibold'>About</h4>
				<p className='text-base mt-4'>A utility-first CSS framework for rapid UI development.</p>

				<div className='flex items-center space-x-2 mt-4'>
					<svg className='mr-1 w-4' viewBox='0 0 16 16' version='1.1' aria-hidden='true'>
						<path
							fill-rule='evenodd'
							d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'
						></path>
					</svg>
					<a href='#' className='text-blue-600 hover:underline font-semibold'>
						tailwindcss.com/
					</a>
				</div>
				<div className='text-xs font-semibold flex items-center flex-wrap mt-2'>
					<Tags value='css' />
					<Tags value='postcss' />
					<Tags value='responsive' />
					<Tags value='css-framework' />
					<Tags value='functional-css' />
					<Tags value='utility-classes' />
					<Tags value='tailwindcss' />
				</div>

				<a href='#' className='flex items-center space-x-2 mt-4 group'>
					<svg
						className='w-4 fill-current text-gray-600 group-hover:text-blue-600'
						viewBox='0 0 16 16'
					>
						<path
							fill-rule='evenodd'
							d='M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z'
						></path>
					</svg>
					<span className='text-gray-600 group-hover:text-blue-600'>Readme</span>
				</a>
				<a href='#' className='flex items-center space-x-2 mt-4 group'>
					<svg
						className='w-4 fill-current text-gray-600 group-hover:text-blue-600'
						viewBox='0 0 16 16'
					>
						<path d='M6 15c-3.31 0-6-.9-6-2v-2c0-.17.09-.34.21-.5.67.86 3 1.5 5.79 1.5s5.12-.64 5.79-1.5c.13.16.21.33.21.5v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V7c0-.11.04-.21.09-.31.03-.06.07-.13.12-.19C.88 7.36 3.21 8 6 8s5.12-.64 5.79-1.5c.05.06.09.13.12.19.05.1.09.21.09.31v2c0 1.1-2.69 2-6 2zm0-4c-3.31 0-6-.9-6-2V3c0-1.1 2.69-2 6-2s6 .9 6 2v2c0 1.1-2.69 2-6 2zm0-5c-2.21 0-4 .45-4 1s1.79 1 4 1 4-.45 4-1-1.79-1-4-1z'></path>
					</svg>
					<span className='text-gray-600 group-hover:text-blue-600'>
						<span className='font-bold'>35.48 </span>MB
					</span>
				</a>
				<a href='#' className='flex items-center space-x-2 mt-4 group'>
					<svg
						className='w-4 fill-current text-gray-600 group-hover:text-blue-600'
						viewBox='0 0 16 16'
					>
						<path
							fill-rule='evenodd'
							d='M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z'
						></path>
					</svg>
					<span className='text-gray-600 group-hover:text-blue-600'>MIT License</span>
				</a>
			</div>
			<div className='release border-t border-gray-400 mt-6 pt-6'>
				<h4 className='text-base font-semibold flex items-center'>
					<span>Release</span>
					<div className='text-xs rounded-lg bg-gray-300 px-2 ml-1'>146</div>
				</h4>
			</div>
			<div className='packages border-t border-gray-400 mt-6 pt-6'>
				<h4 className='text-base font-semibold flex items-center'>
					<span>Packages</span>
				</h4>
				<p className='text-xs text-gray-500 mt-2'>No packages published</p>
			</div>
			<div className='used-by border-t border-gray-400 mt-6 pt-6'>
				<h4 className='text-base font-semibold flex items-center'>
					<span>Used by </span>
					<div className='text-xs rounded-lg bg-gray-300 px-2 ml-1'>139k</div>
				</h4>
			</div>
			<div className='contributors border-t border-gray-400 mt-6 pt-6'>
				<h4 className='text-base font-semibold flex items-center'>
					<span>Contributors</span>
					<div className='text-xs rounded-lg bg-gray-300 px-2 ml-1'>160</div>
				</h4>
			</div>
			<div className='contributors border-t border-gray-400 mt-6 pt-6'>
				<h4 className='text-base font-semibold flex items-center'>
					<span>Languages</span>
				</h4>
				<div>
					<span>
						<span className='w-3 h-3 rounded-full bg-purple-800'></span> CSS 96.8%
					</span>
					<span>
						<span></span> JavaScript 3.2%
					</span>
				</div>
			</div>
		</div>
	);
};
