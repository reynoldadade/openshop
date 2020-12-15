import ProductDetails from "./ProductDetails";
import ProductDisplay from "./ProductDisplay";

const carousel = () => (
	<div className='grid grid-cols-1 md:grid-cols-6 gap-4 px-20'>
		<div className='col-span-1 md:col-span-4'>
			<ProductDisplay />
		</div>
		<div className='col-span-1 md:col-span-2'>
			<ProductDetails />
		</div>
	</div>
);

export default carousel;
