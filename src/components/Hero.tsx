
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-br from-blue-50 via-transparent to-transparent" />
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 max-w-xl animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-bank-blue/10 text-bank-blue px-3 py-1 rounded-full text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-bank-blue animate-pulse-light"></span>
              <span>Secure Banking for Everyone</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance">
              Banking Made <span className="text-bank-blue">Simple</span> and <span className="text-bank-blue">Secure</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Experience the future of banking with SBI. Send money, receive payments, and manage your finances with ease and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="rounded-md font-medium" asChild>
                <Link to="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="rounded-md font-medium" asChild>
                <Link to="/transfer">Send Money</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mt-6 pt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-bank-success" />
                <span className="text-sm">Secure</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-bank-warning" />
                <span className="text-sm">24/7 Service</span>
              </div>
              <div className="h-4 w-px bg-border"></div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-bank-blue" />
                <span className="text-sm">Easy Transfers</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg border border-border/40 glass-card backdrop-blur-sm">
              <div className="px-2 pb-6">
                <h3 className="text-xl font-semibold mb-6">Quick Transfer</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Recipient</label>
                    <div className="h-10 px-3 rounded-md bg-muted/50 flex items-center text-muted-foreground text-sm">
                      Select or enter recipient details
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Amount</label>
                    <div className="h-10 px-3 rounded-md bg-muted/50 flex items-center text-muted-foreground text-sm">
                      ₹ 0.00
                    </div>
                  </div>
                  <Button className="w-full mt-2" asChild>
                    <Link to="/transfer">
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative card elements */}
            <div className="absolute top-8 -right-4 w-48 h-32 bg-bank-blue/10 rounded-xl -rotate-6 transform"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-32 bg-bank-lightBlue/10 rounded-xl rotate-6 transform"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
