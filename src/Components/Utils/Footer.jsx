import React from 'react';
import styles from './Footer.module.css';
import LogoFooter from '../../Assets/logo_footer.svg?react';
import ArrowRightFooter from '../../Assets/arrow_right_footer.svg?react';
import WhatsAppIcon from '../../Assets/whatsapp_icon.svg?react';
import InstagramIcon from '../../Assets/instagram_icon.svg?react';
import TwitterIcon from '../../Assets/twitter_icon.svg?react';

import { Link } from 'react-router-dom';
import Label from './Label';
import Divider from './Divider';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <LogoFooter />
      <div className={styles.linkGroup}>
        <Link className={styles.link}>
          Hospitality
          <ArrowRightFooter />
        </Link>
        <Link className={styles.link}>
          Piawood
          <ArrowRightFooter />
        </Link>
        <Link className={styles.link}>
          Yellow Filme
          <ArrowRightFooter />
        </Link>
        <Link className={styles.link}>
          Informações
          <ArrowRightFooter />
        </Link>
      </div>
      <div className={styles.labelGroup}>
        <Label
          label="WhatsApp"
          type="yellowWhite"
          icon={WhatsAppIcon}
          size="small"
          border="square"
          clickable="clickable"
        />
        <Label
          label="Instagram"
          type="yellowWhite"
          icon={InstagramIcon}
          size="small"
          border="square"
          clickable="clickable"
        />
        <Label
          label="Twitter"
          type="yellowWhite"
          icon={TwitterIcon}
          size="small"
          border="square"
          clickable="clickable"
        />
      </div>
    </div>
  );
};

export default Footer;
