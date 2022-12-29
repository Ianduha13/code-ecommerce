import "./styles/allProducts.css"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import usePageScroller from "../hooks/usePageScroller"
import { useDispatch } from "react-redux"
import { filterProducts } from "../features/productSlice"
import FilterButtons from "../components/FilterButtons"

const ProductsPage = ({ products }) => {
	const [filterId, setFilterId] = useState(0)
	const dispatch = useDispatch()
	useEffect(() => {
		setFilters(filterId)
	}, [filterId])
	const setFilters = (id) => {
		dispatch(filterProducts(id))
	}

	usePageScroller()
	return (
		<section className='products-page'>
			<header className='products-header'>All the products:</header>
			<FilterButtons setFilterId={setFilterId} />
			<section className='products-container'>
				{products.map((x) => (
					<ProductCard product={x} key={x.id} />
				))}
			</section>
		</section>
	)
}

export default ProductsPage
