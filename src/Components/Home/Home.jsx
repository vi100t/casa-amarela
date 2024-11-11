import React from 'react';
import styles from './Home.module.css';
import Header from '../Utils/Header';
import Divider from '../Utils/Divider';
import Barrinha from '../../Assets/barrinha.svg?react';
import CasaAmarelaEstatistica from '../../Assets/casa_amarela_estatistica.svg?react';
import HospitalityRoom from '../../Assets/hospitality_room.svg?react';
import PalmTrees from '../../Assets/palm_trees.svg?react';
import EventsImg from '../../Assets/events_img.svg?react';
import LogoSea from '../../Assets/logo_sea.svg?react';
import LogoLabelRed from '../../Assets/logo_label_red.svg?react';
import LogoLabelGreen from '../../Assets/logo_label_green.svg?react';
import LogoLabelOrange from '../../Assets/logo_label_orange.svg?react';
import CardButtonRight from '../../Assets/right_arrow_card.svg?react';
import CardButtonLeft from '../../Assets/left_arrow_card.svg?react';
import TextContent from '../Utils/TextContent';
import Carousel from '../Utils/Carousel';
import Title from '../Utils/Title';
import Label from '../Utils/Label';
import Hyperlink from '../Utils/Hyperlink';
import SpeechBalloon from '../Utils/SpeechBalloon';
import Card from '../Utils/Card';
import Button from '../Utils/Button';
import Footer from '../Utils/Footer';
import CasaAmarela from '../../Assets/logo_casa_amarela.svg?react';

const Home = () => {
  function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
      method();
    }, delay);
  }

  function showElements() {
    const imagemHeader = document.getElementById('imagemHeader');
    const casaAmarela = document.getElementById('casaAmarela');
    const casaAmarelaEstatisticas = document.getElementById(
      'casaAmarelaEstatisticas',
    );
    const hospitality = document.getElementById('hospitality');
    const houses = document.getElementById('houses');
    const piawood = document.getElementById('piawood');
    const piaWoodEstatisticas = document.getElementById('piaWoodEstatisticas');
    const eventsSpace = document.getElementById('eventsSpace');
    const events = document.getElementById('events');
    const yellowFilme = document.getElementById('yellowFilme');
    const videoBanner = document.getElementById('videoBanner');

    if (window.scrollY > 200) {
      imagemHeader.className += ' ' + styles.show;
    }
    if (window.scrollY > 200) {
      casaAmarela.className += ' ' + styles.show;
    }
    if (window.scrollY > 400) {
      imagemHeader.className = imagemHeader.className.split('_show')[0];
    }
    if (window.scrollY > 400) {
      casaAmarela.className = casaAmarela.className.split('_show')[0];
    }
    if (window.scrollY > 300) {
      casaAmarelaEstatisticas.className += ' ' + styles.show;
    }
    if (window.scrollY > 300) {
      hospitality.className += ' ' + styles.show;
    }
    if (window.scrollY > 1200) {
      casaAmarelaEstatisticas.className =
        casaAmarelaEstatisticas.className.split('_show')[0];
    }
    if (window.scrollY > 1800) {
      hospitality.className = hospitality.className.split('_show')[0];
    }
    if (window.scrollY > 1000) {
      houses.className += ' ' + styles.show;
    }
    if (window.scrollY > 1000) {
      piawood.className += ' ' + styles.show;
    }
    if (window.scrollY > 2600) {
      houses.className = houses.className.split('_show')[0];
    }
    if (window.scrollY > 3400) {
      piawood.className = piawood.className.split('_show')[0];
    }
    if (window.scrollY > 2800) {
      piaWoodEstatisticas.className += ' ' + styles.show;
    }
    if (window.scrollY > 3200) {
      eventsSpace.className += ' ' + styles.show;
    }
    if (window.scrollY > 4200) {
      piaWoodEstatisticas.className =
        piaWoodEstatisticas.className.split('_show')[0];
    }
    if (window.scrollY > 5000) {
      eventsSpace.className = eventsSpace.className.split('_show')[0];
    }
    if (window.scrollY > 3200) {
      events.className += ' ' + styles.show;
    }
    if (window.scrollY > 3400) {
      yellowFilme.className += ' ' + styles.show;
    }
    if (window.scrollY > 3400) {
      videoBanner.className += ' ' + styles.show;
    }
    if (window.scrollY > 4600) {
      events.className = events.className.split('_show')[0];
    }
    if (window.scrollY > 6400) {
      videoBanner.className = videoBanner.className.split('_show')[0];
    }
    if (window.scrollY > 5800) {
      yellowFilme.className = yellowFilme.className.split('_show')[0];
    }
  }

  document.addEventListener('scroll', function () {
    debounce(showElements, 100);
  });
  return (
    <div className={`${styles.home} container`}>
      <Header
        buttonColor="yellow"
        className={styles.header}
        mobileButton="transparent30"
        logo={CasaAmarela}
      ></Header>
      <div
        id="imagemHeader"
        className={`${styles.parallax} ${styles.container} ${styles.show}`}
      >
        <img
          className={styles.desktop}
          src="src/Assets/home_1.png"
          alt="Quarto"
        />
        <img
          className={styles.mobile}
          src="src/Assets/home_1_mobile.png"
          alt="Quarto"
        />
      </div>

      <Divider />

      <div
        id="casaAmarela"
        className={`${styles.parallax} ${styles.casaAmarela} ${styles.show}`}
      >
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
      <div
        id="casaAmarelaEstatisticas"
        className={`${styles.parallax} ${styles.casaAmarelaEstatisticas}`}
      >
        <Divider />
        <CasaAmarelaEstatistica className={styles.casaAmarelaEstatisticas} />
        <Divider />
      </div>
      <div
        id="hospitality"
        className={`${styles.parallax} ${styles.hospitality}`}
      >
        <div className={styles.casaAmarelaInfo}>
          <div className={styles.hospitalityTitle}>
            <Label
              label="Hospitality"
              type="redReverse"
              border="squareRound"
              icon={LogoLabelRed}
            />
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
        <div className={styles.hospitalityRoom}>
          <HospitalityRoom />
        </div>
      </div>
      <div id="houses" className={`${styles.parallax} ${styles.houses}`}>
        <img
          className={styles.housesMap}
          src="src/Assets/hospitality_map.png"
          alt="Mapa de estadias"
        />
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
          <div className={styles.cardReservaMobile}>
            <CardButtonLeft className={styles.cardButtons} />
            <Card />
            <CardButtonRight className={styles.cardButtons} />
          </div>
        </div>
      </div>
      <Divider />
      <div id="piawood" className={`${styles.parallax} ${styles.piawood}`}>
        <div className={styles.piawoodImg}>
          <PalmTrees />
        </div>
        <div className={styles.casaAmarelaInfo}>
          <div className={styles.hospitalityTitle}>
            <Label
              label="Piawood"
              type="blue"
              icon={LogoLabelGreen}
              border="squareRound"
            />
          </div>

          <TextContent
            type="black"
            content="Piawood é o hub cultural da Casa Amarela, dedicado ao fomento da cultura e talentos locais na região de Barrinha, PI. Atuando como curador e plataforma de crescimento, Piawood promove eventos que integram música, artes visuais, gastronomia e esporte, gerando impacto na cena cultural da região. Além disso, a produtora Yellow Filme cria conteúdos audiovisuais que documentam e divulgam essas experiências, conectando a riqueza cultural local a um público mais amplo."
            maxCharacters="maxCharacters30"
          />
        </div>
      </div>
      <Divider />
      <div
        id="piaWoodEstatisticas"
        className={`${styles.parallax} ${styles.piaWoodEstatisticas}`}
      >
        <img
          src="src/Assets/piawood_estatistica.png"
          alt="Estatíticas Piawood"
        />
      </div>
      <div
        id="eventsSpace"
        className={`${styles.parallax} ${styles.eventsSpace}`}
      >
        <Divider />
        <Divider />
        <Divider />
        <Divider />
      </div>
      <div id="events" className={`${styles.parallax} ${styles.events}`}>
        <Title label="Live and" type="green" />
        <Title label="experience" type="green" />
        <div>
          <Button label="Ver eventos" type="green" />
        </div>
        <div className={styles.eventsImg}>
          <EventsImg />
        </div>
        <div className={styles.eventsImgMobile}>
          <img src="src/Assets/events_img_mobile.png" alt="Eventos" />
        </div>
      </div>
      <div
        id="yellowFilme"
        className={`${styles.parallax} ${styles.yellowFilme}`}
      >
        <div className={styles.yellowFilmeImg}>
          <LogoSea />
        </div>
        <div className={styles.casaAmarelaInfo}>
          <div className={styles.hospitalityTitle}>
            <Label
              label="Yellow Filme"
              type="orange"
              icon={LogoLabelOrange}
              border="squareRound"
            />
          </div>
          <TextContent
            type="blackBrown"
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
      <div
        id="videoBanner"
        className={`${styles.parallax} ${styles.videoBanner}`}
      >
        <img src="src/Assets/video_banner.png" alt="Video Banner" />
      </div>
      <Footer labelColor="yellowWhite" />
    </div>
  );
};

export default Home;
