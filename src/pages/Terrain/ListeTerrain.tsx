import React, { useState, useEffect } from "react";
import { IonContent } from "@ionic/react";
import "./Terrain.css";

import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";
import { getAllTerrains } from "../../springApi";

const ListeTerrain: React.FC = () => {
  const history = useHistory();
  const [terrains, setTerrains] = useState<any[]>([]);
  const img = "../../assets/img/culture.jpg";

  const fetchTerrains = async () => {
    try {
      const response = await getAllTerrains();
      setTerrains(response.data); // Assuming the data returned by the API is an array of terrain objects
    } catch (error) {
      console.error("Failed to fetch terrains:", error);
    }
  };

  useEffect(() => {
    fetchTerrains();
  }, []); // Fetch terrains on component mount

  const handleLogout = () => {
    history.push("/login");
  };

  const handleEditTerrain = (terrainId: string) => {
    // Navigate to edit terrain page with the selected terrainId
    history.push(`/ModifTerrain/${terrainId}`);
  };

  return (
    <IonContent>
      <div id="head">
        <div id="l-header">
          <button style={{ background: "transparent", color: "white", border: "0px solid transparent" }} className="log-a" onClick={handleLogout}>
            Se Déconnecter
          </button>
          <a href="/Parametre">
            <img src="src/assets/img/icon.png" alt="" />
          </a>
        </div>
        <form action="modifTerrain.html"></form>
        <div id="l-container">
          <div id="back-liste">
            <h4>Liste des Terrains</h4>
            {/* Render the list of terrains */}
            {terrains.map((terrain) => (
              <div key={terrain.idTerrain} id="l-bloc">
                <div id="img">
                  <img className="petit1" src={img} alt="" />
                  <img className="grand" src={img} alt="" />
                  <img className="petit2" src={img} alt="" />
                </div>
                <p>Terrain {terrain.idTerrain}</p>
                <p>{terrain.description}</p>
                <p>{terrain.localisation}</p>
                <br />
                <Bouton onClick={() => handleEditTerrain(terrain.idTerrain)}>
                  Modifier
                </Bouton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default ListeTerrain;
