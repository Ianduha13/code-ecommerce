import "./styles/productCard.css"
import productService from "../features/products/productService"
import { useEffect, useState } from "react"

const ProductCard = () => {
	const [products, setProducts] = useState({})
	useEffect(() => {
		setProducts(productService.getProducts())
		console.log(products)
	})
	return (
		<section className='product-card'>
			<p key={1}>{products}</p>
		</section>
	)
}

export default ProductCard
