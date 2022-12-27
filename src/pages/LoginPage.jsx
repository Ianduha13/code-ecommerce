import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../features/authSlice"
import "./styles/login.css"
const LoginPage = () => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const { email, password } = formData

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	const onSubmit = (e) => {
		e.preventDefault()
		const userData = { email, password }
		dispatch(loginUser(userData))
	}

	return (
		<div className='layout-page'>
			<section className='login-page'>
				<h3 className='login-title'>Login</h3>
				<form className='login-form' onSubmit={onSubmit}>
					<input
						type='text'
						placeholder='Your email example@gmail.com'
						className='login-input'
						name='email'
						onChange={onChange}
					/>
					<input
						type='password'
						placeholder='Enter your password'
						className='login-input'
						name='password'
						onChange={onChange}
					/>
					<button type='submit' className='submit-btn'>
						Submit!
					</button>
				</form>
			</section>
		</div>
	)
}

export default LoginPage
