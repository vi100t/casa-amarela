import React from 'react';
import styles from './Piawood.module.css';
import Header from '../Utils/Header';
import LogoGreen from '../../Assets/logo_label_green.svg?react';
import LogoBlue from '../../Assets/logo_label_blue.svg?react';
import TextContent from '../Utils/TextContent';
import Label from '../Utils/Label';
import Footer from '../Utils/Footer';
import Button from '../Utils/Button';
import Select from '../Utils/Select';
import Lupa from '../../Assets/magnifying_glass_blue.svg?react';
import ArrowLeft from '../../Assets/arrow_left_paginacao_blue.svg?react';
import ArrowRight from '../../Assets/arrow_right_paginacao_blue.svg?react';

const Piawood = () => {
  return (
    <div className={styles.piawoodBackground}>
      <Header
        buttonColor="greenBlue"
        className={styles.header}
        mobileButton="transparent30Blue"
        logo={LogoGreen}
      ></Header>
      <div className={`${styles.container} ${styles.piawood}`}>
        <img
          className={styles.desktop}
          src="src/Assets/piawood_banner.png"
          alt="Piawood Banner"
        />
        <img
          className={styles.mobile}
          src="src/Assets/piawood_banner_mobile.png"
          alt="Piawood Banner"
        />
      </div>
      <div className={styles.piawoodInfo}>
        <div className={styles.mobile}>
          <img src="src/Assets/piawood_bird_mobile.png" alt="Passáro" />
        </div>
        <div className={styles.desktop}>
          <img src="src/Assets/piawood_bird.png" alt="Passáro" />
        </div>
        <div className={styles.desktop}>
          <TextContent
            color="black"
            type="medium"
            align="left"
            maxCharacters="maxCharacters30"
            content="Um hub cultural de comunicação, marketing e produção focado no fomento regional e cultural. Este espaço atua como curador e plataforma de crescimento para talentos locais. Além de promover eventos e experiências, que impulsionaram a cena musical, artística, esportiva e gastronômica da região."
          ></TextContent>
        </div>
        <div className={styles.mobile}>
          <TextContent
            color="black"
            type="small"
            align="left"
            maxCharacters="maxCharacters30"
            content="Um hub cultural de comunicação, marketing e produção focado no fomento regional e cultural. Este espaço atua como curador e plataforma de crescimento para talentos locais. Além de promover eventos e experiências, que impulsionaram a cena musical, artística, esportiva e gastronômica da região."
          ></TextContent>
        </div>
      </div>

      <div className={styles.cardsGroup}>
        <div className={styles.cards}>
          <LogoBlue />
          Shows
        </div>
        <div className={styles.cards}>
          <LogoBlue />
          Workshops
        </div>
        <div className={styles.cards}>
          <LogoBlue />
          Exposições
        </div>
        <div className={styles.cards}>
          <LogoBlue />
          Gastronomia
        </div>
        <div className={styles.cards}>
          <LogoBlue />
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
          <Button type="greenBlue" label="Buscar" icon={Lupa}></Button>
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
                    type="green"
                    icon={LogoBlue}
                    border="squareRound"
                    size="small"
                  />
                  <Label
                    label="Esporte"
                    type="blue"
                    icon={LogoGreen}
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
                <Button label="Reservar" type="green" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_1.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_1.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="green" />
            </div>
          </div>
          <div className={styles.passeio}>
            <div className={styles.passeioContainer}>
              <div className={styles.passeioInfo}>
                <div className={styles.passeioLabels}>
                  <Label
                    label="Hospitality"
                    type="green"
                    icon={LogoBlue}
                    border="squareRound"
                    size="small"
                  />
                  <Label
                    label="Gastronomia"
                    type="blue"
                    icon={LogoGreen}
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
                <Button label="Reservar" type="green" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_3.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_3.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="green" />
            </div>
          </div>
          <div className={styles.passeio}>
            <div className={styles.passeioContainer}>
              <div className={styles.passeioInfo}>
                <div className={styles.passeioLabels}>
                  <Label
                    label="Hospitality"
                    type="green"
                    icon={LogoBlue}
                    border="squareRound"
                    size="small"
                  />
                  <Label
                    label="Show"
                    type="blue"
                    icon={LogoGreen}
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
                <Button label="Reservar" type="green" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_3.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_3.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="green" />
            </div>
          </div>
          <div className={styles.passeio}>
            <div className={styles.passeioContainer}>
              <div className={styles.passeioInfo}>
                <div className={styles.passeioLabels}>
                  <Label
                    label="Hospitality"
                    type="green"
                    icon={LogoBlue}
                    border="squareRound"
                    size="small"
                  />
                  <Label
                    label="Reveillon"
                    type="blue"
                    icon={LogoGreen}
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
                <Button label="Reservar" type="green" />
              </div>
              <div className={`${styles.passeioImg} ${styles.desktop}`}>
                <img src="src/Assets/passeio_4.png" alt="Passeio" />
              </div>
            </div>
            <div className={`${styles.passeioImg} ${styles.mobile}`}>
              <img src="src/Assets/passeio_4.png" alt="Passeio" />
            </div>
            <div className={`${styles.desktop}`}>
              <Button label="Reservar" type="green" />
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
      <Footer backgroundColor="blue" labelColor="greenWhite" />
    </div>
  );
};

export default Piawood;
