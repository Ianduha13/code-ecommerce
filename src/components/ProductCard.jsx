import "./styles/productCard.css"
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
			{quantity === 0 ? (
				<button className='product-card-btn' onClick={handleAddToCart}>
					Add To Cart {quantity}
				</button>
			) : (
				<div>
					<button className='product-card-btn' onClick={handleRemoveFromCart}>
						-
					</button>
					<span className='quantity-span'>{quantity}</span>
					<button className='product-card-btn' onClick={handleAddToCart}>
						+
					</button>
				</div>
			)}
		</section>
	)
}

export default ProductCard
