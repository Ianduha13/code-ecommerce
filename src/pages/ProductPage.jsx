import "./styles/product.css"
import CounterButtons from "../components/CounterButtons"
import useProductCounter from "../hooks/useProductCounter"
const apiUrl = import.meta.env.VITE_API_URL

const ProductPage = ({ product }) => {
	const { quantity, add, remove } = useProductCounter(product)
	return (
		<div className='layout-page'>
			<section className='product-card' key={product.id}>
				<img
					src={`${apiUrl}${product.image.url}`}
					alt={product.title}
					className='product-img'
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
		</div>
	)
}

export default ProductPage
