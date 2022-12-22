import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../features/products/productSlice"
import ProductCard from "../components/ProductCard"

const ProductPage = () => {
	const dispatch = useDispatch()
	const { products } = useSelector((state) => state.products)
	useEffect(() => {
		dispatch(getProducts())
	}, [])
	return (
		<>
			{products.map((x) => (
				<ProductCard product={x} key={x.id} />
			))}
		</>
	)
}
export default ProductPage
