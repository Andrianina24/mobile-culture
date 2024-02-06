import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Terrain.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const ListeTerrain: React.FC = () => {
  const history = useHistory();

  const ListeTerrain = () => {
    history.push("/ListeTerrain");
  };

  return (
    <IonContent>
      <div id="head">
        <div id="l-header">
          <a className="log-a" href="/login">
            Se Déconnecter
          </a>
          <a href="/Parametre"><img src="src/assets/img/icon.png" alt=""/></a>

        </div>
        <form action="modifTerrain.html"></form>
        <div id="l-container">
          <div id="back-liste">
            <h4>Liste des Terrains</h4>

            {/* contenu */}
            <div id="l-bloc">
              <div id="img">
                <img
                  className="petit1"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
                <img
                  className="grand"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
                <img
                  className="petit2"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
              </div>
              <p>Terrain</p>
              <p>Description</p>
              <p>Localisation</p>
              <br />
              <Bouton onClick={ListeTerrain}>Valider</Bouton>
            </div>

            <div id="l-bloc">
              <div id="img">
                <img
                  className="petit1"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
                <img
                  className="grand"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
                <img
                  className="petit2"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
              </div>
              <p>Terrain</p>
              <p>Description</p>
              <p>Localisation</p>
              <br />
              <Bouton onClick={ListeTerrain}>Valider</Bouton>
            </div>

            <div id="l-bloc">
              <div id="img">
                <img
                  className="petit1"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
                <img
                  className="grand"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
                <img
                  className="petit2"
                  src="src/assets/img/culture.jpg"
                  alt=""
                />
              </div>
              <p>Terrain</p>
              <p>Description</p>
              <p>Localisation</p>
              <br />
              <Bouton onClick={ListeTerrain}>Valider</Bouton>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default ListeTerrain;
