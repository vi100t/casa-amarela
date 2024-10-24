import React from 'react';
import styles from './Home.module.css';
import Header from '../Utils/Header';
import Divider from '../Utils/Divider';
import Barrinha from '../../Assets/barrinha.svg?react';
import CasaAmarelaEstatistica from '../../Assets/casa_amarela_estatistica.svg?react';
import PiawoodEstatistica from '../../Assets/piawood_estatistica.svg?react';
import HospitalityRoom from '../../Assets/hospitality_room.svg?react';
import PalmTrees from '../../Assets/palm_trees.svg?react';
import EventsImg from '../../Assets/events_img.svg?react';
import LogoSea from '../../Assets/logo_sea.svg?react';
import LogoLabelRed from '../../Assets/logo_label_red.svg?react';
import LogoLabelGreen from '../../Assets/logo_label_green.svg?react';
import LogoLabelOrange from '../../Assets/logo_label_orange.svg?react';
import TextContent from '../Utils/TextContent';
import Carousel from '../Utils/Carousel';
import Title from '../Utils/Title';
import Label from '../Utils/Label';
import Hyperlink from '../Utils/Hyperlink';
import SpeechBalloon from '../Utils/SpeechBalloon';
import Card from '../Utils/Card';
import Button from '../Utils/Button';
import Footer from '../Utils/Footer';

const Home = () => {
  return (
    <div className={`${styles.home} container`}>
      <Header></Header>

      <img src="src/Assets/home_1.png" alt="Quarto" />

      <Divider />

      <div className={styles.casaAmarela}>
        <div className={styles.casaAmarelaImg}>
          <img src="src\Assets\casa_amarela_coffe.jpg" alt="Café" />
          <Barrinha className={styles.casaAmarelaBarrinha} />
          <Carousel />
        </div>
        <div className={styles.casaAmarelaInfo}>
          <Title label="CASA AMARELA" type="yellow" />
          <TextContent
            type="black"
            content="A Casa Amarela é um ecossistema de turismo que busca impulsionar o desenvolvimento de Barrinha, PI, por meio de ações estruturantes de promoção à cultura, educação e inclusão produtiva."
            maxCharacters="maxCharacters40"
          />
        </div>
      </div>
      <div className={styles.casaAmarelaEstatisticas}>
        <Divider />
        <CasaAmarelaEstatistica className={styles.casaAmarelaEstatisticas} />
        <Divider />
      </div>
      <div className={styles.hospitality}>
        <div className={styles.casaAmarelaInfo}>
          <div className={styles.hospitalityTitle}>
            <Label label="Hospitality" type="red-reverse" icon={LogoLabelRed} />
            <Title label="Live and experience" type="redAccent3" />
          </div>

          <TextContent
            type="redAccent2"
            content="A Casa Amarela oferece casas e vilas na costa do Piauí, proporcionando uma experiência única. Com foco em turismo sustentável e comunitário, todas as atividades são personalizadas. Os visitantes podem desfrutar de atividades exclusivas, vistas deslumbrantes e conexões autênticas com a cultura e as pessoas locais."
            maxCharacters="maxCharacters30"
          />
          <Hyperlink
            color="redAccent3"
            label="Saiba mais sobre nossas hospedagens"
            href="/Hospitality"
          />
        </div>
        <div>
          <HospitalityRoom />
        </div>
      </div>
      <div className={styles.houses}>
        <img src="src/Assets/hospitality_map.png" alt="Mapa de estadias" />
        <div className={styles.casaRio}>
          <SpeechBalloon label="Casa Rio" state="selected" />
        </div>
        <div className={styles.casaCaju}>
          <SpeechBalloon label="Casa Caju" state="unselected" />
        </div>
        <div className={styles.casaSal}>
          <SpeechBalloon label="Casa Sal" state="unselected" />
        </div>
        <div className={styles.casaCamua}>
          <SpeechBalloon label="Casa Camuá" state="unselected" />
        </div>
        <div className={styles.casaBaete}>
          <SpeechBalloon label="Casa Baeté" state="unselected" />
        </div>
        <div className={styles.casaDecker}>
          <SpeechBalloon label="Casa Decker" state="unselected" />
        </div>
        <div className={styles.casaDharma}>
          <SpeechBalloon label="Casa Dharma" state="unselected" />
        </div>
        <div className={styles.casaBruxa}>
          <SpeechBalloon label="Casa da Bruxa" state="unselected" />
        </div>
        <div className={styles.cardReserva}>
          <Card />
        </div>
      </div>
      <Divider />
      <div className={styles.piawood}>
        <div>
          <PalmTrees />
        </div>
        <div className={styles.casaAmarelaInfo}>
          <div className={styles.hospitalityTitle}>
            <Label label="Piawood" type="blue" icon={LogoLabelGreen} />
          </div>

          <TextContent
            type="black"
            content="Piawood é o hub cultural da Casa Amarela, dedicado ao fomento da cultura e talentos locais na região de Barrinha, PI. Atuando como curador e plataforma de crescimento, Piawood promove eventos que integram música, artes visuais, gastronomia e esporte, gerando impacto na cena cultural da região. Além disso, a produtora Yellow Filme cria conteúdos audiovisuais que documentam e divulgam essas experiências, conectando a riqueza cultural local a um público mais amplo."
            maxCharacters="maxCharacters30"
          />
        </div>
      </div>
      <div className={styles.casaAmarelaEstatisticas}>
        <Divider />
        <PiawoodEstatistica className={styles.casaAmarelaEstatisticas} />
        <Divider />
      </div>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <div className={styles.events}>
        <Title label="Live and" type="green" />
        <Title label="experience" type="green" />
        <div>
          <Button label="Ver eventos" type="green" />
        </div>
        <div className={styles.eventsImg}>
          <EventsImg />
        </div>
      </div>
      <div className={styles.yellowFilme}>
        <div>
          <LogoSea />
        </div>
        <div className={styles.casaAmarelaInfo}>
          <div className={styles.hospitalityTitle}>
            <Label label="Piawood" type="orange" icon={LogoLabelOrange} />
          </div>

          <TextContent
            type="black"
            content="A Yellow Filme é a produtora audiovisual da Casa Amarela, focada em promover as atividades do hub cultural Piawood         e do projeto de hospitalidade. A empresa atua em duas frentes: produção interna, criando conteúdos para divulgação e marketing, e serviços externos, oferecendo expertise local para marcas que buscam produções na região do Piauí. Com um foco regional, a Yellow Filme valoriza a cultura, os talentos e os cenários locais, criando conteúdos autênticos e de alto impacto visual."
            maxCharacters="maxCharacters30"
          />
          <Hyperlink
            color="orange"
            label="Saiba mais sobre a Yellow Film"
            href="/YellowFilm"
            arrowColor="arrowOrange"
          />
        </div>
      </div>
      <div className={styles.videoBanner}>
        <img src="src/Assets/video_banner.png" alt="Video Banner" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
