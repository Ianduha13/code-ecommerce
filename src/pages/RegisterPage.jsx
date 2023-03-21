import { useState } from "react"
import { Link } from "react-router-dom"
import useForm from "../hooks/useForm"

const RegisterPage = () => {
	const [formData, setFormData] = useState({})
	const { handleChange, handleSubmit } = useForm({
		formData,
		setFormData,
		form: "register",
	})
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
				<form
					className='flex w-full max-w-[480px] flex-col gap-2'
					onSubmit={handleSubmit}
				>
					{fields.map((x, i) => (
						<input
							key={i}
							name={x.name}
							placeholder={x.placeholder}
							type={x.type}
							onChange={handleChange(x.name)}
							className='h-8 rounded-full bg-purple-900 pl-3'
						/>
					))}
					<button
						type='submit'
						onSubmit={() => onSubmit(e)}
						className='mt-2 h-10 cursor-pointer rounded-full bg-orange-500 text-2xl font-bold'
					>
						Submit!
					</button>
				</form>
			</section>
		</div>
	)
}
export default RegisterPage
