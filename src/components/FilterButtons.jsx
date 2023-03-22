const FilterButtons = ({ setFilterId, filterId }) => {
	const buttons = [
		{ id: 1, name: "Front" },
		{ id: 2, name: "SSG" },
		{ id: 3, name: "Container" },
		{ id: 4, name: "Database" },
		{ id: 5, name: "Other" },
		{ id: null, name: "Clear" },
	]
	return (
		<section className='mt-5 mb-3 flex justify-center '>
			<div className='grid w-full grid-flow-col grid-rows-2 gap-4 sm:flex  sm:justify-between'>
				{buttons.map((x) => (
					<button
						key={x.id}
						className={`${
							x.id === filterId && x.id !== null
								? "bg-slate-500 opacity-80"
								: " bg-orange-500 "
						} cursor-pointer rounded-full py-2 px-3 text-xl hover:scale-105`}
						onClick={() => setFilterId(x.id)}
					>
						{x.name}
					</button>
				))}
			</div>
		</section>
	)
}
export default FilterButtons
