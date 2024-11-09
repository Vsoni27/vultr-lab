import { IServiceType } from "./interfaces";

export const BASE_URL = "https://api.vultr.com/v2/account";

export const VULTR_API_KEY = process.env.NEXT_PUBLIC_VULTR_API_KEY;
export const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;

export const SERVICES: IServiceType[] = [
  { category: "Storage", name: "Block Storage", id: 0 },
  {
    category: "Managed Databases",
    name: "MySQL",
    id: 1,
  },
];
