import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import CheckoutCard from "../components/CheckoutCard"

const CheckoutPage = () => {
	const { cart } = useSelector((state) => state.cart)
	const actualCart = Object.values(cart).filter((x) => x.quantity)
	if (!actualCart.length) {
		return (
			<div className='layout-page'>
				<header className='checkout-header'>
					<h1>You dont have any products in your cart!</h1>
					<Link to='/products'>
						<button className='checkout-button'>
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
		</div>
	)
}
export default CheckoutPage
