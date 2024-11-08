import React from 'react';
import styles from './Hospitality.module.css';
import Header from '../Utils/Header';
import Lupa from '../../Assets/magnifying_glass_blue.svg?react';
import ArrowLeft from '../../Assets/arrow_left_paginacao.svg?react';
import ArrowRight from '../../Assets/arrow_right_paginacao.svg?react';
import TextContent from '../Utils/TextContent';
import Label from '../Utils/Label';
import Footer from '../Utils/Footer';
import Button from '../Utils/Button';
import Select from '../Utils/Select';
import LogoRed from '../../Assets/logo_label_red.svg?react';
import LogoRedAccent from '../../Assets/logo_label_red_accent.svg?react';
import { NavLink } from 'react-router-dom';

const Hospitality = () => {
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
      <div className={styles.containerBusca}>
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
      </div>
      <div className={styles.gridPasseios}>
        <div className={styles.passeios}>
          <div className={styles.passeio}>
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
                  maxCharacters="maxCharacters20"
                  color="black"
                  content="Lorem ipsum dolor sit amet consectetur adipiscing elit hac habitant facilisi, sodales inceptos turpis mollis convallis risus ornare vehicula elementum eleifend, aliquet maecenas litora cubilia vitae interdum habitasse posuere ex."
                />
              </div>
              <div className={`${styles.mobile} ${styles.buttonMobileCard}`}>
                <Button label="Reservar" type="red" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_1.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_1.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="red" />
            </div>
          </div>
          <div className={styles.passeio}>
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
                    label="Gastronomia"
                    type="redAccent"
                    icon={LogoRed}
                    border="squareRound"
                    size="small"
                  />
                </div>
                <TextContent
                  type="small"
                  maxCharacters="maxCharacters20"
                  color="black"
                  content="Lorem ipsum dolor sit amet consectetur adipiscing elit hac habitant facilisi, sodales inceptos turpis mollis convallis risus ornare vehicula elementum eleifend, aliquet maecenas litora cubilia vitae interdum habitasse posuere ex."
                />
              </div>
              <div className={`${styles.mobile} ${styles.buttonMobileCard}`}>
                <Button label="Reservar" type="red" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_2.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_2.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="red" />
            </div>
          </div>
          <div className={styles.passeio}>
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
                    label="Show"
                    type="redAccent"
                    icon={LogoRed}
                    border="squareRound"
                    size="small"
                  />
                </div>
                <TextContent
                  type="small"
                  maxCharacters="maxCharacters20"
                  color="black"
                  content="Lorem ipsum dolor sit amet consectetur adipiscing elit hac habitant facilisi, sodales inceptos turpis mollis convallis risus ornare vehicula elementum eleifend, aliquet maecenas litora cubilia vitae interdum habitasse posuere ex."
                />
              </div>
              <div className={`${styles.mobile} ${styles.buttonMobileCard}`}>
                <Button label="Reservar" type="red" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_3.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_3.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="red" />
            </div>
          </div>
          <div className={styles.passeio}>
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
                    label="Reveillon"
                    type="redAccent"
                    icon={LogoRed}
                    border="squareRound"
                    size="small"
                  />
                </div>
                <TextContent
                  type="small"
                  maxCharacters="maxCharacters20"
                  color="black"
                  content="Lorem ipsum dolor sit amet consectetur adipiscing elit hac habitant facilisi, sodales inceptos turpis mollis convallis risus ornare vehicula elementum eleifend, aliquet maecenas litora cubilia vitae interdum habitasse posuere ex."
                />
              </div>
              <div className={`${styles.mobile} ${styles.buttonMobileCard}`}>
                <Button label="Reservar" type="red" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_4.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_4.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="red" />
            </div>
          </div>
        </div>
        <div className={styles.paginacao}>
          <ArrowLeft />
          <div className={`${styles.pagina} ${styles.paginaSelecionada}`}>
            1
          </div>
          <div className={styles.pagina}>2</div>
          <div className={styles.pagina}>3</div>
          <div className={styles.pagina}>4</div>
          <div className={styles.pagina}>5</div>
          <ArrowRight />
        </div>
      </div>

      <Footer labelColor="redWhite" />
    </div>
  );
};

export default Hospitality;
