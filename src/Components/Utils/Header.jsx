import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

import LogoMenu from '../../Assets/logo_label_menu.svg?react';
import BurguerMenu from '../../Assets/burguer_menu.svg?react';
import ArrowDown from '../../Assets/arrow_down.svg?react';
import Close from '../../Assets/icon_close_menu.svg?react';
import WhatsApp from '../../Assets/whatsapp_icon_yellow.svg?react';
import Label from './Label';
import Button from './Button';
import Title from './Title';

const Header = (props) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [showHospitality, setHospitality] = React.useState();
  return (
    <header className={`${styles.header} ${styles[props.background]}`}>
      <nav className={`${styles.nav}`}>
        <NavLink
          className={styles.logo}
          to="/"
          aria-label="Casa Amarela - Home"
        >
          {props.logo && <props.logo />}
        </NavLink>
        <div className={styles.menu}>
          <NavLink to="/HospitalityHospedagem">HOSPITALITY</NavLink>
          <NavLink to="/Piawood" onClick={() => setNavbarOpen((prev) => !prev)}>
            PIAWOOD
          </NavLink>
          <NavLink
            to="/YellowFilme"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            YELLOW FILME
          </NavLink>
          <NavLink
            to="/Informacoes"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            INFORMAÇÕES
          </NavLink>
        </div>
        <NavLink className={styles.faleConosco} to="/FaleConosco">
          <Button type={props.buttonColor} label="Fale Conosco"></Button>
        </NavLink>
      </nav>
      <nav className={styles.mobile}>
        <div onClick={() => setNavbarOpen((prev) => !prev)}>
          <Label
            icon={BurguerMenu}
            iconOnly={true}
            border="round"
            type={props.mobileButton}
            padding="equal"
          />
        </div>
        <div>
          <NavLink
            className={styles.logoMobile}
            to="/"
            aria-label="Casa Amarela - Home"
          >
            {props.logo && <props.logo />}
          </NavLink>
        </div>
        <div>
          <Label
            icon={WhatsApp}
            iconOnly={true}
            border="round"
            type={props.mobileButton}
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
              <li onClick={() => setHospitality((prev) => !prev)}>
                Hospitality
                <ArrowDown />
              </li>
              {showHospitality && (
                <li>
                  <NavLink to="/HospitalityHospedagem">Hospedagens</NavLink>
                </li>
              )}
              {showHospitality && (
                <li>
                  <NavLink to="/Hospitality">Passeios</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/Piawood">Piawood</NavLink>
              </li>
              <li>
                <NavLink to="/YellowFilme">Yellow Filme</NavLink>
              </li>
              <li>
                <NavLink to="/Informacoes">Informações</NavLink>
              </li>
              <li>
                <NavLink to="/FaleConosco" activeclassname="activeLink">
                  Contato
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
