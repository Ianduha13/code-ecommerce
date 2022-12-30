import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const apiUrl = "https://codealo-commerce-cms.onrender.com"

export const productSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		loading: true,
		categories: [],
	},
	reducers: {
		loading(state, action) {
			return {
				...state,
				loading: action.payload,
			}
		},
		productsReceived(state, action) {
			return {
				...state,
				products: action.payload,
			}
		},
		categoriesReceived(state, action) {
			return {
				...state,
				categories: action.payload,
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

export const getCategories = () => async (dispatch) => {
	try {
		dispatch(loading(true))
		const response = await axios.get(`${apiUrl}/categories`)
		dispatch(categoriesReceived(response.data))
	} catch (error) {
		console.error(error)
	} finally {
		dispatch(loading(false))
	}
}

export const { productsReceived, loading, addToCart, categoriesReceived } =
	productSlice.actions

export default productSlice.reducer
