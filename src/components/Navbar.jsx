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
		<nav className='fixed z-10 flex h-14 w-screen items-center justify-between bg-purple-900 px-14'>
			<NavLink className='cursor-pointer text-2xl font-bold text-white' to='/'>
				Codealo E-commerce
			</NavLink>
			<section className='flex items-center'>
				<NavLink
					className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
					to='/products'
				>
					Products
				</NavLink>
				{!userLog ? (
					<>
						<NavLink
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							to='/login'
						>
							Login
						</NavLink>
						<NavLink
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-orange-500 p-1 text-center text-xl font-medium hover:bg-orange-300 hover:bg-opacity-20'
							to='/register'
						>
							Register
						</NavLink>
						<button
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							onClick={() => handleTheme()}
						>
							{theme === false ? (
								<FaSun color='#fff' size={"1.4em"} />
							) : (
								<FaMoon color='#000' size={"1.4em"} />
							)}
						</button>
					</>
				) : (
					<>
						<NavLink
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							to='/me'
						>
							Profile
						</NavLink>
						<NavLink
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							to='/checkout'
						>
							<FaShoppingCart color='#fff' size={"1.4em"} />
						</NavLink>
						<BubbleCounter />
						<button
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							onClick={() => handleTheme()}
						>
							{theme === false ? (
								<FaSun color='#fff' size={"1.4em"} />
							) : (
								<FaMoon color='#000' size={"1.4em"} />
							)}
						</button>
						<button
							className='mr-2 flex cursor-pointer items-center justify-center rounded-md bg-transparent p-1 text-center text-xl font-medium hover:bg-slate-300 hover:bg-opacity-20'
							onClick={handleLogout}
						>
							<FaSignOutAlt color='#fff' size={"1.4em"} />
						</button>
					</>
				)}
			</section>
		</nav>
	)
}
export default Navbar
