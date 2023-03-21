import { getOrders } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const ProfilePage = ({ user }) => {
	const dispatch = useDispatch()

	return (
		<div className='layout-page justify-center'>
			<header className='flex flex-col items-center'>
				<h1 className='text-4xl font-bold'>Your Profile:</h1>
				<h3 className='text-4xl font-light'>{user.user.username}</h3>
				<h3 className='text-4xl font-light'>{user.user.email}</h3>
			</header>
		</div>
	)
}
export default ProfilePage
