import { createSlice } from "@reduxjs/toolkit"
import cartService from "./cartService"

const cart =
	JSON.parse(localStorage.getItem("cart")) !== null
		? JSON.parse(localStorage.getItem("cart"))
		: {}
export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart,
		cartId: "",
		loading: true,
		message: "",
	},
	reducers: {
		loading(state, action) {
			return {
				...state,
				loading: action.payload,
			}
		},
		rejected(state, action) {
			return {
				...state,
				message: action.payload,
			}
		},
		addCartId(state, action) {
			return {
				...state,
				cartId: action.payload,
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
		quitFromCart(state, action) {
			const newCart = { ...state.cart }
			const productId = action.payload
			const existingProduct = newCart[productId]
			newCart[productId] = {
				...existingProduct,
				quantity: newCart[productId].quantity - newCart[productId].quantity,
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
export const onlineCart = (id, qty, storeProduct) => async (dispatch) => {
	if (!storeProduct) {
		try {
			const cartId = await cartService.postCart(id, qty)
			dispatch(addCartId(cartId))
		} catch (error) {
			const message = error?.response?.data?.message
			dispatch(rejected(message))
			console.log(error)
		}
	} else {
		await cartService.putCart(id, qty)
		try {
		} catch (error) {
			const message = error?.response?.data?.message
			dispatch(rejected(message))
			console.log(error)
		}
	}
}
export const getTotalItems = (state) => {
	const cart = Object.values(state.cart.cart)
	const totalItems = cart.reduce((acc, x) => acc + x.quantity, 0)
	return totalItems
}
export const getTotalValue = (state) => {
	const cart = Object.values(state.cart.cart)
	const totalValue = cart.reduce((acc, x) => acc + x.quantity * x.price, 0)
	return totalValue
}
export const makeOrder = (cart, jwt) => async (dispatch) => {
	try {
		await cartService.postOrder(cart, jwt)
		dispatch(resetCart())
	} catch (error) {
		const message = error?.response?.data?.message
		dispatch(rejected(message))
	}
}
export const {
	loading,
	rejected,
	addToCart,
	addCartId,
	removeFromCart,
	resetCart,
	obtainCartId,
	quitFromCart,
} = cartSlice.actions

export default cartSlice.reducer
