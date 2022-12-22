import "./styles/footer.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"
const Footer = () => {
	return (
		<footer className='footer-container'>
			<section className='footer-left'>Ian Duhamel 2022 </section>
			<section className='footer-right'>
				<FaGithub className='footer-icon' size={"1.4em"} />
				<FaLinkedin className='footer-icon' size={"1.4em"} />
			</section>
		</footer>
	)
}
export default Footer
