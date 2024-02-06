import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Login.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const Login: React.FC = () => {
  const history = useHistory();

  const ListeTerrain = () => {
    history.push("/ListeTerrain");
  };

  return (
<IonContent>
    <div id="body">
      <div id="log-container">
        <div id="log-back">
          <h1>Se connecter</h1>
        <div>
          <p>
            <input type="mail" name="mail" id="mail" placeholder="Email" />
          </p>
          <p>
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Mot de passe"
            />
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

export default Login;
