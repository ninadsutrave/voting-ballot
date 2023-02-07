import React from 'react';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import linkedin from '../assets/linkedin.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="copyright">
            <p>© Pehchaan Ek Safar - 2023</p>
            <p>Developed by <a className="portfolio-link" href="https://ninadsutrave.in" target="_blank" rel="noopener noreferrer">Ninad Sutrave</a></p>
        </div>
        <div className="social-media">
          <p>Follow us on</p>
          <p className="social-media-icons">
            <a href="https://twitter.com/pehchaanes" target="_blank" rel="noopener noreferrer">
              <img className="icon" alt="Twitter icon" src={twitter}/>
            </a>

            <a href="https://www.facebook.com/PehchaanIITRopar/" target="_blank" rel="noopener noreferrer">
              <img className="icon" alt="Facebook icon" src={facebook}/>
            </a>

            <a href="https://www.instagram.com/pehchaan_ek_safar_iitrpr/" target="_blank" rel="noopener noreferrer">
              <img className="icon" alt="Instagram icon" src={instagram}/>
            </a>

            <a href="https://www.youtube.com/channel/UCoHYRiiJA8feit1mHY3L4Yw" target="_blank" rel="noopener noreferrer">
              <img className="icon youtube-icon" alt="Youtube icon" src={youtube}/>
            </a>

            <a href="https://www.linkedin.com/company/pehchaan-ek-safar/" target="_blank" rel="noopener noreferrer">
              <img className="icon" alt="LinkedIn icon" src={linkedin}/>
            </a>
          </p>
        </div>
        <ul className="links">
          <li>
            <a className="link" href="https://www.iitrpr.ac.in/pehchaanes/images/Social_Media_Policy.pdf" target="_blank" rel="noopener noreferrer">Social Media Policy</a>
          </li>
          <li>
            <a className="link" href="https://www.iitrpr.ac.in/pehchaanes/images/Child_Protection_Policy.pdf" target="_blank" rel="noopener noreferrer">Child Protection Policy</a>
          </li>
          <li>
            <a className="link" href="https://iitrpr.ac.in/pehchaanes/images/privacyPolicy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </li>
          <li>
            <a className="link" href="https://iitrpr.ac.in/pehchaanes/images/tc.pdf" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </li>
        </ul>
    </div>
  )
}

export default Footer