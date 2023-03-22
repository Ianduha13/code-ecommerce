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
			className='mt-2 flex  justify-between rounded-xl bg-purple-900 px-2 py-2 lg:items-center lg:py-8 lg:px-8  '
			key={product.id}
		>
			<div className='flex w-fit items-center'>
				<img
					src={`${apiUrl}${product.image.formats.thumbnail.url}`}
					alt={product.title}
					className='w-10 max-w-[80px] bg-cover lg:w-20'
				/>
				<h3 className='text-2xl font-bold lg:pl-6'>{product.title}</h3>
			</div>
			<div className='flex w-fit items-center gap-4'>
				<p className='text-2xl font-bold lg:pr-2'>$ {product.price}</p>
				<CounterButtons
					increment={handleAddToCart}
					decrement={handleRemoveFromCart}
					value={quantity}
					emptyLabel='Add to Cart'
				/>
				<button
					className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-orange-500 lg:ml-2'
					onClick={handleQuitFromCart}
				>
					<FaTimes />
				</button>
			</div>
		</section>
	)
}

export default CheckoutCard
