import React from "react";
import {
  IonContent
} from "@ionic/react";
import "./Inscription.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const Inscription: React.FC = () => {
  const history = useHistory();

  const ListeTerrain = () => {
    history.push("/ListeTerrain");
  };

  return (
    <IonContent>
      <div id="body">
        <div id="i-container">
          <div id="back-inscri">
            <h3>S'inscrire</h3>
            <div>
              <p>
                <input type="text" placeholder="Nom" />
              </p>
              <p>
                <input type="text" placeholder="Prenom" />
              </p>
              <p>
                <input type="mail" placeholder="Email" />
              </p>
              <p>
                <input type="pwd" placeholder="Mot de passe" />
              </p>
              <p>
                <input type="pwd" placeholder="Retaper mot de passe" />
              </p>
              <br />
              <Bouton onClick={ListeTerrain}>Valider</Bouton>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default Inscription;
