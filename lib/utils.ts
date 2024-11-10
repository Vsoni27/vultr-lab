import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const randomUsers = [
  {
    email: "vultr1345.void356@simplelogin.com",
    name: "Test User 1345",
    password: "testpassword",
    id: "df6613b3-2d12-49e5-acee-2c19a17c1c19",
  },
  {
    email: "vultr1245.void356@simplelogin.com",
    name: "Test User 1245",
    password: "testpassword1245",
    id: "c9e76eba-d911-4628-bb55-a5059b0706cf",
  },
  {
    email: "vultr1645.void356@simplelogin.com",
    name: "Test User 1645",
    password: "testpassword1645",
    id: "2e76a631-1304-4e4b-8f64-8ca6a0e15b42",
  },
];

export function generateRandomEmail() {
  // const randomEmail = `${Math.random().toString(36).substring(2, 15)}@gmail.com`;
  // return randomEmail;
  const randomIndex = Math.floor(Math.random() * randomUsers.length);
  const randomEmail = randomUsers[randomIndex];
  return randomEmail;
}

export function generateRandomSubAccountName() {
  const randomName = `${Math.random().toString(36).substring(2, 15)}`;
  return randomName;
}
