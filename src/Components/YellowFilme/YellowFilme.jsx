import React from 'react';
import styles from './YellowFilme.module.css';
import Header from '../Utils/Header';
import LogoSea from '../../Assets/logo_sea.svg?react';
import LogoOrange from '../../Assets/logo_label_orange.svg?react';
import LogoOrangeAccent from '../../Assets/logo_label_orange_accent.svg?react';
import PlusCircle from '../../Assets/plus_circle.svg?react';
import House from '../../Assets/icon_house.svg?react';
import Vision from '../../Assets/icon_vision.svg?react';
import Values from '../../Assets/icon_values.svg?react';
import TextContent from '../Utils/TextContent';
import Label from '../Utils/Label';
import Footer from '../Utils/Footer';
import LogoLabelOrange from '../../Assets/logo_label_orange.svg?react';

const YellowFilme = () => {
  return (
    <div className={`container`}>
      <Header
        buttonColor="orangeAccent"
        className={styles.header}
        mobileButton="transparent30OrangeAccent"
        logo={LogoOrange}
      ></Header>
      <div className={styles.yellowFilme}>
        <img
          className={styles.desktop}
          src="src/Assets/yellow_filme_banner.png"
          alt="Banner Yellow Filme"
        />
        <img
          className={styles.mobile}
          src="src/Assets/yellow_filme_banner_mobile.png"
          alt="Banner Yellow Filme"
        />
      </div>
      <div className={styles.yellowFilme}>
        <img
          className={styles.desktop}
          src="src/Assets/video_360.png"
          alt="Banner Video 360"
        />
        <img
          className={styles.mobile}
          src="src/Assets/video_360_mobile.png"
          alt="Banner Video 360"
        />
      </div>

      <div className={styles.yellowFilmeHist}>
        <TextContent
          content="Contando histórias autênticas do Piauí através de uma lente criativa, a Yellow Filme conecta marcas à cultura local e promove talentos e paisagens regionais. Como voz audiovisual da Casa Amarela, valoriza e amplifica a essência piauiense."
          type="black"
        />
      </div>
      <div className={styles.yellowFilmePerfil}>
        <div className={styles.yellowFilePerfilContent}>
          <div>
            <Label
              label="Yellow Filme"
              type="orangeAccent"
              icon={LogoOrangeAccent}
              border="squareRound"
            />
          </div>

          <TextContent
            content="A Yellow Filme é uma produtora audiovisual que promove a Casa Amarela e o hub cultural Piawood, criando conteúdos para marketing e eventos. Também oferece serviços especializados para marcas que buscam produções no Piauí, destacando o cenário e a cultura local. Com foco na essência piauiense, entrega resultados criativos e autênticos."
            color="brown"
            type="medium"
            maxCharacters="maxCharacters40"
          />
        </div>
        <div className={styles.yellowFilmeImg}>
          <LogoSea />
        </div>
      </div>
      <div className={styles.yellowFilmeCamera}>
        <img src="src/Assets/yellow_filme.png" alt="Yellow Filme" />
      </div>
      <div className={styles.yellowFilmeMissao}>
        <div className={styles.yellowFilmeMissaoItem}>
          <div>
            <House />
          </div>
          <div>
            Missão
            <div>
              A nossa missão e propósito acima de tudo é:  enaltecer os artistas
              locais que são a população e moradores envolvidos na Barrinha e
              região.
            </div>
          </div>
        </div>
        <div className={styles.yellowFilmeMissaoItem}>
          <div>
            <Vision />
          </div>
          <div>
            Visão
            <div>
              Ter como colaboradores empresas e marcas que entendam e acreditem
              no nosso lifestyle. E assim traga progresso + valorização da
              comunidade barrinhense e região. 
            </div>
          </div>
        </div>
        <div className={styles.yellowFilmeMissaoItem}>
          <div>
            <Values />
          </div>
          <div>
            Valores
            <div>
              Respeitar e enaltecer a essência do vilarejo Barrinha,PI. Sem
              ferir costumes, crenças e princípios. Respeitar e enaltecer a
              essência de cada participante do projeto. Tendo sempre como
              prioridade a verdade e a transparência.
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.yellowFilmesCardsGroup}>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Roteiros
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Produção
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Edição
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Pós Produção
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Efeitos Visuais
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Lorem Ipsum
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Lorem Ipsum
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Lorem Ipsum
        </div>
        <div className={styles.yellowFilmesCards}>
          <LogoLabelOrange />
          Lorem Ipsum
        </div>
        <div className={styles.yellowFilmesCards}>
          <PlusCircle />E mais!
        </div>
      </div> */}
      <div className={styles.videoBanner}>
        <img src="src/Assets/video_banner.png" alt="Video Banner" />
      </div>
      {/* <div className={styles.equipe}>
        Equipe
        <div className={styles.membrosEquipe}>
          <div className={styles.membroEquipe}>
            <div className={styles.membroEquipeImg}>
              <img
                className={styles.desktop}
                src="src/Assets/perfil_picture.png"
                alt="Perfil sem foto"
              />
              <img
                className={styles.mobile}
                src="src/Assets/perfil_picture_mobile.png"
                alt="Perfil sem foto"
              />
            </div>
            <div className={styles.membroEquipeDesc}>
              Esther Timmon
              <div className={`${styles.opacity65} ${styles.desktop}`}>
                dirigiu o projeto Piawood teste 2023,atuou nas series de
                streaming Boca a Boca (Netflix), Da Ponte Pra Lá ( Max), entre
                outras. Martha Ribeiro dirigiu o projeto Piawood teste 2023
              </div>
              <div className={`${styles.opacity65} ${styles.mobile}`}>
                dirigiu o projeto Piawood teste 2023,atuou nas series de
                streaming Boca a Boca (Netflix), Da Ponte Pra Lá ( Max), entre
                outras.
              </div>
            </div>
          </div>
          <div className={styles.membroEquipe}>
            <div className={styles.membroEquipeImg}>
              <img
                className={styles.desktop}
                src="src/Assets/perfil_picture.png"
                alt="Perfil sem foto"
              />
              <img
                className={styles.mobile}
                src="src/Assets/perfil_picture_mobile.png"
                alt="Perfil sem foto"
              />
            </div>
            <div className={styles.membroEquipeDesc}>
              Erotidesnai
              <div className={`${styles.opacity65} ${styles.desktop}`}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac
                habitant facilisi, sodales inceptos turpis mollis convallis
                risus ornare vehicula elementum eleifend, aliquet maecenas
                litora cubilia vitae interdum habitasse posuere ex.
              </div>
              <div className={`${styles.opacity65} ${styles.mobile}`}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac
                habitant facilisi, sodales inceptos turpis mollis convallis
                risus ornare.
              </div>
            </div>
          </div>
          <div className={styles.membroEquipe}>
            <div className={styles.membroEquipeImg}>
              <img
                className={styles.desktop}
                src="src/Assets/perfil_picture.png"
                alt="Perfil sem foto"
              />
              <img
                className={styles.mobile}
                src="src/Assets/perfil_picture_mobile.png"
                alt="Perfil sem foto"
              />
            </div>
            <div className={styles.membroEquipeDesc}>
              Nome
              <div className={`${styles.opacity65} ${styles.desktop}`}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac
                habitant facilisi, sodales inceptos turpis mollis convallis
                risus ornare vehicula elementum eleifend, aliquet maecenas
                litora cubilia vitae interdum habitasse posuere ex.
              </div>
              <div className={`${styles.opacity65} ${styles.mobile}`}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit hac
                habitant facilisi, sodales inceptos turpis mollis convallis
                risus ornare.
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer labelColor="redWhite" />
    </div>
  );
};

export default YellowFilme;
