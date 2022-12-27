import { createSlice } from "@reduxjs/toolkit"
import authService from "./authService"

const user = JSON.parse(localStorage.getItem("user")) ?? null

const initialState = {
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		...initialState,
		user,
	},
	reducers: {
		logout: () => {
			localStorage.removeItem("user")
			return { ...initialState, user: null }
		},
		loggedIn: (state, action) => {
			const newState = {
				...state,
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
	},
})

export const registerUser = (userData) => async (dispatch) => {
	try {
		await authService.register(userData)
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
export const loginUser = (userData) => async (dispatch) => {
	console.log(userData)
	try {
		const user = await authService.login(userData)
		dispatch(
			loggedIn({
				user,
				message: "Logged in correctly",
			})
		)
	} catch (error) {
		const message = error?.response?.data?.message
		dispatch(rejected(message))
	}
}

export const { logout, loggedIn, rejected, validationError } = authSlice.actions

export default authSlice.reducer
