import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import CasaAmarela from '../../Assets/logo_casa_amarela.svg?react';
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
    </header>
  );
};

export default Header;
