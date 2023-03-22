import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import authService from "./authService"
import cartService from "../cart/cartService"

const apiUrl = import.meta.env.VITE_API_URL
const user = JSON.parse(localStorage.getItem("userData"))

const initialState = {
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
	user,
	orders: [],
}
export const authSlice = createSlice({
	name: "auth",
	initialState: {
		...initialState,
	},
	reducers: {
		logout: () => {
			localStorage.removeItem("userData")
			return { ...initialState, user: null }
		},
		loggedIn: (state, action) => {
			const newState = {
				...state,
				isError: false,
				isLoading: false,
				isSuccess: true,
				message: action.payload.message,
				user: action.payload.user,
			}
			return newState
		},
		rejected: (state, action) => {
			return {
				...state,
				isLoading: false,
				isError: true,
				message: action.payload,
				user: null,
			}
		},
		validationError: (state, action) => {
			return {
				...state,
				isError: true,
				message: action.payload,
			}
		},
		ordersReceived(state, action) {
			return {
				...state,
				orders: action.payload,
			}
		},
	},
})

export const registerUser = (registerData) => async (dispatch) => {
	try {
		const user = await authService.register(registerData)
		dispatch(
			loggedIn({
				user,
				message: "Registered correctly, please verify your email",
			})
		)
	} catch (error) {
		const message = error?.response?.data?.message
		console.log(message)
		dispatch(rejected(message))
	}
}
export const loginUser = (loginData) => async (dispatch) => {
	try {
		const user = await authService.login(loginData)
		dispatch(
			loggedIn({
				user,
				message: "Logged in correctly",
			})
		)
	} catch (error) {
		const message = error?.response?.data?.message
		console.log(message)
		dispatch(rejected(message))
	}
}
export const getOrders = (jwt) => async (dispatch) => {
	try {
		const { data } = await axios({
			method: "get",
			url: `${apiUrl}/orders`,
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		})
		dispatch(ordersReceived(data))
	} catch (error) {
		console.error(error)
	}
}
export const { logout, loggedIn, rejected, validationError, ordersReceived } =
	authSlice.actions

export default authSlice.reducer
