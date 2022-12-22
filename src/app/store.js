import { configureStore } from "@reduxjs/toolkit"
import productSlice from "../features/products/productSlice"

export const store = configureStore({
	reducer: {
		products: productSlice,
	},
})
