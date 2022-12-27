import { configureStore, createSlice } from "@reduxjs/toolkit"
import productSlice from "../features/productSlice"
import cartSlice from "../features/cartSlice"
import authSlice from "../features/authSlice"

export const store = configureStore({
	reducer: {
		products: productSlice,
		cart: cartSlice,
		auth: authSlice,
	},
})
