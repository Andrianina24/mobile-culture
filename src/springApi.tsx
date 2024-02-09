import axios, { AxiosResponse } from "axios";

// Define the base URL of your API
const BASE_URL = 'https://web-service-final-production-314a.up.railway.app';
// const BASE_URL = "http://localhost:8081";

interface UserData {
  token: string;
  user: any; // Adjust the type as per the user data structure
}

export const login = async (
  email: string,
  password: string
): Promise<UserData> => {
  try {
    const response = await axios.post<UserData>(
      `${BASE_URL}/utilisateurs/login`,
      { email: email, mdp: password }, // Pass the email and password as an object
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Request failed:", error);
    throw error;
  }
};

export const getAllCultures = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/cultures`);
};

export const getAllParcelles = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/parcelles`);
};

export const addCulture = (culture: any): Promise<AxiosResponse<any>> => {
  return axios.post(`${BASE_URL}/cultures`, culture);
};

export const updatePrix = (
  id_Culture: string,
  newPrix: number
): Promise<AxiosResponse<any>> => {
  return axios.put(
    `${BASE_URL}/cultures/${id_Culture}/updatePrix?newPrix=${newPrix}`
  );
};


export const getAllCultureParcelles = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/culture_parcelle`);
};

export const getAllPhotoTerrains = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/photo`);
};

export const getAllSimulations = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/simulations`);
};

export const getAllTerrains = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/terrains`);
};

export const findTerrainNonValide = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/terrains/nonValide`);
};

export const findTerrainValide = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/terrains/valide`);
};

export const validerTerrain = (
  id_Terrain: string
): Promise<AxiosResponse<any>> => {
  return axios.post(`${BASE_URL}/terrains/valider/${id_Terrain}`);
};

export const refuserTerrain = (
  id_Terrain: string
): Promise<AxiosResponse<any>> => {
  return axios.delete(`${BASE_URL}/terrains/${id_Terrain}/refuser`);
};

export const getAllUtilisateurs = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/utilisateurs`);
};

export const getUtilisateurById = (id: string): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/utilisateurs/${id}`);
};

export const saveUtilisateur = (
  utilisateur: any
): Promise<AxiosResponse<any>> => {
  return axios.post(`${BASE_URL}/utilisateurs`, utilisateur);
};

export const deleteUtilisateur = (id: string): Promise<AxiosResponse<any>> => {
  return axios.delete(`${BASE_URL}/utilisateurs/${id}`);
};

export const loginUtilisateur = (
  email: string,
  mdp: string
): Promise<AxiosResponse<any>> => {
  return axios.post(`${BASE_URL}/utilisateurs/login?email=${email}&mdp=${mdp}`);
};

export const getAllTerrainCultures = (): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/terrain-cultures`);
};

export const getAllTerrainCulturesById = (
  id: string
): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/terrain-cultures/utilisateur/${id}`);
};

interface Parcelle {
  // Define the properties of Parcelle
  idTerrain: number;
  rendement: number;
  largeur: number;
  longueur: number;
  // Add other properties as needed
}

export const createParcelle = async (
  parcelle: Parcelle
): Promise<AxiosResponse<Parcelle>> => {
  try {
    const response = await axios.post<Parcelle>(
      `${BASE_URL}/parcelles`,
      parcelle
    );
    return response;
  } catch (error) {
    console.error("Error creating parcelle:", error);
    throw error;
  }
};

export interface Terrain {
  // Define the properties of Parcelle
  description: string;
  localisation: string;
  nbparcelle: number;
  id_Utilisateur: number;
  validation: number;
  // Add other properties as needed
}

export const createTerrain = async (
  terrain: Terrain
): Promise<AxiosResponse<Terrain>> => {
  try {
    const response = await axios.post<Terrain>(`${BASE_URL}/terrains`, terrain);
    return response;
  } catch (error) {
    console.error("Error creating terrain:", error);
    throw error;
  }
};

export const updateTerrain = async (
  id: number,
  updatedTerrain: Terrain
): Promise<AxiosResponse<Terrain>> => {
  try {
    const response = await axios.put<Terrain>(
      `${BASE_URL}/terrains/${id}`,
      updatedTerrain
    );
    return response;
  } catch (error) {
    console.error("Error updating terrain:", error);
    throw error;
  }
};

export interface CultureParcelle {
  cultureId: number;
  parcelleId: number;
  // Add other properties as needed
}

export const createCultureParcelle = async (
  cultureParcelle: CultureParcelle
): Promise<AxiosResponse<CultureParcelle>> => {
  try {
    const response = await axios.post<CultureParcelle>(
      `${BASE_URL}/cultureParcelle`,
      cultureParcelle
    );
    return response;
  } catch (error) {
    console.error("Error creating cultureParcelle:", error);
    throw error;
  }
};
