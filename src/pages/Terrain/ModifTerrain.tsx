import React, { useState } from "react";
import { IonContent } from "@ionic/react";
import "./Photo.css";
import { useHistory, useParams } from "react-router-dom";
import Bouton from "../../components/Bouton";
import { updateTerrain,Terrain } from "../../springApi";

const ModifTerrain: React.FC = () => {
  const history = useHistory();
  const { idTerrain } = useParams<{ idTerrain: string }>(); // Extract idTerrain from URL
  const [description, setDescription] = useState("");
  const [nbParcelle, setNbParcelle] = useState(0);

  const handleUpdateTerrain = async () => {
    try {
      const updatedTerrain: Terrain = {
        description: description,
        nbparcelle: nbParcelle,
        // Add optional properties with default values if needed
        localisation: "", // Default value for localisation
        id_Utilisateur: 0, // Default value for id_Utilisateur
        validation: 0, // Default value for validation
      };
      const response = await updateTerrain(parseInt(idTerrain), updatedTerrain); // Parse idTerrain to a number
      console.log("Terrain updated:", response.data);
      history.push("/ListeTerrain");
    } catch (error) {
      console.error("Error updating terrain:", error);
      // Handle error
    }
  };
  

  return (
    <IonContent>
      <div id="img-container">
        <div id="back-img">
          <h1>Modifier Terrain</h1>
          <div>
            <p>
              <input
                type="text"
                placeholder="Description du terrain"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </p>
            <p>
              <input
                type="number"
                placeholder="Nombre parcelle"
                value={nbParcelle}
                onChange={(e) => setNbParcelle(parseInt(e.target.value))}
              />
            </p>
            <br />
            <Bouton onClick={handleUpdateTerrain}>Valider</Bouton>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default ModifTerrain;
