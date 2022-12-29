import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL

const postOrder = async (cart) => {
	const response = axios({
		method: "post",
		url: `${apiUrl}/orders`,
		headers: {
			Authorization: `Bearer ${jwt}`,
			"Content-Type": "application/json",
		},
		body: {
			cart: 1,
		},
	})
	console.log(response.data)
	return response.data
}
// export const getOrders = async (jwt) => {
// 	const response = axios({
// 		method: "get",
// 		url: `${apiUrl}/orders`,
// 		headers: {
// 			Authorization: `Bearer ${jwt}`,
// 		},
// 	})
// 	return response.data
// }
const cartService = {
	postOrder,
	// getOrders,
}
export default cartService
