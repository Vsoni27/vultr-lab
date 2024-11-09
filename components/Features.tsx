import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code, BookOpen, Users, Award, Rocket } from "lucide-react";

const features = [
  {
    title: "Cloud Computing Labs",
    description: "Get hands-on experience with real Vultr services in a safe, sandbox environment.",
    icon: Cloud,
  },
  {
    title: "Learning Paths",
    description: "Structured courses designed to take you from beginner to cloud expert.",
    icon: BookOpen,
  },
  {
    title: "Coding Projects",
    description: "Build real-world applications using Vultr services and modern technologies.",
    icon: Code,
  },
  {
    title: "Community",
    description: "Connect with other learners and Vultr experts in our global community.",
    icon: Users,
  },
  {
    title: "Certifications",
    description: "Prepare for Vultr certifications with our comprehensive study materials.",
    icon: Award,
  },
  {
    title: "Career Resources",
    description: "Access job boards, resume reviews, and interview preparation resources.",
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Everything You Need to Succeed</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive resources and tools to master cloud computing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}