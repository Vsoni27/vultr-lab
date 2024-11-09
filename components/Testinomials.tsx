import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer at Microsoft",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    content: "Vultr Educate helped me transition into cloud computing. The hands-on labs were invaluable for my learning journey.",
  },
  {
    name: "Michael Chen",
    role: "Cloud Architect at Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    content: "The structured learning paths and real-world projects gave me the confidence to pursue my Vultr certification.",
  },
  {
    name: "Emily Rodriguez",
    role: "DevOps Engineer at Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    content: "Thanks to Vultr Educate, I landed my dream job. The career resources and mentorship were game-changers.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from our graduates who transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}