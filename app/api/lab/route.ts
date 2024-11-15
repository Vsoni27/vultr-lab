import { BASE_URL, SERVICES, VULTR_API_KEY } from "../../../lib/constants";
import { NextResponse } from "next/server";
import MANAGED_DATABASE_STEPS from "../../../lib/labSteps/managedDatabases";
import BLOCK_STORAGE_STEPS from "../../../lib/labSteps/blockStorage";
import COMPUTE_INSTANCE_STEPS from "../../../lib/labSteps/computeInstance";
import { IStep, Lab } from "@/db/labSchema";
import { connectToDatabase } from "@/db/connectMongo";
import { rateLimiter } from "@/lib/rateLimiter";
import axios from "axios";

export async function GET(req: Request) {
  try {
    connectToDatabase();
    const ip = req.headers.get("x-forwarded-for");
    if (!ip) {
      return NextResponse.json({ message: "No IP address found" }, { status: 400 });
    }

    if (!rateLimiter(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Try Again Later" },
        {
          status: 429,
        },
      );
    }

    const url = new URL(req.url);
    const id = Number(url.searchParams.get("id"));
    const userId = url.searchParams.get("userId");

    const lab = await Lab.findOne({ id });

    if (!lab) {
      const service = SERVICES.find((s) => s.id === id);
      if (!service) {
        return NextResponse.json({ message: "Service does not exist" }, { status: 400 });
      }

      let steps: IStep[];

      if (id === 0) {
        steps = BLOCK_STORAGE_STEPS;
      } else if (id === 1) {
        steps = MANAGED_DATABASE_STEPS;
      } else if (id === 2) {
        steps = COMPUTE_INSTANCE_STEPS;
      } else {
        return NextResponse.json({ message: "Service does not exist" }, { status: 400 });
      }

      const newLab = new Lab({
        id,
        name: service.name,
        isActive: true,
        steps: steps,
        limits: service.limits,
        userId,
      });

      await newLab.save();

      return NextResponse.json(
        { message: "Lab created successfully", lab: newLab },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: "Lab fetched successfully", lab },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function PUT(req: Request) {
  try {
    connectToDatabase();

    const ip = req.headers.get("x-forwarded-for");
    if (!ip) {
      return NextResponse.json({ message: "No IP address found" }, { status: 400 });
    }

    if (!rateLimiter(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Try Again Later" },
        {
          status: 429,
        },
      );
    }

    const body = await req.json();
    const { id } = body;

    const lab = await Lab.findOne({ id });

    if (!lab) {
      return NextResponse.json({ message: "Lab does not exist" }, { status: 400 });
    }

    lab.steps = body.steps;
    await lab.save();

    return NextResponse.json({ message: "Lab updated successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(req: Request) {
  try {
    connectToDatabase();
    const ip = req.headers.get("x-forwarded-for");
    if (!ip) {
      return NextResponse.json({ message: "No IP address found" }, { status: 400 });
    }

    if (!rateLimiter(ip)) {
      return NextResponse.json(
        { message: "Too many requests. Try Again Later" },
        {
          status: 429,
        },
      );
    }

    const body = await req.json();
    const { id } = body;

    const lab = await Lab.findOne({ id });

    if (!lab) {
      return NextResponse.json({ message: "Lab does not exist" }, { status: 400 });
    }
    // const lab = await Lab.findOne({ id });

    await Lab.deleteOne({ id });

    const response = await axios.patch(`${BASE_URL}/users/${lab.userId}`, {
      headers: {
        Authorization: `Bearer ${VULTR_API_KEY}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        acls: [],
      }),
    });

    return NextResponse.json({ message: "Lab deleted successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
