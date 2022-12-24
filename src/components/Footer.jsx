import "./styles/footer.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"
const Footer = () => {
	return (
		<footer className='footer-container'>
			<section className='footer-left'>
				<a
					target='__blank'
					href='https://my-portfolio-ianduhamel.vercel.app/'
					className='portfolio-link'
				>
					Ian Duhamel 2022
				</a>
			</section>

			<section className='footer-right'>
				<a target='__blank' href='https://github.com/Ianduha13'>
					<FaGithub className='footer-icon' size={"1.4em"} />
				</a>
				<a target='__blank' href='https://www.linkedin.com/in/ian-duhamel/'>
					<FaLinkedin className='footer-icon' size={"1.4em"} />
				</a>
			</section>
		</footer>
	)
}
export default Footer
