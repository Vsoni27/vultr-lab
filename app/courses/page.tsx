"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Cloud, Brain, Cuboid, User, Database } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

interface IServiceType {
  id: number;
  name: string;
  description: string;
  category: string;
  limits: number[];
}

export default function CoursePage() {
  const [selectedItem, setSelectedItem] = useState<IServiceType | null>(null);

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
              {SERVICES.map((item) => (
                <Card
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-emerald-500/10 border-emerald-500/20 cursor-pointer max-h-[300px] overflow-y-scroll no-scrollbar"
                >
                  <CardHeader>
                    <Database className="h-12 w-12 text-emerald-500" />
                    <CardTitle className="text-white">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
                      {item.category}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {selectedItem && (
            <Dialog
              open={Boolean(selectedItem)}
              onOpenChange={() => setSelectedItem(null)}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-bold">
                    {selectedItem.name}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-slate-700 font-semibold">
                  Storage limit: {selectedItem.limits[0]} GB
                </p>
                {selectedItem.limits.length >= 2 && (
                  <p className="text-slate-700 font-semibold">
                    Memory limit: {selectedItem.limits[1]} GB
                  </p>
                )}
                {selectedItem.limits.length == 3 && (
                  <p className="text-slate-700 font-semibold">
                    CPU cores: {selectedItem.limits[2]} vCPU
                  </p>
                )}
                <DialogFooter>
                  <Link href={`/courses/${selectedItem.id}`} passHref>
                    <p className="px-4 py-2 bg-emerald-500 text-white rounded-md">
                      Start Lab
                    </p>
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </main>
    </div>
  );
}
