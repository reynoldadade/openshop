import CarouselIndex from "../UI/CarouselIndex";
import ProductDisplay from "./ProductDisplay";

let start = 1;
const items = [
	{
		name: "shirt",
	},
	{
		name: "trouser",
	},
	{
		name: "sock",
	},
	{
		name: "shoe",
	},
];

const carousel = () => (
	<div className='grid grid-cols-7 gap-4 p-1'>
		<div className='col-span-1'>
			{/* <CarouselIndex start={start} items={items} /> */}
		</div>
		<div className='col-span-4'>
			<ProductDisplay />
		</div>
		<div className='col-span-2'>details</div>
	</div>
);

export default carousel;
