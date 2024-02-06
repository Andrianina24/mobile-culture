import React, { FC, ReactNode } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Bouton from '../components/Bouton';

interface CustomPageProps {
  menuContent: ReactNode;
  menuURL: ReactNode;
}

const Menu: FC<CustomPageProps> = ({ menuContent,menuURL}) =>  {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">{menuURL}</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">{menuContent}</IonContent>
      </IonPage>
    </>
  );
}

export default Menu;