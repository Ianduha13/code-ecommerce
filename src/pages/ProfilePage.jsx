import "./styles/profile.css"

const ProfilePage = ({ user }) => {
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
