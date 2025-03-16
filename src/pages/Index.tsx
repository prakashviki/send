
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturesSection />
      
      {/* Additional Sections */}
      <section className="py-16 md:py-24 bg-bank-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-bank-success/10 text-bank-success px-3 py-1 rounded-full text-sm font-medium mb-6">
                <span>Easy to Use</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Banking That Fits Your Lifestyle
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our banking platform is designed to adapt to your needs, whether you're at home or on the go. Enjoy seamless access to your finances anytime, anywhere.
              </p>
              
              <div className="space-y-4">
                {[
                  "Quick and secure money transfers",
                  "Real-time transaction notifications",
                  "24/7 customer support",
                  "Easy bill payments and subscriptions"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 bg-bank-blue/10 rounded-full p-1">
                      <Check className="h-4 w-4 text-bank-blue" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8" asChild>
                <Link to="/dashboard">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Mobile banking app" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              <div className="absolute top-8 -right-4 w-48 h-48 bg-bank-blue/20 rounded-full -z-10 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-bank-lightBlue/20 rounded-full -z-10 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join millions of satisfied customers who trust us with their banking needs. Experience the future of banking today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/dashboard">
                Open an Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/transfer">
                Try a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="bg-bank-darkBlue text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Banking</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Accounts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Credit Cards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Loans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investments</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branches</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Complaints</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fees</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white text-bank-blue font-display font-bold rounded-md w-10 h-10 flex items-center justify-center mr-2">
                SBI
              </div>
              <span className="font-display font-bold text-xl">State Bank</span>
            </div>
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} State Bank of India. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
