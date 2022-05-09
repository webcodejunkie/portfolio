import '../../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <h1>
          SOCIALS
        </h1>
        <p>
          These are my socials, if you would like to connect there, please do!
        </p>
        <div className="social-btns">
          <a className="sbtns" href="https://www.linkedin.com/in/rafael-j-rios/" target="_blank" rel='noreferrer'><FontAwesomeIcon className="fa-1xl" icon={faLinkedin} /></a>
          <a className="sbtns" href="https://twitter.com/n0d3_22"><FontAwesomeIcon className="fa-1xl" icon={faTwitter} /></a>
        </div>
      </div>
      <div className="footer-container" id="contact">
        <h2>If you would like to get ahold of me, just go ahead and fill this out!</h2>
        <div className="social-links">

          <div className="email-icon">
            <div>
              <FontAwesomeIcon className="fa-1xl" icon={solid('envelope')} />
            </div>
            <p>webcodejunkie@gmail.com</p>
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
    </div>
  )
}

export default Contact;