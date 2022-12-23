import "./styles/landing.css"
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../features/productSlice"
import { useNavigate } from "react-router-dom"
import CarouselItem from "../components/CarouselItem"

const LandingPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { products, loading } = useSelector((state) => state.products)
	const firstProducts = products.slice(0, 3)
	useEffect(() => {
		products !== null && dispatch(getProducts())
	}, [])
	return (
		<div className='layout-page'>
			<section className='landing-page'>
				<header className='header'>We have whatever you want</header>

				{loading ? (
					<>Loading</>
				) : (
					<>
						<section className='carousel'>
							{firstProducts.map((x) => (
								<CarouselItem product={x} key={x.id} />
							))}
						</section>
						<button
							className='landing-btn'
							onClick={() => navigate("/products")}
						>
							See More...
						</button>
					</>
				)}
			</section>
		</div>
	)
}
export default LandingPage
