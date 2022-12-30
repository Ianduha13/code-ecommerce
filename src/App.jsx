import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getCategories } from "./features/productSlice"
import ProductsPage from "./pages/ProductsPage"
import CheckoutPage from "./pages/CheckoutPage"
import LandingPage from "./pages/LandingPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import ProductPage from "./pages/ProductPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
	const dispatch = useDispatch()
	const { products } = useSelector((state) => state.products)
	const { user } = useSelector((state) => state.auth)
	const { cart } = useSelector((state) => state.cart)
	const { productSlug } = useParams()
	const [theme, setTheme] = useState(false)
	const handleTheme = () => setTheme((x) => !x)
	useEffect(() => {
		products !== null && dispatch(getProducts())
		dispatch(getCategories())
	}, [])
	return (
		<div className={`App ${theme ? "light" : "dark"}`}>
			<BrowserRouter>
				<Navbar
					products={cart}
					theme={theme}
					user={user}
					handleTheme={handleTheme}
				/>
				<Routes>
					<Route path='/' element={<LandingPage products={products} />} />
					<Route
						path='/:productSlug'
						element={<ProductPage products={products} />}
					/>
					<Route
						path='/products'
						element={<ProductsPage products={products} user={user} />}
					/>
					<Route
						path='/checkout'
						element={user ? <CheckoutPage user={user} /> : <LoginPage />}
					/>
					<Route
						path='/login'
						element={user ? <LandingPage products={products} /> : <LoginPage />}
					/>
					<Route
						path='/register'
						element={
							user ? <LandingPage products={products} /> : <RegisterPage />
						}
					/>
					<Route
						path='/me'
						element={user ? <ProfilePage user={user} /> : <RegisterPage />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
