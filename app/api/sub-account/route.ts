import { BASE_URL, VULTR_API_KEY } from "@/lib/constants";
import { generateRandomEmail } from "@/lib/utils";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const email = generateRandomEmail();
    const subaccount_name = generateRandomEmail();
    const res = await axios.post(
      `${BASE_URL}/subaccounts`,
      { email, subaccount_name },
      {
        headers: {
          Authorization: `Bearer IPBDPGBA2K6JRDA6XXLFOUWSRF6HBMWJGSTA`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log(res);
    const data = res.data;
    console.log(data);
    return NextResponse.json(
      { message: "Service created successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
