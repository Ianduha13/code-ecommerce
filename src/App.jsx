import AllProductsPage from "./pages/AllProductsPage"
import CheckoutPage from "./pages/CheckoutPage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import ProductPage from "./pages/ProductPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
	const [theme, setTheme] = useState(false)
	const handleTheme = () => setTheme((x) => !x)

	return (
		<div className={`App ${theme ? "light" : "dark"}`}>
			<Navbar theme={theme} handleTheme={handleTheme} />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='/products' element={<AllProductsPage />} />
					<Route path='/checkout' element={<CheckoutPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/me' element={<ProfilePage />} />
					<Route path='/product/:id' element={<ProductPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
