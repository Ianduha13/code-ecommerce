import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { validationError, registerUser } from "../features/auth/authSlice"
import "./styles/register.css"

const RegisterPage = () => {
	const navigate = useNavigate()
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
		const isValid = email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)

		if (!isValid) return dispatch(validationError("Email isnt correct"))
		if (password !== password1) {
			return dispatch(validationError("Password do not match"))
		}
		const userData = { name, email, password }
		dispatch(registerUser(userData)).then(navigate("/"))
	}

	return (
		<div className='layout-page'>
			<section className='register-page'>
				<header className='register-header'>
					<h3 className='register-title'>Register</h3>
					Please, complete this form to register on our page
					<p className='redirect'>
					Do you already have an account? Go to
					<Link to='/login' className='login-link'>
					Login Page
					</Link>
				</p>
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
