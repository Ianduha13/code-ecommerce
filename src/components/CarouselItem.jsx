import "./styles/carouselitem.css"
const apiUrl = "https://codealo-commerce-cms.onrender.com"
const CarouselItem = ({ product }) => {
	return (
		<section className='carousel-card' key={product.id}>
			<img
				src={`${apiUrl}${product.image.formats.thumbnail.url}`}
				alt={product.title}
				className='carousel-img'
			/>
			<h3 className='carousel-title'>{product.title}</h3>
		</section>
	)
}

export default CarouselItem
