import "./styles/productPage.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
const apiUrl = import.meta.env.VITE_API_URL

const ProductPage = () => {
	const { slug } = useParams()

	return <div className='layout-page'></div>
}

export default ProductPage
