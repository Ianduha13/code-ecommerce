import "./styles/profile.css"
import { getOrders } from "../features/authSlice"
import { useDispatch } from "react-redux"

const ProfilePage = ({ user }) => {
	const dispatch = useDispatch()
	const orders = dispatch(getOrders())

	console.log(orders)
	return (
		<div className='layout-page'>
			<header className='profile-header'>
				<h1 className='profile-title'>Your Profile:</h1>
				<h3 className='profile-data'>{user.username}</h3>
				<h3 className='profile-data'>{user.email}</h3>
			</header>
		</div>
	)
}
export default ProfilePage
