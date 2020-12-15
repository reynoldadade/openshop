import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SizeSelector from "../UI/SizeSelector";

export default function ProductDetails(props) {
	return (
		<div className='flex flex-col py-20 px-10'>
			<div className='text-xs font-bold'>Blouse</div>
			<div className='uppercase font-extrabold text-xl'>
				product brand
			</div>
			<div className='py-2 text-sm'>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
					nemo enim impedit ullam sapiente non quos consequuntur
					veniam est dicta voluptatibus vero, explicabo fugit? Optio
					culpa numquam eveniet a placeat.
				</p>
			</div>
			<div className='text-xs font-bold'>
				More <FontAwesomeIcon icon={["fas", "long-arrow-alt-right"]} />
			</div>
			<div className='mt-20 bg-white w-1/4 uppercase border-1 border-gray-200 py-1 text-center font-bold text-xs'>
				size guide
			</div>
			<SizeSelector />
			<div className='text-xl font-extrabold uppercase'>$100</div>
			<div className='w-1/2 flex pt-2'>
				<button className='bg-black text-white p-3 uppercase text-xs'>
					Add to cart
				</button>
				<button className='bg-white mt-1 py-2 px-3 rounded-tr rounded-br'>
					<FontAwesomeIcon icon={["far", "heart"]} />
				</button>
			</div>
		</div>
	);
}
