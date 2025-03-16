
import React from 'react';
import { 
  CreditCard, 
  Shield, 
  Smartphone, 
  Clock, 
  BarChart, 
  RefreshCcw 
} from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="h-10 w-10 text-bank-blue" />,
    title: "Instant Transfers",
    description: "Send money instantly to anyone, anywhere with just a few clicks."
  },
  {
    icon: <Shield className="h-10 w-10 text-bank-success" />,
    title: "Secure Banking",
    description: "Advanced security measures to keep your money and data safe."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-bank-lightBlue" />,
    title: "Mobile Banking",
    description: "Bank from anywhere using our mobile-friendly platform."
  },
  {
    icon: <Clock className="h-10 w-10 text-bank-warning" />,
    title: "24/7 Service",
    description: "Access your account and make transactions any time of day."
  },
  {
    icon: <BarChart className="h-10 w-10 text-bank-darkBlue" />,
    title: "Financial Insights",
    description: "Get a clear view of your spending habits and financial health."
  },
  {
    icon: <RefreshCcw className="h-10 w-10 text-bank-blue" />,
    title: "Recurring Payments",
    description: "Schedule automatic payments for bills and subscriptions."
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything You Need for <span className="text-bank-blue">Modern Banking</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience a comprehensive banking solution tailored to meet all your financial needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="mb-4 p-2 bg-primary/5 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
