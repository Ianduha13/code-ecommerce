import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import "./styles/landing.css"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../features/products/productSlice"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { products } = useSelector((state) => state.products)
	useEffect(() => {
		dispatch(getProducts())
	}, [])
	console.log(products)
	return (
		<div className='layout-page'>
			<section className='landing-page'>
				<header className='header'>We have whatever you want</header>

				<section className='carousel'>
					{products.map(
						(x) => x.id < 4 && <ProductCard product={x} key={x.id} />
					)}
				</section>
				<button className='landing-btn' onClick={() => navigate("/products")}>
					See More...
				</button>
			</section>
		</div>
	)
}
export default LandingPage
