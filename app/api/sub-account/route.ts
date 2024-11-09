import { BASE_URL, VULTR_API_KEY } from "@/lib/constants";
import { rateLimiter } from "@/lib/rateLimiter";
import { generateRandomEmail } from "@/lib/utils";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
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
    const email = generateRandomEmail();
    // const subaccount_name = generateRandomEmail();
    // const res = await axios.post(
    //   `${BASE_URL}/subaccounts`,
    //   { email, subaccount_name },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${VULTR_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //   },
    // );

    // console.log(res);
    // const data = res.data;
    // console.log(data);
    return NextResponse.json(
      { message: "Service created successfully", ...email },
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
