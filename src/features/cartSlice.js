import { createSlice } from "@reduxjs/toolkit"
import cartService from "./cartService"

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: {},
		loading: true,
	},
	reducers: {
		loading(state, action) {
			return {
				...state,
				loading: action.payload,
			}
		},
		addToCart(state, action) {
			const newCart = { ...state.cart }
			const product = action.payload
			const existingProduct = newCart[product.id]
			newCart[product.id] = {
				...(existingProduct ?? product),
				quantity: (newCart[product.id]?.quantity ?? 0) + 1,
			}
			return { ...state, cart: newCart }
		},
		removeFromCart(state, action) {
			const newCart = { ...state.cart }
			const productId = action.payload
			const existingProduct = newCart[productId]
			newCart[productId] = {
				...existingProduct,
				quantity: newCart[productId].quantity - 1,
			}
			return { ...state, cart: newCart }
		},
		resetCart() {
			return {
				cart: {},
				loading: true,
			}
		},
	},
})
export const getTotalValue = (state) => {
	const cart = Object.values(state.cart.cart)
	const totalValue = cart.reduce((acc, x) => acc + x.quantity * x.price, 0)
	return totalValue
}
export const makeOrder = (cart) => async (dispatch) => {
	try {
		await cartService.postOrder(cart)
		dispatch(resetCart())
	} catch (error) {
		const message = error?.response?.data?.message
		dispatch(rejected(message))
	}
}

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer
