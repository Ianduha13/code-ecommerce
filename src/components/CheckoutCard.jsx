import { useSelector, useDispatch } from "react-redux"
import {
	addToCart,
	quitFromCart,
	removeFromCart,
} from "../features/cart/cartSlice"
import CounterButtons from "./CounterButtons"
import { FaTimes } from "react-icons/fa"

const apiUrl = import.meta.env.VITE_API_URL

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
	const handleQuitFromCart = () => {
		dispatch(quitFromCart(product.id))
	}
	return (
		<section
			className='mt-2 flex items-center justify-between rounded-xl bg-purple-900 py-8 pl-16 pr-8 '
			key={product.id}
		>
			<div className='flex w-fit items-center'>
				<img
					src={`${apiUrl}${product.image.formats.thumbnail.url}`}
					alt={product.title}
					className='w-20 max-w-[80px] bg-cover'
				/>
				<h3 className='pl-6 text-2xl font-bold'>{product.title}</h3>
			</div>
			<div className='flex w-fit items-center'>
				<p className='pr-6 text-2xl font-bold'>$ {product.price}</p>
				<CounterButtons
					increment={handleAddToCart}
					decrement={handleRemoveFromCart}
					value={quantity}
					emptyLabel='Add to Cart'
				/>
				<button
					className='ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-orange-500'
					onClick={handleQuitFromCart}
				>
					<FaTimes />
				</button>
			</div>
		</section>
	)
}

export default CheckoutCard
