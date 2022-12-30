import CounterButtons from "./CounterButtons"
import useProductCounter from "../hooks/useProductCounter"
import "./styles/carouselitem.css"

const apiUrl = import.meta.env.VITE_API_URL

const CarouselItem = ({ product }) => {
	const { quantity, add, remove } = useProductCounter(product)
	if (!product) return <section className='carousel-card'></section>
	return (
		<section className='carousel-card' key={product.id}>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='carousel-img'
			/>
			<h3 className='carousel-title'>{product.title}</h3>
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
