import CounterButtons from "./CounterButtons"
import useProductCounter from "../hooks/useProductCounter"

const apiUrl = import.meta.env.VITE_API_URL

const CarouselItem = ({ product }) => {
	const { quantity, add, remove } = useProductCounter(product)
	if (!product) {
		return (
			<section className='relative m-6 h-72 w-48 min-w-fit flex-col justify-between rounded-lg  bg-purple-800 text-center'>
				Loading
			</section>
		)
	}
	return (
		<section
			className='m-6 flex w-full min-w-fit flex-col justify-between rounded-lg bg-purple-800 p-6 text-center sm:w-auto lg:h-72'
			key={product.id}
		>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='object-cover lg:h-40'
			/>
			<h3 className='text-xl font-medium'>{product.title}</h3>
			<CounterButtons
				increment={add}
				decrement={remove}
				value={quantity}
				emptyLabel='Add to Cart'
				className='counter-landing'
			/>
		</section>
	)
}

export default CarouselItem
