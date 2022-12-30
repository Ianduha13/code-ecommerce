import "./styles/productCard.css"
import CounterButtons from "./CounterButtons"
import useProductCounter from "../hooks/useProductCounter"
import { useNavigate } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL

const ProductCard = ({ product }) => {
	const navigate = useNavigate()
	const slug = product.slug
	const { quantity, add, remove } = useProductCounter(product)
	return (
		<section className='product-card' key={product.id}>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='product-img'
				// onClick={() => navigate(`/${slug}`)}
			/>
			<h3 className='product-title'>{product.title}</h3>
			<p className='product-price'>$ {product.price}</p>
			<section className='product-buttons'>
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
