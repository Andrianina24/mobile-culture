import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./CultureParcelle.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";

const CultureParcelle: React.FC = () => {
  const history = useHistory();

  const CultureParcelle = () => {
    history.push("/CultureParcelle");
  };

  return(
  <IonContent>
        <div id="culture-container">
            <div id='culture-back'>
                <h1>Ajout Culture sur Parcelle</h1>
            <div>
                <select name="" id="">
                    <option value="">Parcelle</option>
                </select>
        <br/>
        <br/>
            <select name="" id="">
                <option value="">Type de culture possible</option>
            </select>   
        <br/>
        <br/>

        <Bouton onClick={CultureParcelle}>Valider</Bouton>
    </div>
        </div>
    </div>
  </IonContent>
  );
  };

export default CultureParcelle;