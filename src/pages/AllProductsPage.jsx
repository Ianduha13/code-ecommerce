import "./styles/allProducts.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../features/productSlice"
import ProductCard from "../components/ProductCard"

const AllProductsPage = () => {
	const dispatch = useDispatch()
	const { products } = useSelector((state) => state.products)
	useEffect(() => {
		products !== null && dispatch(getProducts())
	}, [])
	return (
		<section className='products-page'>
			<header className='products-header'>All the products:</header>
			<section className='products-container'>
				{products.map((x) => (
					<ProductCard product={x} key={x.id} />
				))}
			</section>
		</section>
	)
}

export default AllProductsPage
