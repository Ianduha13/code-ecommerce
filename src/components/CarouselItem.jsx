import CounterButtons from "./CounterButtons"
import useProductCounter from "../hooks/useProductCounter"

const apiUrl = import.meta.env.VITE_API_URL

const CarouselItem = ({ product }) => {
	const { quantity, add, remove } = useProductCounter(product)
	if (!product) {
		return (
			<section className='m-6 flex h-1/2 w-full min-w-fit flex-col justify-between rounded-lg bg-indigo-700 p-6 text-center'></section>
		)
	}
	return (
		<section
			className='m-6 flex h-1/2 w-full min-w-fit flex-col justify-between rounded-lg bg-emerald-800 p-6 text-center'
			key={product.id}
		>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='h-40 object-cover'
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
