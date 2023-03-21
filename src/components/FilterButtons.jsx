const FilterButtons = ({ setFilterId }) => {
	const buttons = [
		{ id: 1, name: "Front" },
		{ id: 2, name: "SSG" },
		{ id: 3, name: "Container" },
		{ id: 4, name: "Database" },
		{ id: 5, name: "Other" },
		{ id: null, name: "Clear" },
	]
	return (
		<section className='mt-5 mb-3 flex w-full justify-center'>
			<div className='flex justify-between gap-4'>
				{buttons.map((x) => (
					<button
						key={x.id}
						className='cursor-pointer rounded-full bg-orange-500 py-2 px-3 text-xl focus:bg-slate-500 focus:opacity-80'
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
