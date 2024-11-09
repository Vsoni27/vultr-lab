import { IStep } from "@/db/labSchema";

export default [
  {
    title: "Create a Block Storage",
    description: "sCreate a new Block Storage for your application",
    isDone: false,
  },
  {
    title: "Add Block Storage",
    description:
      "Choose from HDD and NVMe for your use case. HDD (Hard Disk Drive) is a traditional mechanical storage device with spinning disks, while NVMe (Non-Volatile Memory Express) is a modern solid state drive that offers much faster data access speeds.",
    isDone: false,
  },
  {
    title: "Choose storage location",
    description:
      "You get a wide variety of server locations to choose from. Choose the region either closest to your users or closest to you.",
    isDone: false,
  },

  {
    title: "Select your storage size and cost",
    description:
      "You can choose from a variety of storage sizes and prices. Choose the one that best suits your needs.",
    isDone: false,
  },
  {
    title: "Set your label",
    description:
      "You can set a label for your Block Storage. This is a human-readable name that identifies your Block Storage.",
    isDone: false,
  },
] as IStep[];
