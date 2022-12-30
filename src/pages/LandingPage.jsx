import "./styles/landing.css"
import { useNavigate } from "react-router-dom"
import CarouselItem from "../components/CarouselItem"
import usePageScroller from "../hooks/usePageScroller"

const LandingPage = ({ products }) => {
	const navigate = useNavigate()
	const firstProducts = [products?.[0], products?.[1], products?.[2]]
	usePageScroller()
	return (
		<div className='layout-page'>
			<section className='landing-page'>
				<header className='header'>We have whatever you want</header>
				<section className='carousel'>
					{firstProducts.map((x, idx) => (
						<CarouselItem product={x} key={idx} />
					))}
				</section>
				<button className='landing-btn' onClick={() => navigate("/products")}>
					See More...
				</button>
			</section>
		</div>
	)
}
export default LandingPage
