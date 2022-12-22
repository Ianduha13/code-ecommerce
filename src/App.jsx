import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Navbar from "./components/Navbar"

function App() {
	const [theme, setTheme] = useState(false)
	const handleTheme = () => {
		const newTheme = theme === false ? true : false
		setTheme(newTheme)
	}

	return (
		<div className={`App ${theme === false ? "dark" : "light"}`}>
			<Navbar theme={theme} handleTheme={handleTheme} />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<LandingPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
