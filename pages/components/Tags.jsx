import React from "react";

export const Tags = (props) => {
	return (
		<a
			href='#'
			className='bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2'
		>
			{props.value}
		</a>
	);
};
