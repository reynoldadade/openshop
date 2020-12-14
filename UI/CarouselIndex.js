import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const carouselIndex = (props) => (
	<div className='flex flex-col p-1'>
		{props.items.map((item, index) => {
			let iconType =
				props.start === index ? ["fas", "circle"] : ["far", "circle"];
			return <FontAwesomeIcon icon={iconType} key={index} size='sm' />;
		})}
	</div>
);

export default carouselIndex;
