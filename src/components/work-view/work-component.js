import '../../App.css';
import './css/work.css';
import { Link } from 'react-router-dom';


function Work() {

  return (
    <div className="work-wrapper">
      <section>
        <div className="work-header">
          <h1 className="header">Case Studies</h1>
          <p>
            These continuous projects showcase my knowledge for React and React-Native applications. While React isn't the only framework I'm interested in, it's one that I love to use in my applications.
          </p>
        </div>
      </section>

      <section>
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