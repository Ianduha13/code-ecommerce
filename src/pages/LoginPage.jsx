import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../features/auth/authSlice"
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
		const isValid = email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)

		if (!isValid) return
		const userData = { email, password }
		dispatch(loginUser(userData))
	}

	return (
		<div className='layout-page'>
			<section className='login-page'>
				<h3 className='login-title'>Login</h3>
				<p className='login-description'>Log in to complete your purchase!</p>
				<form className='login-form' onSubmit={onSubmit}>
					<input
						type='text'
						placeholder='Please put you e-mail here'
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
						Log in!
					</button>
				</form>
			</section>
		</div>
	)
}

export default LoginPage
