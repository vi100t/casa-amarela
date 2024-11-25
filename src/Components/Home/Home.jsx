import React from 'react';
import styles from './Home.module.css';
import Header from '../Utils/Header';
import Divider from '../Utils/Divider';
import Barrinha from '../../Assets/barrinha.svg?react';
import CasaAmarelaEstatistica from '../../Assets/casa_amarela_estatistica.svg?react';
import TextContent from '../Utils/TextContent';
import Carousel from '../Utils/Carousel';
import Title from '../Utils/Title';

const Home = () => {
  return (
    <div className={`${styles.home} container`}>
      <Header></Header>

      <img src="src\Assets\home_1.png" alt="Quarto" />

      <Divider />

      <div className={styles.casaAmarela}>
        <div className={styles.casaAmarelaImg}>
          <img src="src\Assets\casa_amarela_coffe.jpg" alt="Café" />
          <Barrinha />
          <Carousel />
        </div>
        <div className={styles.casaAmarelaInfo}>
          <Title label="CASA AMARELA" type="yellow" />
          <TextContent
            type="black"
            content="A Casa Amarela é um ecossistema de turismo que busca impulsionar o desenvolvimento de Barrinha, PI, por meio de ações estruturantes de promoção à cultura, educação e inclusão produtiva."
            maxCharacters="maxCharacters"
          />
        </div>
      </div>
      <div className={styles.casaAmarelaEstatisticas}>
        <Divider />
        <CasaAmarelaEstatistica className={styles.casaAmarelaEstatisticas} />
        <Divider />
      </div>
    </div>
  );
};

export default Home;
