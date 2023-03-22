import { useNavigate } from "react-router-dom"
import CarouselItem from "../components/CarouselItem"
import usePageScroller from "../hooks/usePageScroller"

const LandingPage = ({ products }) => {
	const navigate = useNavigate()
	const firstProducts = [products?.[0], products?.[1], products?.[2]]
	usePageScroller()
	return (
		<div className='layout-page justify-center'>
			<section className='relative mt-20 flex h-full w-full flex-col items-center'>
				<header className='text-center text-3xl font-medium'>
					Our most selled products:
				</header>
				<section className='carousel flex h-1/2 w-full flex-col items-center justify-center p-3 lg:flex-row'>
					{firstProducts.map((x, idx) => (
						<CarouselItem product={x} key={idx} />
					))}
				</section>
				<button
					className='h-10 w-full max-w-[400px] cursor-pointer rounded-full bg-orange-500 text-2xl font-semibold'
					onClick={() => navigate("/products")}
				>
					See More...
				</button>
			</section>
		</div>
	)
}
export default LandingPage
