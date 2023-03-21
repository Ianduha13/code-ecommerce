import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
	return (
		<footer className='flex h-14 w-4/5 max-w-5xl items-center justify-between rounded-t-md border border-b-0 border-purple-600 bg-purple-900 px-8 '>
			<section className='flex h-8 cursor-pointer items-center'>
				<a
					target='__blank'
					href='https://ianduhamel.vercel.app/'
					className='border-b font-bold text-white '
				>
					Ian Duhamel 2022
				</a>
			</section>

			<section className='flex items-center'>
				<a target='__blank' href='https://github.com/Ianduha13'>
					<FaGithub className='ml-2' size={"1.4em"} />
				</a>
				<a target='__blank' href='https://www.linkedin.com/in/ian-duhamel/'>
					<FaLinkedin className='ml-2' size={"1.4em"} />
				</a>
			</section>
		</footer>
	)
}

export default Footer
