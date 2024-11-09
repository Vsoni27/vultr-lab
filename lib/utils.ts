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
  },
  {
    email: "vultr1245.void356@simplelogin.com",
    name: "Test User 1245",
    password: "testpassword1245",
  },
  {
    email: "vultr1645.void356@simplelogin.com",
    name: "Test User 1645",
    password: "testpassword1645",
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
