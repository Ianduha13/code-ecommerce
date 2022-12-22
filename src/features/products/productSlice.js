import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const apiUrl = "https://codealo-commerce-cms.onrender.com"

export const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
	},
	reducers: {
		productsReceived(state, action) {
			console.log("received", action.payload)
			return {
				...state,
				products: action.payload,
			}
		},
	},
})

export const getProducts = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`${apiUrl}/products`)
		dispatch(productsReceived(data))
	} catch (error) {
		console.error(error)
	}
}

export const { productsReceived } = productSlice.actions

export default productSlice.reducer
