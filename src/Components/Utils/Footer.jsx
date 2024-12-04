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
        <NavLink className={styles.link} to="/HospitalityHospedagem">
          Hospitality
          <ArrowRightFooter />
        </NavLink>
        <NavLink className={styles.link} to="/Piawood">
          Piawood
          <ArrowRightFooter />
        </NavLink>
        <NavLink className={styles.link} to="/YellowFilme">
          Yellow Filme
          <ArrowRightFooter />
        </NavLink>
        <NavLink className={styles.link} to="/Informacoes">
          Informações
          <ArrowRightFooter />
        </NavLink>
      </div>
      <div className={styles.labelGroup}>
       <a href="http://Wa.me/5586999866447"><Label
          label="WhatsApp"
          type={props.labelColor}
          icon={WhatsAppIcon}
          size="small"
          border="square"
          clickable="clickable"
        /></a>
        <a href="https://www.instagram.com/casaamarelapiaui?igsh=ZWN3eWRtd3hlaGdh">

        <Label
          label="Instagram"
          type={props.labelColor}
          icon={InstagramIcon}
          size="small"
          border="square"
          clickable="clickable"
        />
        </a>
        
      </div>
    </div>
  );
};

export default Footer;
