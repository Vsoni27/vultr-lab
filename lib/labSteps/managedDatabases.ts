import { IStep } from "@/db/labSchema";

export default [
  {
    title: "Create a managed database",
    description:
      "Set up a managed database service that handles infrastructure maintenance, backups, and scaling automatically, allowing you to focus on your application rather than database administration",
    isDone: false,
  },
  {
    title: "Choose your database engine",
    description:
      "Select the database engine you want to use for your managed database service. You can choose from a variety of options, including PostgreSQL, Vultr Managed Databse for chaching and Apache kafka.",
    isDone: false,
  },
  {
    title: "Select your server configuration",
    description:
      "The following configuration opttions are availible. $$  1) Server type: This determines the the type of server you want to create. It includes options like Cloud Compute on AMD, Intel and Optimized Cloud Compute on the same. 2) Plan: This is the pricing plan for your server. It includes fields like Cost per month, CPUs, Storage and Memeory. 3) Number of Replica Nodes: Having replica nodes increases the availability of your database. You can choose to have 0, 1 or 2 replica nodes.",
    isDone: false,
  },
  {
    title: "Choose your server location",
    description:
      "You get a wide variety of server locations to choose from. Choose the region either closest to your users or closest to you.",
    isDone: false,
  },
  {
    title: "Set up your VPC network.",
    description:
      "VPC network is a virtual network that is isolated from the public internet. It is used to securely connect your database to your application. You can choose to have a VPC network or not.",
    isDone: false,
  },
  {
    title: "Set your label",
    description:
      "You can set a label for your database. This is a human-readable name that identifies your database.",
    isDone: false,
  },
] as IStep[];
