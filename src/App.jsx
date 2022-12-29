import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./features/productSlice"
import ProductsPage from "./pages/ProductsPage"
import CheckoutPage from "./pages/CheckoutPage"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import ProductPage from "./pages/ProductPage"

const App = () => {
	const { products } = useSelector((state) => state.products)
	const { user } = useSelector((state) => state.auth)
	const { cart } = useSelector((state) => state.cart)
	const dispatch = useDispatch()
	const [theme, setTheme] = useState(false)
	const handleTheme = () => setTheme((x) => !x)
	useEffect(() => {
		products !== null && dispatch(getProducts())
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
					<Route path='/product' element={<ProductPage />} />
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
