import "./styles/navbar.css"
import { FaSignOutAlt, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import { useEffect, useState } from "react"
import BubbleCounter from "./BubbleCounter"
import { resetCart } from "../features/cart/cartSlice"

const Navbar = ({ theme, handleTheme, user }) => {
	const [userLog, setUserLog] = useState()
	const dispatch = useDispatch()
	const handleLogout = () => {
		dispatch(logout())
		dispatch(resetCart())
	}
	useEffect(() => {
		setUserLog(user)
	}, [user])
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
				{!userLog ? (
					<>
						<NavLink className='nav-btn link' to='/login'>
							Login
						</NavLink>
						<NavLink className='nav-btn link-highlight' to='/register'>
							Register
						</NavLink>
						<button className='nav-btn' onClick={() => handleTheme()}>
							{theme === false ? (
								<FaSun className='nav-icon' size={"1.4em"} />
							) : (
								<FaMoon className='nav-icon' size={"1.4em"} />
							)}
						</button>
					</>
				) : (
					<>
						<NavLink className='nav-btn link' to='/me'>
							Profile
						</NavLink>
						<NavLink className='nav-btn' to='/checkout'>
							<FaShoppingCart className='nav-icon' size={"1.4em"} />
						</NavLink>
						<BubbleCounter />
						<button className='nav-btn' onClick={() => handleTheme()}>
							{theme === false ? (
								<FaSun className='nav-icon' size={"1.4em"} />
							) : (
								<FaMoon className='nav-icon' size={"1.4em"} />
							)}
						</button>
						<button className='nav-btn ' onClick={handleLogout}>
							<FaSignOutAlt className='nav-icon' size={"1.4em"} />
						</button>
					</>
				)}
			</section>
		</nav>
	)
}
export default Navbar
