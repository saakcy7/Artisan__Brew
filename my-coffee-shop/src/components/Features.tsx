import { Coffee, Leaf, Truck, Award } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "Only the finest beans from the world's best coffee regions",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Sustainably sourced and environmentally friendly",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Fresh roasted and shipped within 24 hours",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by coffee experts worldwide",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Artisan Brew
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering excellence in every cup
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:bg-secondary/50 transition-colors duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
