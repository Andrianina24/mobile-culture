import React from "react";
import {
  IonContent
} from "@ionic/react";
import "./Parametre.css";

const Parametre: React.FC = () => {
  return (
<IonContent>
    <div id="p-all">
      <div id="l2-header">
        <a className="log-a" href="/login">Se Déconnecter</a>
        <a href="/Parametre"><img src="src/assets/img/icon.png" alt=""/></a>

      </div>
      <div id="p-container">
        <h4>Paramètres</h4>
        <div id="back">
          <div>
            <div className="liens">
              <a href="/ajoutTerrain">Ajout Terrain</a>
            </div>
            <div className="liens">
              <a href="/photoTerrain">Ajouter Photo Terrain</a>
            </div>
            <div className="liens">
              <a href="/ajoutParcelle">Ajouter une Parcelle</a>
            </div>
            <div className="liens">
              <a href="/cultureParcelle">Ajouter Culture sur Parcelle</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</IonContent>
  );
};

export default Parametre;
