import { useState } from "react"
import { useDispatch } from "react-redux"
import { redirect } from "react-router-dom"
import { validationError, registerUser } from "../features/authSlice"
import "./styles/register.css"
const RegisterPage = () => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password1: "",
	})
	const { name, email, password, password1 } = formData

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	const onSubmit = (e) => {
		e.preventDefault()
		if (password !== password1) {
			return dispatch(validationError("Password do not match"))
		}
		const userData = { name, email, password }
		dispatch(registerUser(userData))
		redirect("/")
	}

	return (
		<div className='layout-page'>
			<section className='register-page'>
				<header className='register-header'>
					<h3 className='register-title'>Register</h3>
					Please, complete this form to register on our page
				</header>
				<form className='register-form' onSubmit={onSubmit}>
					<input
						type='text'
						name='name'
						onChange={onChange}
						placeholder='Enter your name'
						className='register-input'
					/>
					<input
						type='text'
						placeholder='Your email example@gmail.com'
						className='register-input'
						name='email'
						onChange={onChange}
					/>
					<input
						type='password'
						placeholder='Enter your password'
						className='register-input'
						name='password'
						onChange={onChange}
					/>

					<input
						type='password'
						className='register-input'
						placeholder='Please confirm your password'
						name='password1'
						onChange={onChange}
					/>
					<button
						type='submit'
						onSubmit={() => onSubmit(e)}
						className='submit-btn'
					>
						Submit!
					</button>
				</form>
			</section>
		</div>
	)
}
export default RegisterPage
