import "./styles/filterBtns.css"
const FilterButtons = ({ setFilterId }) => {
	return (
		<section className='filter-buttons'>
			<button onClick={() => setFilterId(1)}>Back</button>
			<button onClick={() => setFilterId(2)}>Front</button>
			<button onClick={() => setFilterId(3)}>SSG</button>
			<button onClick={() => setFilterId(4)}>Container</button>
			<button onClick={() => setFilterId(5)}>Database</button>
			<button onClick={() => setFilterId(6)}>Other</button>
			<button onClick={() => setFilterId(0)}>Clear</button>
		</section>
	)
}
export default FilterButtons
