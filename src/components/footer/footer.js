import '../../output/css/footer.css';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className='footer-wrapper'>
			<div className='footer'>
				<div className='footer-brand'>
					<h1>
						/expand the creativity
					</h1>
					<div className='footer-text'>
						<p className='small-text'>Haverhill, MA, USA</p>
						<p className='small-text'>
							<a
								href="mailto: rafaeljrios25@gmail.com"
								className='footer-mail'
							>rafaeljrios25@gmail.com</a>
						</p>
					</div>
					<div className='footer-social-icons'>
						<a
							href="https://www.linkedin.com/in/rafael-j-rios/"
							target="_blank"
							rel="noreferrer"
							className='footer-icon'
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<a
							href="https://twitter.com/rrdevelops"
							target="_blank"
							rel="noreferrer"
							className='footer-icon'
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</div>
				</div>
				<div className='footer-links-wrapper'>
					<div>
						<h5 className='footer-head-header'>creativity</h5>
						<Link className='footer-links' to="/projects">/projects</Link>
					</div>
					<div>
						<h5 className='footer-head-header'>resources</h5>
						<Link className='footer-links' to="/blog">/blog</Link>
					</div>
				</div>
			</div>
			<div className='footer-end'>

			</div>
		</div>
	)

}