import React, { useState } from "react";
import { IonContent } from "@ionic/react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import Bouton from "../../components/Bouton";
import { login } from "../../springApi";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // Call the login function with email and password
      const userData = await login(email, password);
      // Handle successful login
      console.log(userData);
      // Redirect to ListeTerrain page
      history.push("/ListeTerrain");
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <IonContent>
      <div id="body">
        <div id="log-container">
          <div id="log-back">
            <h1>Se connecter</h1>
            {error && <p>{error}</p>}
            <div>
              <p>
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="password"
                  name="pwd"
                  id="pwd"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <br />
              <Bouton onClick={handleLogin}>Valider</Bouton>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default Login;
