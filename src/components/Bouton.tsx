import React, { FC, ReactNode, CSSProperties, MouseEvent } from 'react';
import { IonButton } from '@ionic/react';
import './Bouton.css';

interface BoutonProps {
  onClick?: (event: MouseEvent<HTMLIonButtonElement>) => void;
  children: ReactNode;
  style?: CSSProperties;
}

const Bouton: FC<BoutonProps> = ({ onClick, children, style }) => {
  return (
    <IonButton onClick={onClick} style={style} className="bouton-style">
      {children}
    </IonButton>
  );
};

export default Bouton;
