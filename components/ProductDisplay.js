import styles from "../styles/ProductDisplay.module.css";
import CarouselIndex from "../UI/CarouselIndex";

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

const url1 =
	"https://images.unsplash.com/photo-1607732994987-15674d81ba62?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
const url2 =
	"https://images.unsplash.com/photo-1607899668381-8ead31f1900b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
export default function ProductDisplay(props) {
	return (
		<div className={`flex ${styles.currentImage}`}>
			{/* images prefered are  500h x 750w px */}
			<div className='w-1/8 text-xs'>
				<CarouselIndex start={start} items={items} />
			</div>
			<div className='border-1 border-gray-100'>
				<img src={url1} className={styles.currentImage}></img>
			</div>
			<div className={`${styles.nextImageContainer} hidden md:block`}>
				<img src={url2} className={styles.nextImage}></img>
			</div>
		</div>
	);
}
