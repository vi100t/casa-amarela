import React from 'react';
import styles from './YellowFilme.module.css';
import Header from '../Utils/Header';
import Divider from '../Utils/Divider';
import ExperienciaAutentica from '../../Assets/experiencia_autentica.svg?react';
import ExperienciaAutenticaMobile from '../../Assets/experiencia_autentica_mobile.svg?react';
import Lupa from '../../Assets/magnifying_glass.svg?react';
import TextContent from '../Utils/TextContent';
import Title from '../Utils/Title';
import Label from '../Utils/Label';
import Footer from '../Utils/Footer';
import WhatsAppIcon from '../../Assets/whatsapp_icon.svg?react';
import InstagramIcon from '../../Assets/instagram_icon.svg?react';
import TwitterIcon from '../../Assets/twitter_icon.svg?react';
import Button from '../Utils/Button';
import Input from '../Utils/Input';

const YellowFilme = () => {
  return (
    <div className={`container`}>
      <Header
        className={styles.header}
        background="backgroundWhite"
        mobileButton="transparent10"
      ></Header>
      <Divider className={styles.mobile} />
      <Divider />
      <div className={styles.informacoes}>
        <div className={styles.header}>
          <Title label="Informações" type="yellow" />
          <TextContent
            content="Lorem ipsum dolor sit amet consectetur adipiscing elit hac habitant facilisi, sodales inceptos turpis mollis convallis risus ornare vehicula elementum eleifend, aliquet maecenas litora cubilia vitae interdum habitasse posuere ex. Rutrum torquent ullamcorper taciti cubilia neque enim, nostra risus erat suscipit tempor, donec maecenas morbi cursus sagittis. "
            type="black"
          />
          <div>
            <Input placeholder="Busque sua dúvida aqui" />
            <Button type="yellow" label="Buscar" icon={Lupa}></Button>
          </div>
        </div>
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
              <Label
                label="WhatsApp"
                type="yellowWhite"
                icon={WhatsAppIcon}
                size="small"
                border="square"
                clickable="clickable"
              />
            </div>
            <div>
              <Label
                label="Instagram"
                type="yellowWhite"
                icon={InstagramIcon}
                size="small"
                border="square"
                clickable="clickable"
              />
            </div>
            <div>
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
      <Footer />
    </div>
  );
};

export default YellowFilme;
