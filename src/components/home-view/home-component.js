import '../../output/css/App.css';
import '../../output/css/animations/animations.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// Framer Motion
import { motion } from 'framer-motion';

function Home() {

	return (
		<div className='container'>

			<div className="first-col">
				<motion.div
					whileInView={{ opacity: [0, 1], y: [100, 0] }}
					transition={{ ease: "easeIn" }}
					className='hero-content-container drawDownLine'
				>
					<h1 className='hero--header typerwriter'>/channeling my creativity.</h1>
					<p className='hero--header--content'>
						For as long as I can remember, I've felt that my path relied on my <span style={{ color: 'lime' }}>creativity</span>, Web Development is just a subject of that.
					</p>
					{
						/*
						<div className='button-container'>
							<Link to="/aboutme" className='button-styled'>ABOUT ME</Link>
						</div>
						*/
					}
				</motion.div>
			</div>

			<div className='second-col'>
				<motion.div
					className='second-content-container'
					whileInView={{ opacity: [0, 1], x: [-100, 0] }}
					transition={{ ease: "easeIn" }}
				>
					<h2 className='second--header'>/my story</h2>
					<p>
						My story comes with great ambition, ambition to utilize these feelings to create and invent things that have not been invented.
						My story is one that discovered programming as a teenager.
						Then rediscovering that passion in Northern Essex Community College.
						It's the art behind all the principles that go within Computer Science, that I find my story within.
						Fast forward years later, I want to build on that. To see further growth in Software Development years to come.
					</p>
				</motion.div>
			</div>

			<div className='third-col'>
				<motion.div
					whileInView={{ opacity: [0, 1], x: [100, 0] }}
					transition={{ ease: "easeIn" }}
					className='third-content-container'
				>
					<h2 className='third--header'>/roadmap</h2>
					<p>
						My path is something I took time to uncover, which roads leads where and what I want and how I will achieve that.
						If you want to take a peek into where I'm at in my career roadmap, this is a download of a PDF file that I mapped out.
					</p>
					<div className='roadmap-btn-wrapper'>
						{
							/*
							<a href='' className='cv-button'>
								My Roadmap
							</a>
							*/
						}
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default Home;
