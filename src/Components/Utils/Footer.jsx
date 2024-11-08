import React from 'react';
import styles from './Footer.module.css';
import LogoFooter from '../../Assets/logo_footer.svg?react';
import ArrowRightFooter from '../../Assets/arrow_right_footer.svg?react';
import WhatsAppIcon from '../../Assets/whatsapp_icon.svg?react';
import InstagramIcon from '../../Assets/instagram_icon.svg?react';
import TwitterIcon from '../../Assets/twitter_icon.svg?react';

import { NavLink } from 'react-router-dom';
import Label from './Label';
import Divider from './Divider';

const Footer = (props) => {
  return (
    <div className={`${styles.footer} ${styles[props.backgroundColor]}`}>
      <div className={styles.logoFooter}>
        <LogoFooter />
      </div>
      <div className={styles.linkGroup}>
        <NavLink className={styles.link}>
          Hospitality
          <ArrowRightFooter />
        </NavLink>
        <NavLink className={styles.link}>
          Piawood
          <ArrowRightFooter />
        </NavLink>
        <NavLink className={styles.link}>
          Yellow Filme
          <ArrowRightFooter />
        </NavLink>
        <NavLink className={styles.link}>
          Informações
          <ArrowRightFooter />
        </NavLink>
      </div>
      <div className={styles.labelGroup}>
        <Label
          label="WhatsApp"
          type={props.labelColor}
          icon={WhatsAppIcon}
          size="small"
          border="square"
          clickable="clickable"
        />
        <Label
          label="Instagram"
          type={props.labelColor}
          icon={InstagramIcon}
          size="small"
          border="square"
          clickable="clickable"
        />
        <Label
          label="Twitter"
          type={props.labelColor}
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
