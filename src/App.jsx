import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./features/productSlice"
import ProductsPage from "./pages/ProductsPage"
import CheckoutPage from "./pages/CheckoutPage"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
	const { products } = useSelector((state) => state.products)
	const dispatch = useDispatch()
	const [theme, setTheme] = useState(false)
	const handleTheme = () => setTheme((x) => !x)
	useEffect(() => {
		products !== null && dispatch(getProducts())
	}, [])
	return (
		<div className={`App ${theme ? "light" : "dark"}`}>
			<BrowserRouter>
				<Navbar theme={theme} handleTheme={handleTheme} />
				<Routes>
					<Route path='/' element={<LandingPage products={products} />} />
					<Route
						path='/products'
						element={<ProductsPage products={products} />}
					/>
					<Route path='/checkout' element={<CheckoutPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
