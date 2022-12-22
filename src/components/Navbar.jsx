import "./styles/navbar.css"
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({ theme, handleTheme }) => {
	return (
		<nav className='navbar-container'>
			<section className='navbar-left'>Codealo E-commerce</section>
			<section className='navbar-right'>
				<button className='nav-btn'>
					<FaShoppingCart className='nav-icon' size={"1.4em"} />
				</button>
				<button className='nav-btn' onClick={() => handleTheme()}>
					{theme === false ? (
						<FaSun className='nav-icon' size={"1.4em"} />
					) : (
						<FaMoon className='nav-icon' size={"1.4em"} />
					)}
				</button>
			</section>
		</nav>
	)
}
export default Navbar
