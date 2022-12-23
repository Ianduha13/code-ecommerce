import { createSlice } from "@reduxjs/toolkit"

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
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
