import React from 'react';
import footer from '../../footerLinks'
import Logo from '../images/sensenet-logo-horizontal-whiteblue.svg'
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
      </ul>
    </div>
  </div>
  )
}

export default Footer;
