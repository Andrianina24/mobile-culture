import React from "react";
import {
  IonContent
} from "@ionic/react";
import "./Ajout.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const AjoutTerrain: React.FC = () => {
  const history = useHistory();

  const AjoutTerrain = () => {
    history.push("/AjoutTerrain");
  };

  return (
    <IonContent>
      <form action="listeTerrain.html"></form>
      <div id="ajout-container">
        <div id="ajout-back">
          <h1>Ajout terrain</h1>
          <div>
            <p>
              <input type="text" placeholder="Description" />
            </p>
            <p>
              <input type="text" placeholder="Localisation" />
            </p>
            <p>
              <input type="number" placeholder="Nombre parcelle" />
            </p>
          </div>
          <br />
          <Bouton onClick={AjoutTerrain}>Valider</Bouton>
        </div>
      </div>
    </IonContent>
  );
};

export default AjoutTerrain;
