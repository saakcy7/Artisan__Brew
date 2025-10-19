import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/heroImage.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium artisan coffee" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-accent animate-float" />
            <span className="text-accent font-medium">Premium Coffee Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover the Art of Perfect Coffee
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Handpicked beans from the world's finest coffee regions. Roasted to perfection. 
            Delivered to your doorstep. Experience coffee like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="hero" className="text-lg group">
              Shop Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="hero-outline" className="text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-primary-foreground">500+</div>
              <div className="text-sm text-primary-foreground/80">Premium Blends</div>
            </div>
            <div className="h-12 w-px bg-primary-foreground/30" />
            <div>
              <div className="text-3xl font-bold text-primary-foreground">50k+</div>
              <div className="text-sm text-primary-foreground/80">Happy Customers</div>
            </div>
            <div className="h-12 w-px bg-primary-foreground/30" />
            <div>
              <div className="text-3xl font-bold text-primary-foreground">100%</div>
              <div className="text-sm text-primary-foreground/80">Organic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
