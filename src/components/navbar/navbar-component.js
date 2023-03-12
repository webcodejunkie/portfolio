import '../../output/css/App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Framer Motion
import { motion } from 'framer-motion';
// Font Awesome Icons
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// CV
import CV from '../../assets/download/rafaeljriosCV.pdf';

function Navbar() {

	const [closed, setIsClosed] = useState(false);

	useEffect(() => {
		isClosed();
	}, [closed])


	const variants = {
		visible: {
			x: [300, 0],
			opacity: 1
		},
		hidden: {
			x: [300, 0],
			opacity: 0
		}
	}

	// Handle sidebar from scrolling
	const isClosed = () => {
		if (closed) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}

	return (
		<nav className="nav-wrapper">
			<div className="nav-brand">
				<h1>/rafael j.</h1>
			</div>
			<div className='nav-ham'>
				<FontAwesomeIcon
					className='ham-icon'
					icon={faBars}
					onClick={() => { setIsClosed(true) }}
				/>
				{
					closed && (
						<motion.div
							className='nav-overlay'
							variants={variants}
							initial="hidden"
							animate="visible"
							transition={{ type: "spring", stiffness: 100 }}
						>
							<ul className="nav-item">
								<li className="nav-link" onClick={() => { setIsClosed(false) }}><Link to="/">/home</Link></li>
								<li className="nav-link" onClick={() => { setIsClosed(false) }}><Link to="/aboutme">/about me</Link></li>
								<li className="nav-link" onClick={() => { setIsClosed(false) }}><Link to="/projects">/projects</Link></li>
								<li className="nav-link" onClick={() => { setIsClosed(false) }} ><Link to="/contact">/contact</Link></li>
								<li className="cv-button" onClick={() => { setIsClosed(false) }}>
									<a href={CV} download>My CV</a>
								</li>
							</ul>
							<FontAwesomeIcon
								className='close-overlay'
								icon={faCircleXmark}
								onClick={() => { setIsClosed(false) }}
							/>
						</motion.div>
					)
				}
			</div>
		</nav>
	)
}

export default Navbar;