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
