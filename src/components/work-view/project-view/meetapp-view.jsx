import '../../../output/css/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import { useNavigate } from 'react-router-dom';

// images
import mobilePreview from '../../../assets/imgs/meetapp-right.png';
import iconJs from '../../../assets/icons/js.png';
import iconReact from '../../../assets/icons/atom.png';
import iconHtml from '../../../assets/icons/html.png';
import iconCss from '../../../assets/icons/css-3.png';
import iconAws from '../../../assets/icons/aws.jpg';
import iconSass from '../../../assets/icons/sass.png';

let icons = [
	iconJs,
	iconReact,
	iconHtml,
	iconCss,
	iconAws,
	iconSass
];

function MeetappView() {
	let navigate = useNavigate();

	function goBack() {
		navigate('/projects');
	}

	return (
		<div>
			<div className="project-content">
				<div className='preview-wrapper'>
					<img className="phone-preview" alt="meetappphonepreview" src={mobilePreview} />
				</div>

				<div className="project-info">
					<div className="project-info-wrapper">
						<h1 className="project-title enlarge-b">Meet App</h1>
						<p className='project-title-des'>
							A serverless, progressive web application (PWA) with React using a Test Driven Development & Behavoir Driven Development. The application uses the Google Calendar API to fetch upcoming events.
						</p>
						<div className='site-container'>
							<a href="https://webcodejunkie.github.io/meet/" target="_blank" rel='noreferrer' className='site-links'>Site</a>
							<a href="https://github.com/webcodejunkie/meet" target="_blank" rel='noreferrer' className='site-links'>Repo</a>
						</div>
					</div>

					<div className="project-info-wrapper tech-col">
						<h2 className="project-title enlarge-s">Technologies</h2>
						<div className="icon-container">
							{
								icons.map((p, i) => {
									return (
										<img src={p} key={i} className="icon" alt="tech-icons" />
									)
								})
							}
						</div>
					</div>

					<div className="project-info-wrapper">
						<h2 className="project-title enlarge-s">Summary</h2>
						<p>
							Instead of using a server to host API calls, this project uses serverless function to make API calls to a google calender API to get events for those who want to know what events are happening in searcable locations.
						</p>
					</div>

					<div className="project-info-wrapper">
						<h2 className="project-title enlarge-s">Job</h2>
						<p>
							My job was to make use of service-workers to have the ability for the app to work offline, create serverless functions to not only require a token through the use of oAuth with Google, then use the token to aquire the authorization to display calender events for users. Lastly, built app a PWA template to provide Mobile Application like features where it's installable.
						</p>
					</div>

					<div className="project-info-wrapper">
						<h2 className="project-title enlarge-s">Challenges</h2>
						<p>
							This application in terms of what I used was apart of the challenges, to understand the use of Google's services. Not only that but the use of Unit, Acceptance, Intergration, and End-To-End testing.
						</p>
					</div>

				</div>
			</div>
			<FontAwesomeIcon className="fa-2xl exit-icon" icon={faCircleXmark} onClick={goBack} />
		</div>
	);
}

export default MeetappView;