import React from 'react';
import logo from '../Assets/images/testpage_logo.svg'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img className="site-logo" alt="site-logo" src={logo}></img>
        <nav className="main-nav">
          <ul>
            <li>
              <a className="projects" href="#">Projects</a>
              <ul className="dropdown">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
                <li><a href="#">Link 5</a></li>
              </ul>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;