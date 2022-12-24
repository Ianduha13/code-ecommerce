import "./styles/allProducts.css"
import ProductCard from "../components/ProductCard"
import usePageScroller from "../hooks/usePageScroller"

const ProductsPage = ({ products }) => {
	usePageScroller()
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

export default ProductsPage
