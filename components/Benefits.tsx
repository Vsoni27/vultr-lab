import { CheckCircle } from "lucide-react";

const benefits = [
  "Free access to Vultr services worth $100",
  "Self-paced learning modules",
  "Industry-recognized badges",
  "Real-world project experience",
  "Networking opportunities",
  "Job placement assistance",
];

export default function Benefits() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Why Choose Vultr Educate?
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="ml-4 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Students learning"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}