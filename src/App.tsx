import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login/Login";
import Inscription from "./pages/Inscription/Inscription";
import AjoutParcelle from "./pages/Ajout/AjoutParcelle";
import AjoutTerrain from "./pages/Ajout/AjoutTerrain";
import CultureParcelle from "./pages/Culture/CultureParcelle";
import ListeTerrain from "./pages/Terrain/ListeTerrain";
import ModifTerrain from "./pages/Terrain/ModifTerrain";
import PhotoTerrain from "./pages/Terrain/PhotoTerrain";
import Parametre from "./pages/Parametre/Parametre";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} />
        <Route path="/inscription" component={Inscription} />
        <Route path="/ajoutParcelle" component={AjoutParcelle} />
        <Route path="/ajoutTerrain" component={AjoutTerrain} />
        <Route path="/CultureParcelle" component={CultureParcelle} />
        <Route path="/ListeTerrain" component={ListeTerrain} />
        <Route path="/ModifTerrain" component={ModifTerrain} />
        <Route path="/PhotoTerrain" component={PhotoTerrain} />
        <Route path="/Parametre" component={Parametre} />
        
        <Redirect to="/login" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
