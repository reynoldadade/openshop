import { useState } from "react";

let Sizes = [
	{
		name: "xs",
	},
	{
		name: "s",
	},
	{
		name: "m",
	},
	{
		name: "l",
	},
	{
		name: "xl",
	},
];
export default function SizeSelector(props) {
	const [selectedSize, SetSelectedSize] = useState("xs");

	return (
		<div className='py-2 flex'>
			{Sizes.map((size) => {
				return (
					<button
						onClick={(event) => SetSelectedSize(size.name)}
						key={size.name}
						className={`pr-6 uppercase font-bold text-sm focus:outline-none hover:underline ${
							size.name === selectedSize ? "underline" : ""
						}`}
					>
						{size.name}
					</button>
				);
			})}
		</div>
	);
}
