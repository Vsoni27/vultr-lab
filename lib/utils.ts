import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomEmail() {
  const randomEmail = `${Math.random().toString(36).substring(2, 15)}@gmail.com`;
  return randomEmail;
}

export function generateRandomSubAccountName() {
  const randomName = `${Math.random().toString(36).substring(2, 15)}`;
  return randomName;
}
