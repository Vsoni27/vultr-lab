import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Cloud, Brain, ChevronLeft, ChevronRight, User } from "lucide-react";
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
                  <h3 className="mb-2 font-medium text-blue-400">Course Features</h3>
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
            {/* Getting Started Section */}
            <section className="mb-12">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Getting Started</h2>
                  <p className="text-slate-400">New to cloud computing? Start here.</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-emerald-500/10 border-emerald-500/20">
                    <CardHeader>
                      <Cloud className="h-12 w-12 text-emerald-500" />
                      <CardTitle className="text-white">Introduction to Cloud Computing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">Foundational | 3 hour(s)</p>
                    </CardContent>
                    <CardFooter>
                      <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
                        Cloud Computing
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>

            {/* AI & ML Section */}
            <section>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Artificial Intelligence (AI) and Machine Learning
                  </h2>
                  <p className="text-slate-400">
                    Learn AI and machine learning skills to shape the future of technology.
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-lime-500/10 border-lime-500/20">
                    <CardHeader>
                      <Brain className="h-12 w-12 text-lime-500" />
                      <CardTitle className="text-white">Introduction to Machine Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300">Advanced | 8 hour(s)</p>
                    </CardContent>
                    <CardFooter>
                      <div className="inline-flex items-center rounded-full bg-lime-500/10 px-3 py-1 text-sm text-lime-500">
                        Machine Learning
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}