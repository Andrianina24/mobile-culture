import React from "react";
import {
  IonContent
} from "@ionic/react";
import "./Photo.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const ModifTerrain: React.FC = () => {
  const history = useHistory();

  const ListeTerrain = () => {
    history.push("/ListeTerrain");
  };

  return(
<IonContent>
        <div id="img-container">
            <div id='back-img'>
                <h1>Modifier Terrain</h1>
            <div>
                <p><input type="text" placeholder="Description du terrain"/></p>
                <p><input type="number" placeholder="Nombre parcelle"/></p>
                <br/>
                <Bouton onClick={ListeTerrain}>Valider</Bouton>
            </div>
            </div>
        </div>
</IonContent>
    );
};

export default ModifTerrain;