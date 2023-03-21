import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { validationError, registerUser } from "../features/auth/authSlice"

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
	const fields = [
		{
			type: "text",
			name: "name",
			placeholder: "Enter your name",
		},
		{
			type: "text",
			name: "email",
			placeholder: "Your email example@gmail.com",
		},
		{
			type: "password",
			name: "password",
			placeholder: "Enter your password",
		},
		{
			type: "password",
			name: "password1",
			placeholder: "Repeat your password",
		},
	]
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
			<section className='mt-20 flex h-3/5 w-full flex-col items-center'>
				<header className='pb-3 text-center text-xl'>
					<h3 className='text-4xl font-bold'>Register</h3>
					Please, complete this form to register on our page
					<p className='pt-1 text-xl'>
						Do you already have an account?
						<Link to='/login' className='text-xl text-orange-500'>
							{` Go to Login Page`}
						</Link>
					</p>
				</header>
				<form className='register-form' onSubmit={onSubmit}>
					{fields.map((x) => (
						<input
							name={x.name}
							placeholder={x.placeholder}
							type={x.type}
							onChange={onChange}
							className='h-8 rounded-full bg-purple-900 pl-3'
						/>
					))}
					<button
						type='submit'
						onSubmit={() => onSubmit(e)}
						className='h-10 cursor-pointer rounded-full bg-orange-500 text-2xl font-bold'
					>
						Submit!
					</button>
				</form>
			</section>
		</div>
	)
}
export default RegisterPage
