"use client";

import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function NavBar({
  picture,
  name,
}: {
  picture: string;
  name: string;
}) {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <Link href="/">
          <span className="font-semibold text-lg">Vultr-lab</span>
        </Link>
        <Link href="/courses">
          <p className="hover:text-blue-300">Courses & Labs</p>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-12 h-12 p-0 rounded-full overflow-hidden"
            >
              <Image
                src={picture}
                alt={name}
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              <Link href="/profile">
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut height={18} />
              <span
                onClick={() => (window.location.href = "/api/auth/logout")}
                className="cursor-pointer"
              >
                Log out
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
