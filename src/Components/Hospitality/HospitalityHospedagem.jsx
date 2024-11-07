import React from 'react';
import styles from './Hospitality.module.css';
import Header from '../Utils/Header';
import Lupa from '../../Assets/magnifying_glass_white.svg?react';
import ArrowLeft from '../../Assets/arrow_left_paginacao.svg?react';
import ArrowRight from '../../Assets/arrow_right_paginacao.svg?react';
import TextContent from '../Utils/TextContent';
import Label from '../Utils/Label';
import Footer from '../Utils/Footer';
import Button from '../Utils/Button';
import Select from '../Utils/Select';
import LogoRed from '../../Assets/logo_label_red.svg?react';
import LogoRedAccent from '../../Assets/logo_label_red_accent.svg?react';
import LocationPin from '../../Assets/location_pin.svg?react';
import Eye from '../../Assets/icon_eye.svg?react';
import Moon from '../../Assets/icon_moon.svg?react';
import Star from '../../Assets/icon_star_yellow.svg?react';
import People from '../../Assets/icon_people.svg?react';
import DoubleBed from '../../Assets/icon_double_bed.svg?react';
import Bed from '../../Assets/icon_bed.svg?react';
import Fridge from '../../Assets/icon_fridge.svg?react';
import Pool from '../../Assets/icon_pool.svg?react';
import Wifi from '../../Assets/icon_wifi.svg?react';
import SnowFlake from '../../Assets/icon_snowflake.svg?react';
import Balcony from '../../Assets/icon_balcony.svg?react';
import PlusCircle from '../../Assets/plus_circle.svg?react';

import { NavLink } from 'react-router-dom';
import Title from '../Utils/Title';
const HospitalityHospedagem = () => {
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
        <div>Hospedagens</div>
        <div className={styles.unselected}>
          <NavLink to="/Hospitality">Passeios</NavLink>
        </div>
      </div>
      <div className={styles.containerCasas}>
        <Title label="CASA RIO" type="red" />
        <div className={styles.casas}>
          <div className={styles.imgLabels}>
            <img src="src/Assets/casa_rio_hospitality.png" alt="Casa Rio" />
            <div className={styles.labels}>
              <Label
                label="Hospitality"
                type="red"
                border="squareRound"
                icon={LogoRedAccent}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Barrinha"
                type="white"
                border="squareRound"
                icon={LocationPin}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Vista para Lagoa do Santana"
                type="white"
                border="squareRound"
                icon={Eye}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Vista para Lagoa do Santana"
                type="white"
                border="squareRound"
                icon={Moon}
                multiple="multiple"
                size="small"
              />
              <Label
                label="9 pessoas"
                type="white"
                border="squareRound"
                icon={People}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Cama de Casal"
                type="white"
                border="squareRound"
                icon={DoubleBed}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Cama de Solteiro"
                type="white"
                border="squareRound"
                icon={Bed}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Cozinha Completa"
                type="white"
                border="squareRound"
                icon={Fridge}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Piscina"
                type="white"
                border="squareRound"
                icon={Pool}
                multiple="multiple"
                size="small"
              />
              <Label
                label="WiFi Fibra Ótica"
                type="white"
                border="squareRound"
                icon={Wifi}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Ar-Condicionado"
                type="white"
                border="squareRound"
                icon={SnowFlake}
                multiple="multiple"
                size="small"
              />
              <Label
                label="Varanda"
                type="white"
                border="squareRound"
                icon={Balcony}
                multiple="multiple"
                size="small"
              />
            </div>
          </div>
          <div className={styles.galeria}>
            <img src="src/Assets/hospitality_galeria.png" alt="Casa Rio 2" />
          </div>
          <div className={styles.comodidades}>
            <div className={styles.stars}>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <div className={styles.detalhes}>
              <div className={styles.detalheItem}>
                <Title label="COMODIDADES" type="black" />
                <TextContent type="black" content="" />
              </div>
            </div>
            <div className={styles.detalheItem}>
              <Title label="descrição" type="black" />
              <TextContent
                maxCharacters="maxCharacters60"
                type="medium"
                color="black"
                content="A Casa Rio oferece 4 dormitórios, sendo 3 suítes e 1 dormitório com banheiro exclusivo ao lado. Todos os quartos têm ar-condicionado, acomodando confortavelmente até 9 pessoas. A casa possui uma varanda espaçosa, perfeita para momentos de lazer e convivência, além de uma cozinha completa, sala de estar e piscina com uma vista espetacular da Lagoa do Santana."
              />
            </div>
          </div>
          <div className={styles.localizacaoInformacoes}>
            <div>
              <span>Localização</span>
              <span>Informações</span>
              <Label
                label=""
                iconOnly={true}
                type="redReverse"
                icon={PlusCircle}
                square="squareRound"
              />
            </div>
            <div className={styles.localizacao}>
              <div>
                <Label
                  label="Barrinha"
                  size="small"
                  square="squareRound"
                  icon={LocationPin}
                />
              </div>
              <div className={styles.distancia}>00m até a praia X</div>
              <div className={styles.mapa}></div>
            </div>

            <div className={styles.informacoes}></div>
            <Button label="Fale Conosco" type="red" />
          </div>
        </div>

        <Footer labelColor="redWhite" />
      </div>
    </div>
  );
};

export default HospitalityHospedagem;
