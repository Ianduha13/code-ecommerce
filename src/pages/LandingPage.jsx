import "./styles/landing.css"
import { getProducts } from "../features/products/productSlice"
import { useDispatch } from "react-redux"

const LandingPage = () => {
	const dispatch = useDispatch()
	dispatch(getProducts())
	return (
		<section className='landing-page'>
			<header className='header'></header>
			<section className='carousel'></section>
		</section>
	)
}
export default LandingPage
