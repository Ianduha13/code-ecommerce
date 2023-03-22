import { useState } from "react"
import useForm from "../hooks/useForm"

const LoginPage = () => {
	const [formData, setFormData] = useState({})
	const { handleChange, handleSubmit } = useForm({
		formData,
		setFormData,
		form: "login",
	})
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
	return (
		<div className='layout-page'>
			<section className='mt-20 flex h-3/5 w-full flex-col items-center'>
				<header className='pb-3 text-center text-xl'>
					<h3 className='text-4xl font-bold'>Login</h3>
					Log in to complete your purchase!
				</header>
				<form
					className='flex w-full max-w-[480px] flex-col gap-4'
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
