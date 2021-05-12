import React from 'react';
import footer from '../../footerLinks'
import Logo from '../images/sensenet-footerlogo.png'
import './styles.css';
import config from '../../config.js';

const Footer = () => {
  return(
  <div className="Footer">
    <div className="FooterLogo">
    <a href='/'>
        <img className="img-responsive displayInline" src={Logo} alt={config.siteMetadata.title} />
    </a>
    </div>
    <div className="FooterMenu">
      <ul>
        {footer.map((item, index) =>
        <li key={`footerlink-${index}`}>
          <a href={item.link}>{item.title}</a>
        </li>
        )}
        <li className="registerButton">
          <a href="https://profile.sensenet.com/?redirectToLogin" target="_blank">Get your repo</a>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Footer;
