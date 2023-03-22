import CounterButtons from "./CounterButtons"
import useProductCounter from "../hooks/useProductCounter"

const apiUrl = import.meta.env.VITE_API_URL

const ProductCard = ({ product }) => {
	const { quantity, add, remove } = useProductCounter(product)
	return (
		<section
			className='m-6 flex min-h-[400px] flex-col items-center justify-between rounded-2xl bg-purple-600 p-6 '
			key={product.id}
		>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='max-h-xs'
			/>
			<h3 className='text-2xl font-bold'>{product.title}</h3>
			<p className='text-xl font-bold'>$ {product.price}</p>
			<section>
				<CounterButtons
					increment={add}
					decrement={remove}
					value={quantity}
					emptyLabel='Add to Cart'
				/>
			</section>
		</section>
	)
}

export default ProductCard
