import { BASE_URL, VULTR_API_KEY } from "@/lib/constants";
import { rateLimiter } from "@/lib/rateLimiter";
import { generateRandomEmail } from "@/lib/utils";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
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

  let permissions: string[] = [];

  if (id === 0) {
    permissions = ["objstore"];
  }
  if (id === 1) {
    permissions = ["provisioning"];
  }
  if (id === 2) {
    permissions = ["provisioning"];
  }

  const email = generateRandomEmail();

  const response = await axios.patch(
    `https://api.vultr.com/v2/users/${email.id}`,
    {
      acls: permissions,
    },
    {
      headers: {
        Authorization: `Bearer 6ML6J2I5VABWFNEUW3UBUDKELOY4JOUVR5YQ`,
        "Content-Type": "application/json",
      },
    },
  );

  if (response.status >= 400) {
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }

  console.log(response.data);

  return NextResponse.json(
    { message: "Service created successfully", ...email },
    { status: 200 },
  );
}
