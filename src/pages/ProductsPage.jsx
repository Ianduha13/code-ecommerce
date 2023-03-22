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
		<section className='products-page flex w-screen flex-grow flex-col items-center pt-20 text-center'>
			<header className='text-2xl font-bold'>All the products:</header>
			<FilterButtons setFilterId={setFilterId} filterId={filterId} />
			<section className='products-container grid w-4/5 gap-4'>
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
