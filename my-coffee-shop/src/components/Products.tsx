import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import productBeans from "@/assets/product-beans.jpg";
import productEquipment from "@/assets/product-equipment.jpg";
import productGiftSet from "@/assets/product-giftset.jpg";

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Floral notes with hints of berry and citrus",
    price: 24.99,
    image: productBeans,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Premium Espresso Machine",
    description: "Professional-grade brewing perfection",
    price: 899.99,
    image: productEquipment,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Artisan Gift Set",
    description: "Curated collection of our finest beans",
    price: 89.99,
    image: productGiftSet,
    rating: 5.0,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of premium coffee and equipment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    {product.rating}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {product.description}
                </CardDescription>
                <div className="text-2xl font-bold text-foreground">
                  ${product.price}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full group" variant="default">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
