import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL
const cartId = localStorage.getItem("cartId")

const postCart = async (id, qty) => {
	const response = await axios({
		method: "post",
		url: `${apiUrl}/carts`,
		headers: "Content-Type: application/json",
		data: {
			products_in_cart: [
				{
					product: { id: id },
					quantity: qty,
				},
			],
		},
	})
	if (response.data) {
		localStorage.setItem("cartId", JSON.stringify(response.data.id))
		return response.data.id
	}
}
const putCart = async (id, qty) => {
	const response = await axios.put(`${apiUrl}/carts/${cartId}`, {
		product: { id: id },
		quantity: qty,
	})
	return response.data
}

// const postOrder = async (cart, jwt) => {
// 	const response = axios({
// 		method: "post",
// 		url: `${apiUrl}/orders`,
// 		headers: {
// 			Authorization: `Bearer ${jwt}`,
// 			"Content-Type": "application/json",
// 		},
// 		data: {
// 			cart: cart,
// 		},
// 	})
// 	console.log(response.data)
// 	return response.data
// }
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
	postCart,
	putCart,
	// postOrder,
	// getOrders,
}
export default cartService
