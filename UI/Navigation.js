const menu = [
	{ name: "Store", url: "" },
	{ name: "Collections", url: "" },
	{ name: "Videos", url: "" },
	{ name: "About Us", url: "" },
];

const nav = () => (
	<div>
		<div className='flex flex-row justify-between p-2'>
			<div className='flex'>
				{menu.map((item) => {
					return (
						<div className='py-1 px-2 font-bold uppercase'>
							{item.name}
						</div>
					);
				})}
			</div>
			<div>right</div>
		</div>
	</div>
);

export default nav;
