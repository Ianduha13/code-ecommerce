import "./styles/productCard.css"
import CounterButtons from "./CounterButtons"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../features/cartSlice"

const apiUrl = "https://codealo-commerce-cms.onrender.com"

const ProductCard = ({ product }) => {
	const dispatch = useDispatch()
	const storeProduct = useSelector((state) => state.cart.cart[product.id])
	const quantity = storeProduct?.quantity ?? 0
	const handleAddToCart = () => {
		dispatch(addToCart(product))
	}
	const handleRemoveFromCart = () => {
		dispatch(removeFromCart(product.id))
	}
	return (
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
					increment={handleAddToCart}
					decrement={handleRemoveFromCart}
					value={quantity}
					emptyLabel='Add to Cart'
				/>
			</section>
		</section>
	)
}

export default ProductCard
