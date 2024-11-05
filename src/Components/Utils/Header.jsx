import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import CasaAmarela from '../../Assets/logo_casa_amarela.svg?react';
import BurguerMenu from '../../Assets/burguer_menu.svg?react';
import WhatsApp from '../../Assets/whatsapp_icon_yellow.svg?react';
import Label from './Label';
import Button from './Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}`}>
        <Link className={styles.logo} to="/" aria-label="Casa Amarela - Home">
          <CasaAmarela />
        </Link>
        <div className={styles.menu}>
          <Link to="/Hospitality">HOSPITALITY</Link>
          <Link to="/Piawood">PIAWOOD</Link>
          <Link to="/YellowFilme">YELLOW FILME</Link>
          <Link to="/Informacoes">INFORMAÇÕES</Link>
        </div>
        <Link className={styles.faleConosco} to="/FaleConosco">
          <Button type="yellow" label="Fale Conosco"></Button>
        </Link>
      </nav>
      <nav className={styles.mobile}>
        <div>
          <Label
            icon={BurguerMenu}
            iconOnly={true}
            border="round"
            type="transparent"
            padding="equal"
          />
        </div>
        <div>
          <Link
            className={styles.logoMobile}
            to="/"
            aria-label="Casa Amarela - Home"
          >
            <CasaAmarela />
          </Link>
        </div>
        <div>
          <Label
            icon={WhatsApp}
            iconOnly={true}
            border="round"
            type="transparent"
            padding="equal"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
