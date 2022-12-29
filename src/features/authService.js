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
	console.log(response.data)
	return response.data
}

const login = async (loginData) => {
	console.log(loginData)
	const response = await axios({
		method: "post",
		url: `${apiUrl}/auth/local`,
		headers: {
			"Content-Type": "application/json",
		},
		body: {
			identifier: loginData.email,
			password: loginData.password,
		},
	})
	if (response.data) {
		localStorage.setItem("userData", JSON.stringify(response.data))
	}
	console.log(response.data)
	return response.data
}
const authService = {
	register,
	login,
}

export default authService
