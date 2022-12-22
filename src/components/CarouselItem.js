import "./styles/carouselitem.css"
const apiUrl = "https://codealo-commerce-cms.onrender.com"
const CarouselItem = ({ product }) => {
	return (
		<section className='carousel-card' key={product.id}>
			<img
				src={`${apiUrl}${product.image.url}`}
				alt={product.title}
				className='carousel-img'
			/>
			<h3 className='carousel-title'>{product.title}</h3>
			<p className='carousel-price'>$ {product.price}</p>
		</section>
	)
}

export default CarouselItem
