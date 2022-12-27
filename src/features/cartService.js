import axios from "axios"
const apiUrl = "https://codealo-commerce-cms.onrender.com/auth/local"
const jwt =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ1NTg4NDk2LCJleHAiOjE2NDgxODA0OTZ9.vGOqFfySt4-qYIPKVdTBbsjjoL_9iwvHVesXFf0lZfw"

const postOrder = async (cart) => {
	const response = axios({
		method: "post",
		url: `${apiUrl}`,
		headers: {
			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ1NTg4NDk2LCJleHAiOjE2NDgxODA0OTZ9.vGOqFfySt4-qYIPKVdTBbsjjoL_9iwvHVesXFf0lZfw'`,
			"Content-Type": "application/json",
		},
		body: {
			cart: cart,
		},
	})
	console.log(response.data)
	return response.data
}
const cartService = {
	postOrder,
}
export default cartService
