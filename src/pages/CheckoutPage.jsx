import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import CheckoutCard from "../components/CheckoutCard"
import { getTotalValue, resetCart } from "../features/cartSlice"

const CheckoutPage = () => {
	const [email, setEmail] = useState("")
	const [submitedToEmail, setSubmittedToEmail] = useState("")
	const { cart } = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	const totalValue = useSelector(getTotalValue)
	const actualCart = Object.values(cart).filter((x) => x.quantity)
	const inputRef = useRef()
	const handleSubmit = (e) => {
		e.preventDefault()
		const isValid = email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)

		if (!isValid) return
		dispatch(resetCart())
		setSubmittedToEmail(email)
		inputRef.current.value = ""
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
				<input
					type='email'
					placeholder='example@gmail.com'
					className='total-header input-header'
					onChange={(e) => setEmail(e.target.value)}
					ref={inputRef}
				/>
				<button type='submit' className='total-header button-header'>
					Submit!
				</button>
			</form>
		</div>
	)
}
export default CheckoutPage
