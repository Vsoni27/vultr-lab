"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserDetailsType } from "@/lib/types";
import Image from "next/image";

interface TestUserType {
  message: string;
  email: string;
  name: string;
  password: string;
  id: string;
}

export default function Profile() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md p-4 shadow-lg bg-blue-50 rounded-lg border border-blue-200">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="mt-4 text-2xl font-bold text-blue-700">
            Test User 1645
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-blue-600 text-md  mb-2 font-bold">Email</p>
          <p className="text-gray-700 text-lg font-bold">
            vultr1645.void356@simplelogin.com
          </p>
          <p className="text-blue-600 text-md  mb-2 font-bold">Password</p>
          <p className="text-gray-700 text-lg font-bold">testpassword1645</p>
        </CardContent>
      </Card>
    </div>
  );
}
