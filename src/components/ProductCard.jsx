import "./styles/productCard.css"
const apiUrl = "https://codealo-commerce-cms.onrender.com"
const ProductCard = ({ product }) => {
	return (
		<section className='product-card' key={product.id}>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='product-img'
			/>
			<h3 className='product-title'>{product.title}</h3>
			<p className='product-price'>$ {product.price}</p>
		</section>
	)
}

export default ProductCard
