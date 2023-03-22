import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import CheckoutCard from "../components/CheckoutCard"
import { getTotalValue, makeOrder, resetCart } from "../features/cart/cartSlice"

const CheckoutPage = ({ user }) => {
	const [submitedToEmail, setSubmittedToEmail] = useState("")
	const { cart } = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	const totalValue = useSelector(getTotalValue)
	const actualCart = Object.values(cart).filter((x) => x.quantity)
	const handleSubmit = (e) => {
		e.preventDefault()
		// dispatch(makeOrder(cart, user.jwt))
		setSubmittedToEmail(user.user.email)
		dispatch(resetCart())
	}

	if (!actualCart.length) {
		return (
			<div className='layout-page justify-center'>
				<header className='flex flex-col items-center gap-8'>
					{submitedToEmail ? (
						<h3 className='text-2xl font-medium'>
							Check your email ({submitedToEmail}) to complete your payment.
						</h3>
					) : (
						<span className='h-auto text-center text-2xl font-medium'>
							You dont have any products in your cart yet!
						</span>
					)}
					<Link to='/products'>
						<button className='h-10 cursor-pointer rounded-full bg-orange-500 px-6 text-xl font-bold'>
							Go Back to Products Page!
						</button>
					</Link>
				</header>
			</div>
		)
	}
	return (
		<div className='layout-page w-screen justify-between md:w-4/5 md:justify-center'>
			<div className='relative flex h-full w-full flex-col pt-14 md:w-4/5'>
				{actualCart.map((x) => (
					<CheckoutCard product={x} key={x.id} />
				))}
			</div>
			<form
				className='mt-3 flex w-full justify-center gap-4 md:w-4/5'
				onSubmit={handleSubmit}
			>
				<header className='w-1/4 rounded-xl bg-white py-3 text-center text-2xl font-bold text-purple-500'>
					Total: {Math.ceil(totalValue * 100) / 100}
				</header>
				<button
					type='submit'
					className='w-3/4 cursor-pointer rounded-xl bg-orange-500 py-3 text-center text-2xl font-bold'
				>
					Send your order!
				</button>
			</form>
		</div>
	)
}
export default CheckoutPage
