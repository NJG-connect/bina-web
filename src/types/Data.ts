export interface Data {
  step: string;
  client: "personal" | "professional" | string;
  clientInfo: {
    corporation?: string;
    name: string;
    mail: string;
    phone: string;
    postal: number;
  };
}
