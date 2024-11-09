import { NextApiRequest } from "next";
import { SERVICES } from "../../../lib/constants";
import { NextRequest, NextResponse } from "next/server";
import MANAGED_DATABASE_STEPS from "../../../lib/labSteps/managedDatabases";
import BLOCK_STORAGE_STEPS from "../../../lib/labSteps/blockStorage";
import { IStep, Lab } from "@/db/labSchema";
import { connectToDatabase } from "@/db/connectMongo";

export async function POST(req: Request) {
  connectToDatabase()
  const body = await req.json();
  const { name } = body;

  const serviceExists = SERVICES.find((s) => s.name === name);

  if (!serviceExists) {
    return NextResponse.json({ message: "Service does not exist" }, { status: 400 });
  }

  let steps: IStep[];

  if (serviceExists.id === 0) {
    steps = BLOCK_STORAGE_STEPS;
  } else if (serviceExists.id === 1) {
    steps = MANAGED_DATABASE_STEPS;
  } else {
    return NextResponse.json({ message: "Service does not exist" }, { status: 400 });
  }

  const totalLabs = await Lab.find();

  const lab = new Lab({
    steps: steps,
    id: totalLabs.length + 1,
    name,
    isActive: true,
  });

  await lab.save();

  return NextResponse.json(
    { message: "Service created successfully", steps },
    { status: 200 },
  );
}
