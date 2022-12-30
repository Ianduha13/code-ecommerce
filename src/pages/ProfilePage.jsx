import "./styles/profile.css"
import { getOrders } from "../features/auth/authSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const ProfilePage = ({ user }) => {
	const dispatch = useDispatch()

	return (
		<div className='layout-page'>
			<header className='profile-header'>
				<h1 className='profile-title'>Your Profile:</h1>
				<h3 className='profile-data'>{user.user.username}</h3>
				<h3 className='profile-data'>{user.user.email}</h3>
			</header>
		</div>
	)
}
export default ProfilePage
