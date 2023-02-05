import { useState } from "react";
import logo from '../assets/logo.png';
import "./Navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="https://www.iitrpr.ac.in/pehchaanes/" className="brand" target="_blank" rel="noopener noreferrer">
        <img className="logo" alt="Pehchaan Logo" src={logo} />
        <p className="brand-name">Pehchaan Ek Safar</p>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Guidelines</a>
          </li>
          <li>
            <a href="/about">Vote Now!</a>
          </li>
          <li>
            <a href="/contact">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
