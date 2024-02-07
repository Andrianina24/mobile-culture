import React from "react";
import {
  IonContent
} from "@ionic/react";
import "./Photo.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const PhotoTerrain: React.FC = () => {
  const history = useHistory();

  const PhotoTerrain = () => {
    history.push("/ListeTerrain");
  };

  return (
    <IonContent>
      <div id="img-container">
        <div id="back-img">
          <h1>Ajout Photo Terrain</h1>
          <div>
            <select name="" id="">
              <option value="">Choisir un terrain</option>
            </select>
            <br />
            <br />
            <select name="choisirPhoto" id="choisirPhoto">
              <option value="">Choisir une photo</option>
            </select>
          </div>
          <br />
          <Bouton onClick={PhotoTerrain}>Valider</Bouton>
        </div>
      </div>
    </IonContent>
  );
};

export default PhotoTerrain;
