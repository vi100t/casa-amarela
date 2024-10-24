import React from 'react';
import styles from './Card.module.css';
import Label from './Label';
import Button from './Button';
import CirclePlus from '../../Assets/circle_plus.svg?react';
import Waves from '../../Assets/waves.svg?react';
import LocationPin from '../../Assets/location_pin.svg?react';
import LogoLabelRed from '../../Assets/logo_label_red.svg?react';
import LogoLabelRedAccent from '../../Assets/logo_label_red_accent.svg?react';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.labelContainer}>
        <Label
          size="small"
          type="red"
          label="Hospitality"
          icon={LogoLabelRedAccent}
        />
        <Label
          size="small"
          type="reverse-red"
          label="Casa Rio"
          icon={LogoLabelRed}
        />
      </div>
      <div className={styles.containerImg}>
        <img
          src="src\Assets\casa_rio_hospitality_card.png"
          alt="Varanda Casa de Praia"
        />
        <div className={styles.labelContainerImg}>
          <Label
            size="small"
            type="white"
            label="Barrinha"
            icon={LocationPin}
          />
          <Label
            size="small"
            type="white"
            label="Visite a maré alta"
            icon={Waves}
          />
          <Label size="small" type="white" icon={CirclePlus} iconOnly={true} />
        </div>
      </div>
      <Button label="Reservar" type="red" />
    </div>
  );
};

export default Card;
