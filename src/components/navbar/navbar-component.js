import '../../App.css';
import { Link } from 'react-router-dom';
import logoV from '../../imgs/brandlogo.mp4';

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-brand">
        <video autoPlay loop muted className="logo">
          <source src={logoV} />
        </video>
      </div>
      <ul className="nav-item">
        <li className="nav-link"><Link to="/">Home</Link></li>
        <li className="nav-link"><Link to="/projects">Case Studies</Link></li>
        <li className="nav-link"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;