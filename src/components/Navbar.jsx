import { FaSignOutAlt, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"
import { useEffect, useState } from "react"
import BubbleCounter from "./BubbleCounter"
import { resetCart } from "../features/cart/cartSlice"
import useAlert from "../hooks/useAlert"

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
		<nav className='fixed z-10 flex h-14 w-screen items-center justify-between border-b border-purple-600 bg-purple-900 px-4 sm:px-14'>
			<NavLink
				className='cursor-pointer text-lg font-bold text-white sm:text-2xl'
				to='/'
			>
				Codealo E-commerce
			</NavLink>
			<section className='flex items-center'>
				<NavLink className='nav-btn' to='/products'>
					Products
				</NavLink>
				{!userLog ? (
					<>
						<NavLink className=' nav-btn' to='/login'>
							Login
						</NavLink>
						<NavLink
							className='nav-btn bg-orange-500 py-1 px-2  hover:bg-orange-300 hover:bg-opacity-20'
							to='/register'
						>
							Register
						</NavLink>
						{/* <button
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center  sm:text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							onClick={() => handleTheme()}
						>
							{theme === false ? (
								<FaSun color='#fff' size={"1.4em"} />
							) : (
								<FaMoon color='#000' size={"1.4em"} />
							)}
						</button> */}
						<NavLink className=' nav-btn' to='/checkout'>
							<FaShoppingCart
								color='#fff'
								size={"1.4em"}
								onClick={() => useAlert("Please login to go to cart", "error")}
							/>
						</NavLink>
						<BubbleCounter />
					</>
				) : (
					<>
						<NavLink className=' nav-btn' to='/me'>
							Profile
						</NavLink>
						{/* <button
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center  sm:text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							onClick={() => handleTheme()}
						>
							{theme === false ? (
								<FaSun color='#fff' size={"1.4em"} />
							) : (
								<FaMoon color='#000' size={"1.4em"} />
							)}
						</button> */}
						<button className=' nav-btn' onClick={handleLogout}>
							<FaSignOutAlt color='#fff' size={"1.4em"} />
						</button>
						<NavLink className=' nav-btn' to='/checkout'>
							<FaShoppingCart color='#fff' size={"1.4em"} />
						</NavLink>
						<BubbleCounter />
					</>
				)}
			</section>
		</nav>
	)
}
export default Navbar
