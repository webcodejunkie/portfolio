import '../App.css';
import { useLocation } from 'react-router-dom';

import uhOh from '../imgs/uhoh.png';

export default function NotFound() {
  let location = useLocation();

  return (
    <div className='notfound-container'>
      <img src={uhOh} alt="404" className='notfound-avatar' />
      <h1>Uh, oh, this page is not found for {location.pathname}. Please go back.</h1>
    </div>
  )
}