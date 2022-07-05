import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import pf from '../../imgs/pf.jpg';

function Home() {
  return (
    <div>
      <div className="first-col">
        <div className="content-wrapper">
          <div className="p-content">
            <div className="welcome-header">
              <div>
                <div className="greeting-wrapper">
                  <h1>
                    <span className="small-text small-caps">Hello 👋,</span>
                    <span className="small-caps">My name is</span>
                    <span className="small-caps highlighter">Rafael J</span>
                  </h1>
                  <div className="avatar-frame">
                    <img className="avatar-image" alt="" src={pf} />
                  </div>
                </div>
                <div>
                  <h2>Skills</h2>
                  <ul className="skills-set">
                    <div>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </div>
                    <div>
                      <li>React</li>
                      <li>NextJS</li>
                      <li>Angular</li>
                    </div>
                    <div>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                    </div>
                  </ul>
                </div>
                <p>
                  Greetings from Haverhill, MA, USA.
                  I knew I wanted to be a programmer since the day I first heard of it,
                  reverse engineering as a kid taught me the beauty of putting things back together,
                  to build is what I want to do for you and myself.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <main className="container">

        <div className="second-col">
          <div className="secondc-wrapper">
            <div className="wrapper-header">
              <h1>My Goals</h1>
            </div>
            <div className="secondp-content">
              <p>
                My goal is further continue learning software development and apply the different technologies I learn to my peronal endeavors but also to advance my knowledge.
                I would love to work in a company that recognizes the pursuit of education and understands the process.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="third-col">
          <div className="thirdc-wrapper">
            <div className="wrapper-header">
              <h1>What's next?</h1>
            </div>
            <div>
              <h2 className="s-header">Tether</h2>
              <p className="pthree-content">
                Tether is a social platform catered towards the gaming industry. Pairing up players in need of a player two, this is a project currently being worked
                on from the it's structure to the overall inner workings, more updates soon!
              </p>
            </div>
            <div>
              <h2 className="s-header">Continuious Learning</h2>
              <p>
                It doesn't just stop at one langauge or framework, I'm constantly looking to apply new technologies to my toolbelt, so you can expect a constant growth with what's new today.
              </p>
            </div>
          </div>
        </div>

      </main>

      <section>
        <div className="ws-skills-wrapper">
          <div className="col-one-bg">
            <h2>Front-End</h2>
            <FontAwesomeIcon className="fa-2xl" icon={solid('compass-drafting')} />
            <p>
              JavaScript, HTML, CSS, and React is what I use to create Single-Page-Applications or Progressive-Web-Applications.
            </p>
          </div>
          <div className="col-two-bg">
            <h2>Back-End</h2>
            <FontAwesomeIcon className="fa-2xl" icon={solid('code')} />
            <p>
              Building from the ground up applying MongoDB, NodeJs, and Express to the back-end scope of projects.
            </p>
          </div>
          <div className="col-three-bg">
            <h2>Technologies</h2>
            <FontAwesomeIcon className="fa-2xl" icon={solid('lines-leaning')} />
            <p>
              Staying out of the loop when new things comes out, leaves room to not advance technologies,
              that's why always staying connected to what's happening is a must.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="gh-section">
          <h1>View my code!</h1>
          <a className="ser-button" href="https://github.com/webcodejunkie" target="_blank" rel='noreferrer'>GitHub</a>
        </div>
      </section>

      <section>
        <div className="footer-container" id="contact">
          <h2>If you would like to get ahold of me, just go ahead and fill this out!</h2>
          <div className="social-links">

            <div className="email-icon">
              <div>
                <FontAwesomeIcon className="fa-1xl" icon={solid('envelope')} />
              </div>
              <a href="mailto: rafaeljrios25@gmail.com" className="email-link">rafaeljrios25@gmail.com</a>
            </div>
          </div>
          <div className="contact-container">
            <form id="form_card" method="post" action="https://formspree.io/f/xknkjrra">
              <label htmlFor="email">Email</label>
              <input className="inputs" type="email" id="email" name="_replyto" placeholder="Email " required="@" />

              <label htmlFor="tel-num">Telephone</label>
              <input className="inputs" type="tel" id="tel-num" name="_telephone" placeholder="Phone-number"
                pattern="\d{3}[\-]\d{3}[\-]\d{4}" />

              <label htmlFor="message">Message</label>
              <textarea className="inputs" rows="5" cols="40" id="message" name="_message" placeholder="Your message" maxLength="320"
                required></textarea>

              <button className="submit-btn" type="submit" defaultValue="Send message">Submit</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
