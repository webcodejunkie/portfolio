import '../css/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { useNavigate } from 'react-router-dom';

// images
import mobilePreview from '../../../imgs/skullify-phone-transparent.png';
import iconJs from '../../../imgs/icons/js.png';
import iconReact from '../../../imgs/icons/atom.png';
import iconHtml from '../../../imgs/icons/html.png';
import iconCss from '../../../imgs/icons/css-3.png';
import iconSass from '../../../imgs/icons/sass.png';
import iconNode from '../../../imgs/icons/node-js.png';
import iconMongo from '../../../imgs/icons/mongo.png';

let icons = [
  iconJs,
  iconReact,
  iconHtml,
  iconCss,
  iconSass,
  iconNode,
  iconMongo
];

function SkullifyView() {
  let navigate = useNavigate();

  function goBack() {
    navigate('/projects');
  }

  return (
    <div>
      <div className="project-content">
        <div>
          <img className="phone-preview" alt="skullifyphonepreview" src={mobilePreview} />
        </div>

        <div className="project-info">
          <div className="project-info-wrapper">
            <h1 className="project-title enlarge-b">Skullify</h1>
            <p>
              Using React, built the client-side for an application called Skullify based on its existing server-side code (MovieAPI)
            </p>
            <div className='site-container'>
              <a href="https://skullify.netlify.app/" target="_blank" rel='noreferrer' className='site-links'>Site</a>
              <a href="https://github.com/webcodejunkie/skullify-client" target="_blank" rel='noreferrer' className='site-links'>Repo</a>
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
              This project is the front-end addition to my other project MovieAPI using React to build the front-end of the application for signing up users to see horror movies.
            </p>
          </div>

          <div className="project-info-wrapper">
            <h2 className="project-title enlarge-s">Job</h2>
            <p>
              My job was to create the user-flow of the application and design, an entire Fullstack job. The job also included the use of not only React but React-Redux to manage data through the application.
            </p>
          </div>

          <div className="project-info-wrapper">
            <h2 className="project-title enlarge-s">Challenges</h2>
            <p>
              The challenges faced to be understanding with how deeply API's work and what it takes to hook up a framework to an API.
            </p>
          </div>

        </div>
      </div>
      <FontAwesomeIcon className="fa-2xl xcpointer" icon={solid('angle-left')} onClick={goBack} />
    </div>
  );
}

export default SkullifyView;