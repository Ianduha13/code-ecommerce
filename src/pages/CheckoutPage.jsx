import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import CheckoutCard from "../components/CheckoutCard"

const CheckoutPage = () => {
	const { cart } = useSelector((state) => state.cart)
	const actualCart = Object.values(cart)
	console.log(actualCart)
	return (
		<>
			<div className='layout-page'>
				<div className='checkout-products'>
					{actualCart.map((x) => (
						<CheckoutCard product={x} key={x.id} />
					))}
				</div>
			</div>
		</>
	)
}
export default CheckoutPage
