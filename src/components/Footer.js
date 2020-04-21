import React from 'react';
import footer from '../../footerLinks'
import Logo from '../images/sensenet-footerlogo.png'
import './styles.css';

const Footer = () => {
  return(
  <div className="Footer">
    <div className="FooterLogo">
    <a href='/'>
        <img className="img-responsive displayInline" src={Logo} alt={'logo'} />
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
