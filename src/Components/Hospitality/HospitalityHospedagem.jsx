import React from "react";
import styles from "./Hospitality.module.css";
import Header from "../Utils/Header";
import Lupa from "../../Assets/magnifying_glass_white.svg?react";
import ArrowLeft from "../../Assets/arrow_left_paginacao.svg?react";
import ArrowRight from "../../Assets/arrow_right_paginacao.svg?react";
import TextContent from "../Utils/TextContent";
import Label from "../Utils/Label";
import Footer from "../Utils/Footer";
import Button from "../Utils/Button";
import Select from "../Utils/Select";
import LogoRed from "../../Assets/logo_label_red.svg?react";
import LogoRedAccent from "../../Assets/logo_label_red_accent.svg?react";
import LocationPin from "../../Assets/location_pin.svg?react";
import Eye from "../../Assets/icon_eye.svg?react";
import Moon from "../../Assets/icon_moon.svg?react";
import Star from "../../Assets/icon_star_yellow.svg?react";
import People from "../../Assets/icon_people.svg?react";
import DoubleBed from "../../Assets/icon_double_bed.svg?react";
import Bed from "../../Assets/icon_bed.svg?react";
import Fridge from "../../Assets/icon_fridge.svg?react";
import Pool from "../../Assets/icon_pool.svg?react";
import Wifi from "../../Assets/icon_wifi.svg?react";
import SnowFlake from "../../Assets/icon_snowflake.svg?react";
import Balcony from "../../Assets/icon_balcony.svg?react";
import MagnifyingGlass from "../../Assets/magnifying_glass_white.svg?react";
import PlusCircle from "../../Assets/plus_circle_gray.svg?react";
import casasData from "../../Data/casas.json";
import { NavLink } from "react-router-dom";
import Title from "../Utils/Title";
const HospitalityHospedagem = () => {
  const [showLocation, setLocation] = React.useState("true");
  const casas = casasData.map((casa) => {
    return (
      <div className={styles.containerCasas} key={casa.nome}>
        <div className={styles.desktop}>
          <Title label={casa.nome} type="red" />
        </div>

        <div className={styles.casas}>
          <div className={styles.imgLabels}>
            <img
              className={styles.desktop}
              src={casa.imagens[0]}
              alt="Casa Rio"
            />
            <img
              className={styles.mobile}
              src="src/Assets/casa_rio_hospitality_mobile.png"
              alt="Casa Rio"
            />
            <div className={`${styles.mobile} ${styles.containerBusca}`}>
              <Select
                input="select"
                placeholder="Casa Rio"
                icon="logo"
              ></Select>
              <div>
                <Button label="Buscar" type="red" icon={MagnifyingGlass} />
              </div>
            </div>
            <div className={`${styles.labels} ${styles.desktop}`}>
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
            <div className={`${styles.labels} ${styles.mobile}`}>
              <Label
                label="Hospitality"
                type="red"
                border="squareRound"
                icon={LogoRedAccent}
                multiple="multiple"
              />
              <Label
                label="Barrinha"
                type="white"
                border="squareRound"
                icon={LocationPin}
                multiple="multiple"
              />
              <Label
                label="Vista para Lagoa do Santana"
                type="white"
                border="squareRound"
                icon={Eye}
                multiple="multiple"
              />
              <Label
                label="Vista para Lagoa do Santana"
                type="white"
                border="squareRound"
                icon={Moon}
                multiple="multiple"
              />
              <Label
                label="9 pessoas"
                type="white"
                border="squareRound"
                icon={People}
                multiple="multiple"
              />
              <Label
                label="Cama de Casal"
                type="white"
                border="squareRound"
                icon={DoubleBed}
                multiple="multiple"
              />
              <Label
                label="Cama de Solteiro"
                type="white"
                border="squareRound"
                icon={Bed}
                multiple="multiple"
              />
              <Label
                label="Cozinha Completa"
                type="white"
                border="squareRound"
                icon={Fridge}
                multiple="multiple"
              />
              <Label
                label="Piscina"
                type="white"
                border="squareRound"
                icon={Pool}
                multiple="multiple"
              />
              <Label
                label="WiFi Fibra Ótica"
                type="white"
                border="squareRound"
                icon={Wifi}
                multiple="multiple"
              />
              <Label
                label="Ar-Condicionado"
                type="white"
                border="squareRound"
                icon={SnowFlake}
                multiple="multiple"
              />
              <Label
                label="Varanda"
                type="white"
                border="squareRound"
                icon={Balcony}
                multiple="multiple"
              />
            </div>
          </div>
          <div className={`${styles.galeria} ${styles.desktop}`}>
            <iframe
              width="100%"
              height="100%"
              src={`${
                casa.video
              }?autoplay=1&controls=0&fs=0&loop=0&color=white&playlist=${
                casa.video.split("embed/")[1]
              }`}
              title="YouTube video player"
            ></iframe>
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
                <Title
                  label="COMODIDADES"
                  type="black"
                  size="small"
                  align="left"
                />
                {casa.comodidades.map((c) => {
                  return (
                    <TextContent
                      key={c}
                      type="medium"
                      color="blackBlack"
                      content={c}
                    ></TextContent>
                  );
                })}
              </div>
            </div>
            <div className={styles.detalheItem}>
              <Title label="descrição" type="black" size="small" align="left" />
              <TextContent
                maxCharacters="maxCharacters60"
                type="medium"
                color="blackBlack"
                content={casa.descricao}
              />
            </div>
          </div>
          <div className={styles.localizacaoInformacoes}>
            <div className={styles.menuCard}>
              <span
                className={
                  showLocation.toString() == "false" && styles.unselected
                }
                onClick={() => setLocation((prev) => !prev)}
              >
                Localização
              </span>
              <span
                className={
                  showLocation.toString() == "true" && styles.unselected
                }
                onClick={() => setLocation((prev) => !prev)}
              >
                Informações
              </span>
              <Label
                label=""
                iconOnly={true}
                type="redReverse"
                icon={PlusCircle}
                square="squareRound"
                size="small"
              />
            </div>
            {showLocation && (
              <div className={styles.localizacao}>
                <div>
                  <Label
                    label="Barrinha"
                    size="small"
                    square="squareRound"
                    icon={LocationPin}
                    type="redReverse"
                  />
                </div>
                <div className={styles.distancia}>00m até a praia X</div>
                <div className={styles.mapa}>
                  <img src="src/Assets/map_card.png" alt="Mapa" />
                </div>
              </div>
            )}

            {!showLocation && (
              <div className={styles.informacoes}>
                <div>
                  <Label
                    label="Hospedagem"
                    size="small"
                    square="squareRound"
                    type="redReverse"
                  />
                </div>
                <div>Check In 15h / Check Out 11h</div>
                <div>
                  <Label
                    label="Restrições Gerais"
                    size="small"
                    square="squareRound"
                    type="redReverse"
                  />
                </div>
                <div>{casa.restricoesGerais}</div>
                <div>
                  <Label
                    label="Restrições da Casa"
                    size="small"
                    square="squareRound"
                    type="redReverse"
                  />
                </div>
                <div>{casa.restricoesCasa}</div>
              </div>
            )}
            <Button label="Fale Conosco" type="red" />
          </div>
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
        <div>Hospedagens</div>
        <div className={styles.unselected}>
          <NavLink to="/Hospitality">Passeios</NavLink>
        </div>
      </div>
      <div className={styles.containerCasas}>
        <div className={styles.desktop}>
          <Title label="CASA RIO" type="red" />
        </div>

        <div className={styles.casas}>
          <div className={styles.imgLabels}>
            <img
              className={styles.desktop}
              src="src/Assets/casa_rio_hospitality.png"
              alt="Casa Rio"
            />
            <img
              className={styles.mobile}
              src="src/Assets/casa_rio_hospitality_mobile.png"
              alt="Casa Rio"
            />
            <div className={`${styles.mobile} ${styles.containerBusca}`}>
              <Select
                input="select"
                placeholder="Casa Rio"
                icon="logo"
              ></Select>
              <div>
                <Button label="Buscar" type="red" icon={MagnifyingGlass} />
              </div>
            </div>
            <div className={`${styles.labels} ${styles.desktop}`}>
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
            <div className={`${styles.labels} ${styles.mobile}`}>
              <Label
                label="Hospitality"
                type="red"
                border="squareRound"
                icon={LogoRedAccent}
                multiple="multiple"
              />
              <Label
                label="Barrinha"
                type="white"
                border="squareRound"
                icon={LocationPin}
                multiple="multiple"
              />
              <Label
                label="Vista para Lagoa do Santana"
                type="white"
                border="squareRound"
                icon={Eye}
                multiple="multiple"
              />
              <Label
                label="Vista para Lagoa do Santana"
                type="white"
                border="squareRound"
                icon={Moon}
                multiple="multiple"
              />
              <Label
                label="9 pessoas"
                type="white"
                border="squareRound"
                icon={People}
                multiple="multiple"
              />
              <Label
                label="Cama de Casal"
                type="white"
                border="squareRound"
                icon={DoubleBed}
                multiple="multiple"
              />
              <Label
                label="Cama de Solteiro"
                type="white"
                border="squareRound"
                icon={Bed}
                multiple="multiple"
              />
              <Label
                label="Cozinha Completa"
                type="white"
                border="squareRound"
                icon={Fridge}
                multiple="multiple"
              />
              <Label
                label="Piscina"
                type="white"
                border="squareRound"
                icon={Pool}
                multiple="multiple"
              />
              <Label
                label="WiFi Fibra Ótica"
                type="white"
                border="squareRound"
                icon={Wifi}
                multiple="multiple"
              />
              <Label
                label="Ar-Condicionado"
                type="white"
                border="squareRound"
                icon={SnowFlake}
                multiple="multiple"
              />
              <Label
                label="Varanda"
                type="white"
                border="squareRound"
                icon={Balcony}
                multiple="multiple"
              />
            </div>
          </div>
          <div className={`${styles.galeria} ${styles.desktop}`}>
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
                <Title
                  label="COMODIDADES"
                  type="black"
                  size="small"
                  align="left"
                />
                <div>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="vista para a Lagoa do Santana"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="3 camas de casal"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="3 camas de solteiro"
                  ></TextContent>
                  <TextContent
                    type="blackBlack"
                    content="3 suítes"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="1 dormitório com banheiro exclusivo ao lado"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="Capacidade para até 9 pessoas."
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="Cozinha completa"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="sala de estar"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="varanda"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="piscina"
                  ></TextContent>
                  <TextContent
                    type="medium"
                    color="blackBlack"
                    content="Wi-Fi fibra óptica"
                  ></TextContent>
                </div>
              </div>
            </div>
            <div className={styles.detalheItem}>
              <Title label="descrição" type="black" size="small" align="left" />
              <TextContent
                maxCharacters="maxCharacters60"
                type="medium"
                color="blackBlack"
                content="A Casa Rio oferece 4 dormitórios, sendo 3 suítes e 1 dormitório com banheiro exclusivo ao lado. Todos os quartos têm ar-condicionado, acomodando confortavelmente até 9 pessoas. A casa possui uma varanda espaçosa, perfeita para momentos de lazer e convivência, além de uma cozinha completa, sala de estar e piscina com uma vista espetacular da Lagoa do Santana."
              />
            </div>
          </div>
          <div className={styles.localizacaoInformacoes}>
            <div className={styles.menuCard}>
              <span
                className={
                  showLocation.toString() == "false" && styles.unselected
                }
                onClick={() => setLocation((prev) => !prev)}
              >
                Localização
              </span>
              <span
                className={
                  showLocation.toString() == "true" && styles.unselected
                }
                onClick={() => setLocation((prev) => !prev)}
              >
                Informações
              </span>
              <Label
                label=""
                iconOnly={true}
                type="redReverse"
                icon={PlusCircle}
                square="squareRound"
                size="small"
              />
            </div>
            {showLocation && (
              <div className={styles.localizacao}>
                <div>
                  <Label
                    label="Barrinha"
                    size="small"
                    square="squareRound"
                    icon={LocationPin}
                    type="redReverse"
                  />
                </div>
                <div className={styles.distancia}>00m até a praia X</div>
                <div className={styles.mapa}>
                  <img src="src/Assets/map_card.png" alt="Mapa" />
                </div>
              </div>
            )}

            {!showLocation && (
              <div className={styles.informacoes}>
                <div>
                  <Label
                    label="Hospedagem"
                    size="small"
                    square="squareRound"
                    type="redReverse"
                  />
                </div>
                <div>Check In 15h / Check Out 11h</div>
                <div>
                  <Label
                    label="Restrições Gerais"
                    size="small"
                    square="squareRound"
                    type="redReverse"
                  />
                </div>
                <div>Check In 15h / Check Out 11h</div>
                <div>
                  <Label
                    label="Restrições da Casa"
                    size="small"
                    square="squareRound"
                    type="redReverse"
                  />
                </div>
                <div>
                  Lorem Ipsum;
                  <br />
                  Lorem Ipsum;
                  <br />
                  Lorem Ipsum;
                </div>
              </div>
            )}
            <Button label="Fale Conosco" type="red" />
          </div>
        </div>
      </div>
      {casas}
      <Footer backgroundColor="redAccent" labelColor="redWhite" />
    </div>
  );
};

export default HospitalityHospedagem;
