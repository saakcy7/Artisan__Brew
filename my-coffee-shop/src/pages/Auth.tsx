import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import coffeeBg from "@/assets/coffee-bg.jpg";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
        const res = await fetch ("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
     const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data?.message || "Invalid email or password.");
    }

    localStorage.setItem("authToken", data.token);
    window.dispatchEvent(new CustomEvent("auth:changed", { detail: { loggedIn: true } }));

    toast({ title: "Login Successful", description: "You have been logged in successfully." });
    navigate("/home");
  } catch (error: any) {
    toast({
      title: "Login Failed",
      description: error?.message || "An error occurred during login. Please try again.",
      variant: "destructive",
    });
    console.error("Login error:", error);
  }
};

const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch ("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, phoneNumber }),
    })
    
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data?.message || "Could not create account.");
    }

    localStorage.setItem("authToken", data.authToken);
    window.dispatchEvent(new CustomEvent("auth:changed", { detail: { loggedIn: true } }));

    toast({ title: "Account Created", description: "Welcome to our coffee community." });

  } catch (error) {
    toast({
      title: "Signup Failed",
      description: error?.message || "An error occurred during signup. Please try again.",
      variant: "destructive",
    });
    console.error("Signup error:", error);
  }
};

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coffeeBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/60" />
      </div>

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-border/50">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-card-foreground mb-2">Artisan Brew</h1>
            <p className="text-muted-foreground">Premium coffee, delivered fresh</p>
          </div>

          <Accordion type="single" defaultValue="login" className="w-full">
            <AccordionItem value="login" className="border-none">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-4">
                Login
              </AccordionTrigger>
              <AccordionContent>
                <form onSubmit={handleLogin} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="signup" className="border-none">
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-4">
                Sign Up
              </AccordionTrigger>
              <AccordionContent>
                <form onSubmit={handleSignup} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-phone">Phone Number</Label>
                    <Input
                      id="signup-phone"
                      type="tel"
                      placeholder="+1234567890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background/50"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Auth;
