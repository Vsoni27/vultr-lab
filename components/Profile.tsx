"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserDetailsType } from "@/lib/types";
import Image from "next/image";

export default function Profile({ user }: { user: UserDetailsType }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md p-4 shadow-lg bg-blue-50 rounded-lg border border-blue-200">
        <CardHeader className="flex flex-col items-center">
          <Image
            src={user.picture}
            alt={`${user.username}'s profile`}
            width={40}
            height={40}
            className="w-24 h-24 rounded-full border-4 border-blue-400"
          />
          <CardTitle className="mt-4 text-2xl font-bold text-blue-700">
            {user.username}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-blue-600 text-md  mb-2">Email</p>
          <p className="text-gray-700 text-lg">{user.email}</p>
          <Button className="mt-6 w-full bg-blue-500 text-white hover:bg-blue-600">
            Edit Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
