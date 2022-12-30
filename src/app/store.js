import { configureStore, createSlice } from "@reduxjs/toolkit"
import productSlice from "../features/productSlice"
import cartSlice from "../features/cart/cartSlice"
import authSlice from "../features/auth/authSlice"

export const store = configureStore({
	reducer: {
		products: productSlice,
		cart: cartSlice,
		auth: authSlice,
	},
})
