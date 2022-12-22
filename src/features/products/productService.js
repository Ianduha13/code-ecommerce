import axios from "axios"
const apiUrl = "https://codealo-commerce-cms.onrender.com"

const getProducts = async () => {
	try {
		const response = await axios.get(`${apiUrl}/products`)
		const { data } = JSON.stringify(response.data)
		return data
	} catch (error) {
		console.error(error)
	}
}
const productService = {
	getProducts,
}
export default productService
