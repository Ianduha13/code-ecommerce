import axios from "axios"
const apiUrl = "https://codealo-commerce-cms.onrender.com/auth/local"
const jwt =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ1NTg4NDk2LCJleHAiOjE2NDgxODA0OTZ9.vGOqFfySt4-qYIPKVdTBbsjjoL_9iwvHVesXFf0lZfw"

const register = async (userData) => {
	const response = await axios({
		method: "post",
		url: `${apiUrl}/register`,
		headers: "Content-Type: application/json",
		data: {
			username: userData.name,
			email: userData.email,
			password: userData.password,
		},
	})
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}
	console.log(response.data)
	return response.data
}

const login = async (userData) => {
	const response = await axios({
		method: "post",
		url: `${apiUrl}`,
		headers: {
			Authorization: `Bearer ${jwt}`,
			"Content-Type": "application/json",
		},
		body: {
			email: userData.email,
			password: userData.password,
		},
	})
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}
	console.log(response.data)
	return response.data
}
const authService = {
	register,
	login,
}

export default authService
