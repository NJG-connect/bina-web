export interface Data {
  step: string;
  client?: "personal" | "professional";
  clientInfo: {
    corporation?: string;
    name: string;
    mail: string;
    phone: string;
    postal: number;
  };
}
