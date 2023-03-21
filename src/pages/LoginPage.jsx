import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "../features/auth/authSlice"

const LoginPage = () => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
	const { email, password } = formData
	const fields = [
		{
			type: "text",
			name: "email",
			placeholder: "Enter your email",
		},
		{
			type: "password",
			name: "password",
			placeholder: "Enter your password",
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

		if (!isValid) return
		const userData = { email, password }
		dispatch(loginUser(userData))
	}

	return (
		<div className='layout-page'>
			<section className='mt-20 flex h-3/5 w-full flex-col items-center'>
				<header className='pb-3 text-center text-xl'>
					<h3 className='text-4xl font-bold'>Login</h3>
					Log in to complete your purchase!
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
						Log in!
					</button>
				</form>
			</section>
		</div>
	)
}

export default LoginPage
