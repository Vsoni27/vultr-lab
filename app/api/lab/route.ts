import { NextApiRequest } from "next";
import { SERVICES } from "../../../lib/constants";
import { NextResponse } from "next/server";
import MANAGED_DATABSE_STEPS from "../../../lib/labSteps/managedDatabases";
import BLOCK_STORAGE_STEPS from "../../../lib/labSteps/blockStorage";
import { IStep } from "@/db/labSchema";

export async function POST(req: NextApiRequest) {
  const { name } = req.body;

  const serviceExists = SERVICES.find((s) => s.name === name);

  if (!serviceExists) {
    return NextResponse.json({ message: "Service does not exist" }, { status: 400 });
  }

  let steps: IStep[];

  if (serviceExists.id === 0) {
    steps = BLOCK_STORAGE_STEPS;
  } else if (serviceExists.id === 1) {
    steps = MANAGED_DATABSE_STEPS;
  } else {
    return NextResponse.json({ message: "Service does not exist" }, { status: 400 });
  }
  return NextResponse.json(
    { message: "Service created successfully", steps },
    { status: 200 },
  );
}
