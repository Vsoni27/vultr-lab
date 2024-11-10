import { IServiceType } from "./interfaces";

export const BASE_URL = "https://api.vultr.com/v2";

export const VULTR_API_KEY = process.env.NEXT_PUBLIC_VULTR_API_KEY;
export const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI;
export const APP_URL = "http://localhost:3000";

export const SERVICES: IServiceType[] = [
  {
    category: "Storage",
    name: "Block Storage",
    id: 0,
    description:
      "Vultr's Cloud Block Storage technology lets you mount high-performance, scalable storage to your instance to provide flexible space management. Block storage is highly available, redundant, and available as either high-performance NVMe or affordable HDD. Use this guide to manage your Big Data storage needs with Vultr Block Storage.",
    limits: [1],
  },
  {
    category: "Managed Databases",
    name: "MySQL",
    id: 1,
    description:
      "Vultr's MySQL database service is a high-performance, managed database solution that is easy to use and scale. Use this guide to manage your MySQL database needs with Vultr's MySQL service. This guide will help you get started with Vultr's MySQL service.",
    limits: [1],
  },
  {
    category: "Compute",
    name: "New Instance",
    id: 2,
    description:
      "Vultr's custom compute instance service is a great way to create your own custom machines to perform your compute operations. You have a variety of options to choose from, from choosing the OS image to the size of the instance. Use this guide to get started with Vultr's custom compute instance service.",
    limits: [1],
  },
];
