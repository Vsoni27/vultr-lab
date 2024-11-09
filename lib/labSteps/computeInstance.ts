import { IStep } from "@/db/labSchema";

export default [
  {
    title: "Deploy your instance",
    description: "You can deploy your instance from the Vultr dashboard",
    isDone: false,
  },

  {
    title: "Choose Type",
    description:
      "Choose your instance type based on your needs. The options available are $$ 1) Optimized Cloud Compute. 2) Cloud Compute 3) Cloud GPU 4) Bare Metal",
    isDone: false,
  },
  {
    title: "Choose your server location",
    description:
      "You get a wide variety of server locations to choose from. Choose the region either closest to your users or closest to you.",
    isDone: false,
  },
  {
    title: "Choose Image",
    description: "These are ISO images that are available for your instance.",
    isDone: false,
  },
  {
    title: "Choose your Server Size",
    description:
      "Choose the server size based on your needs. The options available are $$ 1) CPUs 2) Memory 3) Storage 4) Bandwidth",
    isDone: false,
  },
  {
    title: "Choose your Server Location",
    description:
      "You get a wide variety of server locations to choose from. Choose the region either closest to your users or closest to you.",
    isDone: false,
  },
  {
    title: "Set your label",
    description:
      "You can set a label for your instance. This is a human-readable name that identifies your instance.",
    isDone: false,
  },

  {
    title: "Choose Plan",
    description:
      "Choose your pricing plang base on your needs. It gives you the option to choose your between from number of Cores, Memory, Storage, Bandwidth and Price.",
    isDone: false,
  },

  {
    title: "Additional Features",
    description: "You can choose to have additional features like SSH, IPv6 and more.",
    isDone: false,
  },

  {
    title: "Choose Server settings",
    description:
      "You can choose to have a server with a static IP address or a dynamic IP address.",
    isDone: false,
  },
  {
    title: "Server Quantity",
    description:
      "You can choose to have multiple instances of your server for the specified price.",
    isDone: false,
  },
] as IStep[];
