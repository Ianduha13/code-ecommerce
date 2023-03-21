import { FaMinus, FaPlus } from "react-icons/fa"

const CounterButtons = ({ value, decrement, increment, emptyLabel }) => {
	if (!value)
		return (
			<section className='mt-2 h-10'>
				<button
					className='h-10 cursor-pointer rounded-full bg-orange-500 px-6 text-xl font-bold text-white'
					onClick={increment}
				>
					{emptyLabel}
				</button>
			</section>
		)
	return (
		<section className='mt-2 h-10'>
			<div className='flex h-8 w-40 items-center justify-between overflow-hidden'>
				<button
					className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-orange-500'
					onClick={decrement}
				>
					<FaMinus />
				</button>
				<span className='w-6 text-center text-2xl font-medium'>{value}</span>
				<button
					className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-orange-500'
					onClick={increment}
				>
					<FaPlus />
				</button>
			</div>
		</section>
	)
}
export default CounterButtons
