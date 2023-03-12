import '../../output/css/about.css';
//images
import avatar from '../../assets/imgs/avatar.png';
// framer motion
import { motion } from 'framer-motion';

export default function AboutView() {
	return (
		<div className='about-container'>
			<motion.div
				animate={{ opacity: [0, 1] }}
				className="about-avatar-wrapper"
			>
				<img src={avatar} className="about-avatar" alt="developer" />
			</motion.div>
			<div className='about-header-content'>
				<motion.div
					animate={{ y: [100, 0], opacity: [0, 1] }}
				>
					<div>
						<h1 className='about-header'>/about me</h1>
						<p>
							Hello! the name is Rafael J Rios, Software Developer from Haverhill, Massachusetts from the USA.
							Who loves anything that allows them to express themself. They are a big fan of cinematogrophy, photography, music, video game development, software development and many more things.
							But more then that, apart from developing creatively, they find time to listen to lectures from philosphers to gain a bigger understanding on a intellectual way.

						</p>
					</div>
					<div>
						<h1 className='about-header'>/skills</h1>
						<p>
							Earning a certification of completion from a coding boot-camp "CareerFoundry" for Full-Stack Web Development.
						</p>
						<p className='small-text'>
							Many past skills from the customer service industry included understanding the needs of others and to seek solutions
							for every problem. Working as a team, understanding working efficently with great communication and understanding
							for colleagues.
						</p>
						<div>
							<h3 className='h3-header'>/front-end</h3>
							<p>
								HTML, CSS, Javascript, ReactJS, React Native, AngularJS, NextJS
							</p>
						</div>
						<div>
							<h3 className='h3-header'>/back-end</h3>
							<p>NodeJS, Express, MongoDB, NoSQL</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}