import '../../../output/css/App.css';
import '../../../output/css/work.css';
import { Link } from 'react-router-dom';


function Work() {

	return (
		<div>
			<section className="work-wrapper">
				<div className="project-coll">
					<Link to="/projects/skullify">
						<div className="project-card skullify-card">
						</div>
					</Link>

					<Link to="/projects/meetapp">
						<div className="project-card meetapp-card">
						</div>
					</Link>

					<Link to="/projects/chitchat">
						<div className="project-card chitchat-card">
						</div>
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Work;