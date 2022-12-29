import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import CheckoutCard from "../components/CheckoutCard"
import { getTotalValue, makeOrder, resetCart } from "../features/cartSlice"

const CheckoutPage = ({ user }) => {
	const [email, setEmail] = useState("")
	const [submitedToEmail, setSubmittedToEmail] = useState("")
	const { cart } = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	const totalValue = useSelector(getTotalValue)
	console.log(totalValue)
	const actualCart = Object.values(cart).filter((x) => x.quantity)
	const inputRef = useRef()
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(makeOrder())
	}

	if (!actualCart.length) {
		return (
			<div className='layout-page'>
				<header className='checkout-header'>
					{submitedToEmail && (
						<div className='layout-page'>
							<h3 className='purchase-succed'>
								Check your email ({submitedToEmail}) to complete your payment.
							</h3>
						</div>
					)}
					<span className='header-empty'>
						You dont have any products in your cart yet!
					</span>
					<Link to='/products'>
						<button className='button-cart-empty'>
							Go Back to Products Page!
						</button>
					</Link>
				</header>
			</div>
		)
	}
	return (
		<div className='layout-page'>
			<div className='checkout-products'>
				{actualCart.map((x) => (
					<CheckoutCard product={x} key={x.id} />
				))}
			</div>
			<form className='checkout-total' onSubmit={handleSubmit}>
				<header className='total-header'>
					Total: {Math.ceil(totalValue * 100) / 100}
				</header>

				<button type='submit' className='total-header button-header'>
					Send your order!
				</button>
			</form>
		</div>
	)
}
export default CheckoutPage
