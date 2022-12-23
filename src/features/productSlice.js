import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const apiUrl = "https://codealo-commerce-cms.onrender.com"

export const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		loading: true,
	},
	reducers: {
		productsReceived(state, action) {
			return {
				...state,
				products: action.payload,
			}
		},
		loading(state, action) {
			return {
				...state,
				loading: action.payload,
			}
		},
	},
})

export const getProducts = () => async (dispatch) => {
	try {
		dispatch(loading(true))
		const { data } = await axios.get(`${apiUrl}/products`)
		dispatch(productsReceived(data))
	} catch (error) {
		console.error(error)
	} finally {
		dispatch(loading(false))
	}
}

export const { productsReceived, loading, addToCart } = productSlice.actions

export default productSlice.reducer
