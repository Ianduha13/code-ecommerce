import "./styles/productPage.css"
const apiUrl = "https://codealo-commerce-cms.onrender.com"

const ProductPage = ({ product }) => {
	return (
		<section className='product-card' key={product.id}>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='product-img'
			/>
			<h3 className='product-title'>{product.title}</h3>
			<p className='product-price'>$ {product.price}</p>
			<p className='product-description'>$ {product.description}</p>
		</section>
	)
}

export default ProductPage
