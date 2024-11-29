import React from 'react';
import styles from './FaleConosco.module.css';
import Header from '../Utils/Header';
import Divider from '../Utils/Divider';
import ExperienciaAutentica from '../../Assets/experiencia_autentica.svg?react';
import ExperienciaAutenticaMobile from '../../Assets/experiencia_autentica_mobile.svg?react';
import TextContent from '../Utils/TextContent';
import Title from '../Utils/Title';
import Label from '../Utils/Label';
import Footer from '../Utils/Footer';
import WhatsAppIcon from '../../Assets/whatsapp_icon.svg?react';
import InstagramIcon from '../../Assets/instagram_icon.svg?react';
import TwitterIcon from '../../Assets/twitter_icon.svg?react';
import CasaAmarela from '../../Assets/logo_casa_amarela.svg?react';

const FaleConosco = () => {
  return (
    <div className={`container`}>
      <Header
        buttonColor="yellow"
        className={styles.header}
        background="backgroundWhite"
        mobileButton="transparent10"
        logo={CasaAmarela}
      ></Header>
      <Divider className={styles.mobile} />
      <Divider />
      <div className={styles.faleConosco}>
        <div className={styles.entreEmContato}>
          <img
            className={styles.entreEmContatoImg}
            src="src/Assets/chapeu_chinelo.png"
            alt="Chapéu e Chinelo"
          />

          <Title label="Entre em Contato" type="yellow" />
          <TextContent
            content="Para entrar em contato com a Casa Amarela, nossa principal plataforma é o WhatsApp. Acesse diretamente através do botão abaixo e também siga nossas redes sociais para ficar por dentro das novidades. Caso tenha dúvidas ou queira planejar sua estadia, nossa equipe está à disposição para ajudar."
            type="black"
          />
          <div className={styles.labelGroup}>
            <div>
              <a href="http://Wa.me/5586999866447">
              <Label
                label="WhatsApp"
                type="yellowWhite"
                icon={WhatsAppIcon}
                size="small"
                border="square"
                clickable="clickable"
              />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/casaamarelapiaui?igsh=ZWN3eWRtd3hlaGdh">
              <Label
                label="Instagram"
                type="yellowWhite"
                icon={InstagramIcon}
                size="small"
                border="square"
                clickable="clickable"
              />
              </a>
              
            </div>
          </div>
          <div className={styles.desktop}>
            <Divider />
          </div>

          <Divider />
        </div>
      </div>
      <div className={styles.experienciaAutImg}>
        <img
          className={styles.entreEmContatoImgMobile}
          src="src/Assets/chapeu_chinelo_mobile.png"
          alt="Chapéu e Chinelo"
        />
      </div>
      <div className={styles.experienciaAut}>
        <ExperienciaAutenticaMobile className={styles.mobile} />
        <ExperienciaAutentica className={styles.desktop} />
      </div>
      <Footer labelColor="yellowWhite" />
    </div>
  );
};

export default FaleConosco;
