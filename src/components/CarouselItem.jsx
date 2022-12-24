import CounterButtons from "./CounterButtons"
import useProductCounter from "../hooks/useProductCounter"
import "./styles/carouselitem.css"

const apiUrl = "https://codealo-commerce-cms.onrender.com"

const CarouselItem = ({ product }) => {
	const { quantity, add, remove } = useProductCounter(product)
	if (!product) return <section className='carousel-card'></section>
	return (
		<section className='carousel-card' key={product.id}>
			<img
				src={`${apiUrl}${product.image.formats.thumbnail.url}`}
				alt={product.title}
				className='carousel-img'
			/>
			<h3 className='carousel-title'>{product.title}</h3>
			<CounterButtons
				increment={add}
				decrement={remove}
				value={quantity}
				emptyLabel='Add to Cart'
			/>
		</section>
	)
}

export default CarouselItem
