import "./styles/checkoutCard.css"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../features/cartSlice"
import CounterButtons from "./CounterButtons"

const apiUrl = "https://codealo-commerce-cms.onrender.com"

const CheckoutCard = ({ product }) => {
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
		<section className='checkout-card' key={product.id}>
			<div className='col'>
				<img
					src={`${apiUrl}${product.image.formats.thumbnail.url}`}
					alt={product.title}
					className='checkout-img'
				/>
				<h3 className='checkout-title'>{product.title}</h3>
			</div>
			<div className='col'>
				<p className='checkout-price'>$ {product.price}</p>
				{quantity === 0 ? (
					<button className='checkout-card-btn' onClick={handleAddToCart}>
						Add To Cart {quantity}
					</button>
				) : (
					<CounterButtons
						increment={handleAddToCart}
						decrement={handleRemoveFromCart}
						value={quantity}
						emptyLabel='Add to Cart'
					/>
				)}
			</div>
		</section>
	)
}

export default CheckoutCard
