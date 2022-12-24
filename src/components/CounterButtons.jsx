import { FaMinus, FaPlus } from "react-icons/fa"
import "./styles/counterBtns.css"

const CounterButtons = ({ value, decrement, increment, emptyLabel }) => {
	if (!value)
		return (
			<section className='counter-buttons'>
				<button className='counter-btn-initial' onClick={increment}>
					{emptyLabel}
				</button>
			</section>
		)
	return (
		<section className='counter-buttons'>
			<div className='counter-buttons-list'>
				<button className='counter-btn' onClick={decrement}>
					<FaMinus />
				</button>
				<span className='qty-span'>{value}</span>
				<button className='counter-btn' onClick={increment}>
					<FaPlus />
				</button>
			</div>
		</section>
	)
}
export default CounterButtons
