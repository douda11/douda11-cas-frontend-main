// This file centralizes the data models for the comparator feature.

// Interface for the backend's comparison result response.
export interface Details {
  id: string;
  formule: number;
  hospitalisation?: number;
  honoraires?: number;
  chambreParticuliere?: number;
  dentaire?: number;
  orthodontie?: number;
  forfaitDentaire?: number;
  forfaitOptique?: number;
  nomDeLOffre: string;
}

export interface ResultatComparaison {
  nomDeLOffre: string;
  formule: number;
  score?: number;
  details: Details;
  tarifMensuel?: number | null;
}

// Interface for the request payload sent to the backend comparator API.
export interface BesoinClient {
  hospitalisation: number;
  chambreParticuliere: number;
  honoraires: number;
  dentaire: number;
  orthodontie: number;
  forfaitDentaire: number;
  forfaitOptique: number;
}
