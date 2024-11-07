import React from 'react';
import styles from './Piawood.module.css';
import Header from '../Utils/Header';
import Divider from '../Utils/Divider';
import ExperienciaAutentica from '../../Assets/experiencia_autentica.svg?react';
import ExperienciaAutenticaMobile from '../../Assets/experiencia_autentica_mobile.svg?react';
import LogoRed from '../../Assets/logo_label_red.svg?react';
import TextContent from '../Utils/TextContent';
import Title from '../Utils/Title';
import Label from '../Utils/Label';
import Footer from '../Utils/Footer';
import WhatsAppIcon from '../../Assets/whatsapp_icon.svg?react';
import InstagramIcon from '../../Assets/instagram_icon.svg?react';
import TwitterIcon from '../../Assets/twitter_icon.svg?react';
import Button from '../Utils/Button';
import Input from '../Utils/Input';

const Piawood = () => {
  return (
    <div className={`container`}>
      <Header
        buttonColor="redWhite"
        className={styles.header}
        mobileButton="transparent30OrangeAccent"
        logo={LogoRed}
      ></Header>
      <Divider className={styles.mobile} />
      <Divider />
      <div className={styles.informacoes}></div>
      <Footer labelColor="yellowWhite" />
    </div>
  );
};

export default Piawood;
