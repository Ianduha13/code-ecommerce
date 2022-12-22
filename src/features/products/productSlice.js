import { createSlice } from "@reduxjs/toolkit"
import productService from "./productService"

export const productSlice = createSlice({
	name: "products",
	initialState: {},
	reducers: {},
})

export const { getProducts } = productSlice.actions
export default productSlice.reducer
