import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getCategories } from "./features/productSlice"
import ProductsPage from "./pages/ProductsPage"
import CheckoutPage from "./pages/CheckoutPage"
import LandingPage from "./pages/LandingPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
	const dispatch = useDispatch()
	const { products } = useSelector((state) => state.products)
	const { user } = useSelector((state) => state.auth)
	const { cart } = useSelector((state) => state.cart)
	const [theme, setTheme] = useState(false)

	const handleTheme = () => setTheme((x) => !x)
	useEffect(() => {
		cart !== null
			? localStorage.setItem("cart", JSON.stringify(cart))
			: localStorage.removeItem("cart")
	}, [cart])
	useEffect(() => {
		products !== null && dispatch(getProducts())
		dispatch(getCategories())
	}, [])

	return (
		<div className={`App ${theme ?? "dark"}`}>
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
				<SnackbarProvider
					preventDuplicate
					anchorOrigin={{ vertical: "top", horizontal: "right" }}
					maxSnack={2}
					autoHideDuration={2000}
				/>
			</BrowserRouter>
		</div>
	)
}

export default App
