import React, {useContext} from 'react'
import { GlobalContext } from './utils/global.context';
import DhLogo from '../img/DH.png'
import FacebookIcon from '../img/ico-facebook.png';
import InstagramIcon from '../img/ico-instagram.png';
import TikTokIcon from '../img/ico-tiktok.png';
import WhatsAppIcon from '../img/ico-whatsapp.png';

const Footer = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <footer className={theme === 'dark' ? 'dark' : ''}>
      <p>Powered by</p>
      <img src={DhLogo} alt='DH-logo' />
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={TikTokIcon} alt="TikTok" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img src={WhatsAppIcon} alt="WhatsApp" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
