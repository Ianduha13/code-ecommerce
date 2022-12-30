import "./styles/products.css"
import { useState } from "react"
import ProductCard from "../components/ProductCard"
import usePageScroller from "../hooks/usePageScroller"
import { useSelector } from "react-redux"
import FilterButtons from "../components/FilterButtons"

const ProductsPage = ({ products }) => {
	const [filterId, setFilterId] = useState(null)
	const categories = useSelector((state) => state.products.categories)
	const categorieFiltered = categories[filterId]

	usePageScroller()
	return (
		<section className='products-page'>
			<header className='products-header'>All the products:</header>
			<FilterButtons setFilterId={setFilterId} />
			<section className='products-container'>
				{!categorieFiltered
					? products.map((x) => <ProductCard product={x} key={x.id} />)
					: categorieFiltered.products.map((x) => (
							<ProductCard product={x} key={x.id} />
					  ))}
			</section>
		</section>
	)
}

export default ProductsPage
