import useAlert from "./useAlert"
import {
	validationError,
	registerUser,
	loginUser,
} from "../features/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const useForm = ({ formData, setFormData, form }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleChange = (name) => (e) => {
		setFormData((x) => ({
			...x,
			[name]: e.target.value,
		}))
	}
	const handleSubmit = async (e) => {
		e.preventDefault()

		const { name, email, password, password1 } = formData

		if (form === "register") {
			const isFilled = name && email && password && password1 !== undefined
			if (!isFilled) return useAlert("Please fill every field", "error")
		}
		if (form === "login") {
			const isFilled = email && password !== undefined
			if (!isFilled) return useAlert("Please fill every field", "error")
		}
		const isValid = email
			?.toLowerCase()
			?.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		if (!isValid || email.length > 40) {
			useAlert("Mail isn't valid", "error")
			dispatch(validationError("Email isnt correct"))
			return
		}
		if (form === "register") {
			if (password !== password1) {
				useAlert("Passwords does not match", "error")
				dispatch(validationError("Password do not match"))
				return
			}
			const userData = { name, email, password }
			dispatch(registerUser(userData))
			if (user !== null) {
				useAlert("Registered correctly", "success")
				navigate("/")
				return
			} else {
				useAlert("Something went wrong, please try again", "error")
			}
		}
		if (form === "login") {
			const userData = { email, password }
			dispatch(loginUser(userData))
			navigate("/")
			useAlert("Logged-in correctly", "success")
			return
		}
	}
	return { handleChange, handleSubmit }
}

export default useForm
