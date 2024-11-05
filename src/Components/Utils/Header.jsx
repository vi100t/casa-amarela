import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import CasaAmarela from '../../Assets/logo_casa_amarela.svg?react';
import LogoMenu from '../../Assets/logo_label_menu.svg?react';
import BurguerMenu from '../../Assets/burguer_menu.svg?react';
import ArrowDown from '../../Assets/arrow_down.svg?react';
import Close from '../../Assets/icon_close_menu.svg?react';
import WhatsApp from '../../Assets/whatsapp_icon_yellow.svg?react';
import Label from './Label';
import Button from './Button';
import Title from './Title';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [showHospitality, setHospitality] = React.useState();
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav}`}>
        <Link className={styles.logo} to="/" aria-label="Casa Amarela - Home">
          <CasaAmarela />
        </Link>
        <div className={styles.menu}>
          <Link to="/Hospitality">HOSPITALITY</Link>
          <Link to="/Piawood" onClick={() => setNavbarOpen((prev) => !prev)}>
            PIAWOOD
          </Link>
          <Link
            to="/YellowFilme"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            YELLOW FILME
          </Link>
          <Link
            to="/Informacoes"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            INFORMAÇÕES
          </Link>
        </div>
        <Link className={styles.faleConosco} to="/FaleConosco">
          <Button type="yellow" label="Fale Conosco"></Button>
        </Link>
      </nav>
      <nav className={styles.mobile}>
        <div onClick={() => setNavbarOpen((prev) => !prev)}>
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
      {navbarOpen && (
        <div className={styles.mobileMenu}>
          <header>
            <LogoMenu />
            <Title label="CASA AMARELA" type="brown"></Title>
          </header>
          <div
            className={styles.closeBtn}
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            <Close />
          </div>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavMenu}>
              <li>
                Hospitality
                <ArrowDown onClick={() => setHospitality((prev) => !prev)} />
              </li>
              {showHospitality && <li>Hospedagens</li>}
              {showHospitality && <li>Passeios</li>}
              <li>Piawood</li>
              <li>Yellow Filme</li>
              <li>Informações</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
