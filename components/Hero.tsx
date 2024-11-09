"use client";

import { Button } from "@/components/ui/button";
import { CloudLightning } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary/5 to-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary">
            Build Your Future in Cloud Computing
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Get hands-on experience with Vultr while learning from experts.
            Start your journey to become a cloud professional today.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/courses">
              <Button size="lg" className="text-lg">
                Start Learning
                <CloudLightning className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
