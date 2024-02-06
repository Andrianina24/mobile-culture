import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Ajout.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const AjoutParcelle: React.FC = () => {
  const history = useHistory();

  const navigateToSecondPage = () => {
    history.push("/valider");
  };

  return (
    <IonContent>
      <div id="ajout-container">
        <div id="ajout-back">
          <h1>Ajout parcelle</h1>
          <div>
            <select name="" id="">
              <option value="">Terrain</option>
            </select>
            <br />
            <p>
              <input type="number" placeholder="Rendement" />
            </p>
            <p>
              <input type="number" placeholder="Longueur" />
            </p>
            <p>
              <input type="number" placeholder="Largeur" />
            </p>
            <br />
            <Bouton onClick={navigateToSecondPage}>Valider</Bouton>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default AjoutParcelle;
