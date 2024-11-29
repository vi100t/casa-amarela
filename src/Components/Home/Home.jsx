import React, { useRef, useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../Utils/Header";
import Divider from "../Utils/Divider";
import Barrinha from "../../Assets/barrinha.svg?react";
import CasaAmarelaEstatistica from "../../Assets/casa_amarela_estatistica.svg?react";
import HospitalityRoom from "../../Assets/hospitality_room.svg?react";
import PalmTrees from "../../Assets/palm_trees.svg?react";
import EventsImg from "../../Assets/events_img.svg?react";
import LogoSea from "../../Assets/logo_sea.svg?react";
import LogoLabelRed from "../../Assets/logo_label_red.svg?react";
import LogoLabelGreen from "../../Assets/logo_label_green.svg?react";
import LogoLabelOrange from "../../Assets/logo_label_orange.svg?react";
import CardButtonRight from "../../Assets/right_arrow_card.svg?react";
import CardButtonLeft from "../../Assets/left_arrow_card.svg?react";
import TextContent from "../Utils/TextContent";
import Carousel from "../Utils/Carousel";
import Title from "../Utils/Title";
import Label from "../Utils/Label";
import Hyperlink from "../Utils/Hyperlink";
import SpeechBalloon from "../Utils/SpeechBalloon";
import Card from "../Utils/Card";
import Button from "../Utils/Button";
import Footer from "../Utils/Footer";
import CasaAmarela from "../../Assets/logo_casa_amarela.svg?react";

const Home = () => {
  const sectionRefs = useRef([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [
    isCasaAmarelaEstatisticasVisible,
    setIsCasaAmarelaEstatisticasVisible,
  ] = useState(false);
  const [isPiawoodEstatisticasVisible, setIsPiawoodEstatisticasVisible] =
    useState(false);

  const handleScroll = (event) => {
    const currentSection = sectionRefs.current[currentSectionIndex];
    if (currentSection) {
      const { scrollTop, scrollHeight, clientHeight } = currentSection;
      if (
        (event.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
        (event.deltaY < 0 && scrollTop > 0)
      ) {
        currentSection.scrollTop += event.deltaY;
      } else {
        if (
          event.deltaY > 0 &&
          scrollTop + clientHeight >= scrollHeight &&
          currentSectionIndex < sectionRefs.current.length - 1
        ) {
          setCurrentSectionIndex(currentSectionIndex + 1);
          scrollToSection(currentSectionIndex + 1);
        } else if (
          event.deltaY < 0 &&
          scrollTop === 0 &&
          currentSectionIndex > 0
        ) {
          setCurrentSectionIndex(currentSectionIndex - 1);
          scrollToSection(currentSectionIndex - 1);
        }
      }
    }
  };

  const handleCasaAmarelaScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    if (scrollTop > 2) {
      setIsCasaAmarelaEstatisticasVisible(true);
    } else if (scrollTop === 0) {
      setIsCasaAmarelaEstatisticasVisible(false);
    }
  };

  const handlePiawoodScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    if (scrollTop > 5) {
      setIsPiawoodEstatisticasVisible(true);
    } else if (scrollTop === 0) {
      setIsPiawoodEstatisticasVisible(false);
    }
  };

  const scrollToSection = (index) => {
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const yellowFilmeSection = document.querySelector(`.${styles.yellowFilme}`);
    const leftCurtain = document.querySelector(`.${styles.leftCurtain}`);
    const rightCurtain = document.querySelector(`.${styles.rightCurtain}`);
    const content = document.querySelector(`.${styles.curtainContent}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ensure curtains are closed initially
            leftCurtain.style.transform = `translateX(0)`;
            rightCurtain.style.transform = `translateX(0)`;
            content.classList.remove(styles.visible);

            // Start the animation to open the curtains
            setTimeout(() => {
              leftCurtain.style.transform = `translateX(-100%)`;
              rightCurtain.style.transform = `translateX(100%)`;
              content.classList.add(styles.visible);
            }, 100); // Delay to ensure the initial state is applied
          } else {
            leftCurtain.style.transform = `translateX(0)`;
            rightCurtain.style.transform = `translateX(0)`;
            content.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (yellowFilmeSection) {
      observer.observe(yellowFilmeSection);
    }

    return () => {
      if (yellowFilmeSection) {
        observer.unobserve(yellowFilmeSection);
      }
    };
  }, []);

  return (
    <div onWheel={handleScroll} className={`${styles.home} container`}>
      <Header
        buttonColor="yellow"
        className={styles.header}
        mobileButton="transparent30"
        logo={CasaAmarela}
      />
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="imagemHeader"
        className={`${styles.container} ${styles.section}`}
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
      </section>
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`${styles.container} ${styles.section} ${styles.casaAmarelaSection}`}
        onScroll={handleCasaAmarelaScroll}
      >
        <div
          className={`${styles.casaAmarelaEstatisticas} ${
            isCasaAmarelaEstatisticasVisible ? styles.visible : ""
          }`}
        >
          <CasaAmarelaEstatistica />
        </div>
        <div
          className={`${styles.casaAmarelaImg} ${
            isCasaAmarelaEstatisticasVisible ? styles.hidden : ""
          }`}
        >
          <div className={styles.casaAmarelaDiv}>
            <img src="src/Assets/casa_amarela_coffe.jpg" alt="Café" />
            <Barrinha className={styles.casaAmarelaBarrinha} />
            <Carousel />
          </div>
        </div>

        <div className={styles.casaAmarelaInfoContainer}>
          <div className={styles.casaAmarelaInfo}>
            <Title label="CASA AMARELA" type="yellow" />
            <TextContent
              type="black"
              content="A Casa Amarela é um projeto que conecta turismo, comunidade e sustentabilidade em Barrinha, PI. Nosso objetivo é contribuir para o desenvolvimento da região, promovendo educação, cultura e iniciativas que impulsionem a economia local de forma colaborativa e consciente."
              maxCharacters="maxCharacters30"
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        id="hospitality"
        className={`${styles.parallax} ${styles.hospitality} ${styles.section}`}
      >
        <div className={styles.hospitalityInfo}>
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
            content="A Casa Amarela oferece casas na costa do Piauí, criando experiências aconchegantes e autênticas. Valorizamos o turismo sustentável e comunitário, com atividades personalizadas para cada visitante. Aqui, você pode aproveitar paisagens incríveis, vivências únicas e se conectar de verdade com a cultura e as pessoas da região."
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
      </section>
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        id="houses"
        className={`${styles.parallax} ${styles.houses} ${styles.section}`}
      >
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
      </section>
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className={`${styles.section} ${styles.piawoodSection}`}
        onScroll={handlePiawoodScroll}
      >
        <div
          className={`${styles.desktop} ${styles.piaWoodEstatisticas} ${
            isPiawoodEstatisticasVisible ? styles.visible : ""
          }`}
        >
          <img
            src="src/Assets/piawood_estatistica.png"
            alt="Estatísticas Piawood"
          />
        </div>
        <div
          className={`${styles.piawoodImg} ${
            isPiawoodEstatisticasVisible ? styles.hidden : ""
          }`}
        >
          <PalmTrees />
        </div>

        <div className={styles.piawoodInfoContainer}>
          <div className={styles.piawoodInfo}>
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
      </section>
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className={`${styles.section} ${styles.eventsSection}`}
      >
        <div
          id="eventsSpace"
          className={`${styles.parallax} ${styles.eventsSpace}`}
        >
          <div className={`${styles.mobile} ${styles.piaWoodEstatisticas} `}>
            <img
              src="src/Assets/piawood_estatistica.png"
              alt="Estatísticas Piawood"
            />
          </div>
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
      </section>
      <section
        ref={(el) => (sectionRefs.current[6] = el)}
        id="yellowFilme"
        className={`${styles.parallax} ${styles.yellowFilme} ${styles.section}`}
      >
        <div className={styles.curtainContainer}>
          <div className={`${styles.curtain} ${styles.leftCurtain}`}></div>
          <div className={`${styles.curtain} ${styles.rightCurtain}`}></div>
          <div className={styles.curtainContent}>
            <div className={styles.yellowFilmeImg}>
              <LogoSea />
            </div>
            <div className={styles.hospitalityInfo}>
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
                content="A Yellow Filme é a produtora audiovisual da Casa Amarela, focada em promover as atividades do hub cultural Piawood e do projeto de hospitalidade. A empresa atua em duas frentes: produção interna, criando conteúdos para divulgação e marketing, e serviços externos, oferecendo expertise local para marcas que buscam produções na região do Piauí. Com um foco regional, a Yellow Filme valoriza a cultura, os talentos e os cenários locais, criando conteúdos autênticos e de alto impacto visual."
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
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[7] = el)}
        id="videoBanner"
        className={`${styles.parallax} ${styles.videoBanner} ${styles.section}`}
      >
        <img src="src/Assets/video_banner.png" alt="Video Banner" />
        <Footer labelColor="yellowWhite" />
      </section>
    </div>
  );
};

export default Home;
