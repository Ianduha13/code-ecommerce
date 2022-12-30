import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL

const register = async (registerData) => {
	const response = await axios({
		method: "post",
		url: `${apiUrl}/auth/local/register`,
		headers: "Content-Type: application/json",
		data: {
			username: registerData.name,
			email: registerData.email,
			password: registerData.password,
		},
	})
	if (response.data) {
		localStorage.setItem("userData", JSON.stringify(response.data))
	}
	return response.data
}

const login = async (loginData) => {
	const response = await axios({
		method: "post",
		url: `${apiUrl}/auth/local`,
		data: {
			identifier: loginData.email,
			password: loginData.password,
		},
	})
	if (response.data) {
		localStorage.setItem("userData", JSON.stringify(response.data))
	}
	return response.data
}
const authService = {
	register,
	login,
}

export default authService
