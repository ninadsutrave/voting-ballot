import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="copyright">
            <p>© Pehchaan Ek Safar - 2023</p>
            <p>Developed by <a className="portfolio-link" href="https://ninadsutrave.in" target="_blank" rel="noopener noreferrer">Ninad Sutrave</a></p>
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