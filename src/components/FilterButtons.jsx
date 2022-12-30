import "./styles/filterBtns.css"
const FilterButtons = ({ setFilterId }) => {
	return (
		<section className='filter-buttons'>
			<div className='buttons-container'>
				<button onClick={() => setFilterId(0)}>Back</button>
				<button onClick={() => setFilterId(1)}>Front</button>
				<button onClick={() => setFilterId(2)}>SSG</button>
				<button onClick={() => setFilterId(3)}>Container</button>
				<button onClick={() => setFilterId(4)}>Database</button>
				<button onClick={() => setFilterId(5)}>Other</button>
				<button onClick={() => setFilterId(null)}>Clear</button>
			</div>
		</section>
	)
}
export default FilterButtons
