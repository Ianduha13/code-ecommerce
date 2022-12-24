import "./styles/navbar.css"
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Navbar = ({ theme, handleTheme }) => {
	return (
		<nav className='navbar-container'>
			<section className='navbar-left'>
				<NavLink className='link-title' to='/'>
					Codealo E-commerce
				</NavLink>
			</section>
			<section className='navbar-right'>
				<NavLink className='nav-btn link' to='/products'>
					Products
				</NavLink>

				<NavLink className='nav-btn' to='/checkout'>
					<FaShoppingCart className='nav-icon' size={"1.4em"} />
				</NavLink>
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
