import '../css/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import { useNavigate } from 'react-router-dom';

// images
import mobilePreview from '../../../imgs/chitchat-phone.png';
import iconJs from '../../../imgs/icons/js.png';
import iconReact from '../../../imgs/icons/atom.png';
import iconHtml from '../../../imgs/icons/html.png';
import iconCss from '../../../imgs/icons/css-3.png';

let icons = [
  iconJs,
  iconReact,
  iconHtml,
  iconCss,
];

function ChitChatView() {
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
            <h1 className="project-title enlarge-b">ChitChat</h1>
            <p className='project-title-des'>
              Messaging application built with React Native.
            </p>
            <div className='site-container'>
              <a href="https://github.com/webcodejunkie/chitchat" target="_blank" rel='noreferrer' className='site-links'>Repo</a>
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
              Messaging application built with React-Native, Expo, Gifted-Chat Library. It only uses Google Firebase as it's Database but also as it's storage for users to send photos from their camera roll and pins users location.
            </p>
          </div>

          <div className="project-info-wrapper">
            <h2 className="project-title enlarge-s">Job</h2>
            <p>
              Using the gifted chat library to aid me in the UI of the application but also set up a Google Firebase database to store the information on messages. also give the project features such as offline use where messages are saved in localStorage but syncs up when back online.
            </p>
          </div>

          <div className="project-info-wrapper">
            <h2 className="project-title enlarge-s">Challenges</h2>
            <p>
              React-Native's styling was a bit different in terms of positioning, took me a bit to understand, I have a good grasp on CSS but React-Native was a tad bit different.
            </p>
          </div>

        </div>
      </div>
      <FontAwesomeIcon className="fa-2xl exit-icon" icon={faCircleXmark} onClick={goBack} />
    </div>
  );
}

export default ChitChatView;