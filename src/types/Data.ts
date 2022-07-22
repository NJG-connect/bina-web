export interface Data {
  step: string;
  client?: "personal" | "professional";
  clientInfo?: {
    corporation?: string;
    name?: string;
    mail?: string;
    phone?: string;
    postal?: number;
  };
  service?: services;
}

export interface clientInfo {
  name?: string;
  mail?: string;
  phone?: string;
  postal?: number;
  corporation?: string;
}

export type clientInfoKey =
  | "name"
  | "corporation"
  | "mail"
  | "postal"
  | "phone";

export type services = "Hôtellerie / Restauration" | "Retail" | "Autre Projet";
