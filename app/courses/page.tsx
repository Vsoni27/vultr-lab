"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Cloud, Brain, Cuboid, User, Database } from "lucide-react";
import Link from "next/link";

export default function CoursePage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          <div className="col-span-3">
            <div className="rounded-lg bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">Filters</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium text-blue-400">
                    Course Features
                  </h3>
                  <ScrollArea className="h-[100px]">
                    {/* Add filter options here */}
                  </ScrollArea>
                </div>
                <Separator />
                <div>
                  <h3 className="mb-2 font-medium text-blue-400">Skills</h3>
                  <ScrollArea className="h-[100px]">
                    {/* Add skills filter here */}
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            {/* Single Grid for All Cards */}
            <div className="grid grid-cols-3 gap-6">
              <Link href="/courses/1">
                <Card className="bg-emerald-500/10 border-emerald-500/20 cursor-pointer">
                  <CardHeader>
                    <Database className="h-12 w-12 text-emerald-500" />
                    <CardTitle className="text-white">
                      Introduction to MySQL
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">Advanced | 2 hour(s)</p>
                  </CardContent>
                  <CardFooter>
                    <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
                      MySQL
                    </div>
                  </CardFooter>
                </Card>
              </Link>

              <Link href="/courses/0">
                <Card className="bg-emerald-500/10 border-emerald-500/20 cursor-pointer">
                  <CardHeader>
                    <Cuboid className="h-12 w-12 text-emerald-500" />
                    <CardTitle className="text-white">
                      Introduction to Block Storage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">Advanced | 8 hour(s)</p>
                  </CardContent>
                  <CardFooter>
                    <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
                      Block Storage
                    </div>
                  </CardFooter>
                </Card>
              </Link>

              <Link href="/courses/2">
                <Card className="bg-emerald-500/10 border-emerald-500/20 cursor-pointer">
                  <CardHeader>
                    <Database className="h-12 w-12 text-emerald-500" />
                    <CardTitle className="text-white">
                      Introduction to New Instance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">Advanced | 8 hour(s)</p>
                  </CardContent>
                  <CardFooter>
                    <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
                      New Instance
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
