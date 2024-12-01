import React from "react";
import styles from "./Hospitality.module.css";
import Header from "../Utils/Header";
import Lupa from "../../Assets/magnifying_glass_blue.svg?react";
import ArrowLeft from "../../Assets/arrow_left_paginacao.svg?react";
import ArrowRight from "../../Assets/arrow_right_paginacao.svg?react";
import TextContent from "../Utils/TextContent";
import Label from "../Utils/Label";
import Footer from "../Utils/Footer";
import Button from "../Utils/Button";
import Select from "../Utils/Select";
import LogoRed from "../../Assets/logo_label_red.svg?react";
import LogoRedAccent from "../../Assets/logo_label_red_accent.svg?react";
import { NavLink } from "react-router-dom";
import passeiosData from "../../Data/passeios.json";
const Hospitality = () => {
  const passeios = passeiosData.map((passeio) => {
    return (
      <div className={styles.passeio} key={passeio.nome}>
        <div className={styles.passeioContainer}>
          <div className={styles.passeioInfo}>
            <div className={styles.passeioLabels}>
              <Label
                label="Hospitality"
                type="red"
                icon={LogoRedAccent}
                border="squareRound"
                size="small"
              />
              <Label
                label="Esporte"
                type="redAccent"
                icon={LogoRed}
                border="squareRound"
                size="small"
              />
            </div>
            <TextContent
              type="small"
              maxCharacters="maxCharacters30"
              color="black"
              content={passeio.descricao}
            />
          </div>
          <div className={`${styles.mobile} ${styles.buttonMobileCard}`}>
            <Button label="Reservar" type="red" />
          </div>
          <div className={`${styles.passeioImg} ${styles.desktop}`}>
            <iframe
              width="100%"
              height="100%"
              src={`${
                passeio.video
              }?autoplay=1&controls=0&fs=0&loop=0&color=white&playlist=${
                passeio.video.split("embed/")[1]
              }`}
              title="YouTube video player"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
        <div className={`${styles.passeioImg} ${styles.mobile}`}>
          <img src="src/Assets/passeio_1.png" alt="Passeio" />
        </div>
        <div className={`${styles.desktop} ${styles.fullButton}`}>
          <Button label="Reservar" type="red" />
        </div>
      </div>
    );
  });
  return (
    <div>
      <Header
        buttonColor="redWhite"
        className={styles.header}
        mobileButton="transparent30Red"
        logo={LogoRed}
      ></Header>
      <div className={styles.container}>
        <img
          className={styles.desktop}
          src="src/Assets/hospitality_banner.png"
          alt="Hospitality Banner"
        />
        <img
          className={styles.mobile}
          src="src/Assets/hospitality_banner_mobile.png"
          alt="Hospitality Banner"
        />
      </div>
      <div className={styles.menuHospitality}>
        <div className={styles.unselected}>
          <NavLink to="/HospitalityHospedagem">Hospedagens</NavLink>
        </div>
        <div>Passeios</div>
      </div>
      <div className={styles.cardsGroup}>
        <div className={styles.cards}>
          <LogoRed />
          Shows
        </div>
        <div className={styles.cards}>
          <LogoRed />
          Workshops
        </div>
        <div className={styles.cards}>
          <LogoRed />
          Exposições
        </div>
        <div className={styles.cards}>
          <LogoRed />
          Gastronomia
        </div>
        <div className={styles.cards}>
          <LogoRed />
          Esportes
        </div>
      </div>
      {/* <div className={styles.containerBusca}>
        <Select
          placeholder="Eventos Exclusivos"
          icon="star"
          input="select"
        ></Select>
        <Select
          placeholder="Período de Temporada"
          icon="calendar"
          input="select"
        ></Select>
        <Select placeholder="Lua" icon="moon" input="select"></Select>
        <div>
          <Button type="red" label="Buscar" icon={Lupa}></Button>
        </div>
      </div> */}
      <div className={styles.gridPasseios}>
        <div className={styles.passeios}>{passeios}</div>
        {/* <div className={styles.paginacao}>
          <ArrowLeft />
          <div className={`${styles.pagina} ${styles.paginaSelecionada}`}>
            1
          </div>
          <div className={styles.pagina}>2</div>
          <div className={styles.pagina}>3</div>
          <div className={styles.pagina}>4</div>
          <div className={styles.pagina}>5</div>
          <ArrowRight />
        </div> */}
      </div>

      <Footer labelColor="redWhite" />
    </div>
  );
};

export default Hospitality;
