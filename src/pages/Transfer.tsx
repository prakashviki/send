
import React from 'react';
import { Layout } from '@/components/Layout';
import { TransferForm } from '@/components/TransferForm';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Users, 
  Clock, 
  RotateCcw, 
  CheckCircle 
} from 'lucide-react';

const Transfer = () => {
  const recentContacts = [
    { name: 'Rahul Sharma', accountNumber: '********7890', image: 'https://i.pravatar.cc/150?img=65' },
    { name: 'Priya Patel', accountNumber: '********3456', image: 'https://i.pravatar.cc/150?img=48' },
    { name: 'Vikram Singh', accountNumber: '********9012', image: 'https://i.pravatar.cc/150?img=68' },
    { name: 'Anjali Mehta', accountNumber: '********5678', image: 'https://i.pravatar.cc/150?img=25' }
  ];
  
  const recentTransactions = [
    { 
      name: 'Rahul Sharma', 
      type: 'sent', 
      amount: 4500, 
      date: '15 Sep' 
    },
    { 
      name: 'Electricity Bill', 
      type: 'sent', 
      amount: 1499, 
      date: '05 Sep' 
    },
    { 
      name: 'ABC Company', 
      type: 'received', 
      amount: 23500, 
      date: '01 Sep' 
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col gap-1 mb-6">
              <h1 className="text-2xl md:text-3xl font-display font-bold">Money Transfer</h1>
              <p className="text-muted-foreground">Send or request money securely</p>
            </div>
            
            <TransferForm />
            
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-6">Recent Contacts</h2>
              <div className="flex space-x-6 overflow-x-auto pb-4">
                {recentContacts.map((contact, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[100px]">
                    <div className="relative">
                      <img 
                        src={contact.image} 
                        alt={contact.name} 
                        className="w-16 h-16 rounded-full object-cover mb-2"
                      />
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full shadow-sm"
                      >
                        <ArrowUpCircle className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="text-sm font-medium">{contact.name}</span>
                    <span className="text-xs text-muted-foreground">{contact.accountNumber}</span>
                  </div>
                ))}
                <div className="flex flex-col items-center min-w-[100px]">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted flex items-center justify-center mb-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 rounded-full"
                    >
                      <Users className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm font-medium">Add New</span>
                  <span className="text-xs text-muted-foreground">Contact</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border rounded-xl overflow-hidden">
              <div className="bg-bank-blue/10 p-4">
                <h3 className="font-semibold flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-bank-blue" />
                  Recent Transactions
                </h3>
              </div>
              <div className="divide-y">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{transaction.name}</span>
                      <span className={`font-medium ${
                        transaction.type === 'received' ? 'text-bank-success' : 'text-bank-error'
                      }`}>
                        {transaction.type === 'received' ? '+' : '-'} ₹{transaction.amount}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        {transaction.type === 'received' ? (
                          <ArrowDownCircle className="h-3 w-3 mr-1 text-bank-success" />
                        ) : (
                          <ArrowUpCircle className="h-3 w-3 mr-1 text-bank-error" />
                        )}
                        <span>
                          {transaction.type === 'received' ? 'Received' : 'Sent'}
                        </span>
                      </div>
                      <span>{transaction.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t bg-muted/20">
                <Button variant="ghost" size="sm" className="w-full text-sm">
                  View transaction history
                </Button>
              </div>
            </div>
            
            <div className="border rounded-xl overflow-hidden">
              <div className="bg-bank-blue/10 p-4">
                <h3 className="font-semibold">Transfer Options</h3>
              </div>
              <div className="p-4">
                <Tabs defaultValue="domestic">
                  <TabsList className="grid grid-cols-2 w-full mb-4">
                    <TabsTrigger value="domestic">Domestic</TabsTrigger>
                    <TabsTrigger value="international">International</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="domestic" className="space-y-4">
                    <div className="flex items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                      <div className="mr-3 p-2 rounded-full bg-white">
                        <CheckCircle className="h-5 w-5 text-bank-success" />
                      </div>
                      <div>
                        <h4 className="font-medium">IMPS</h4>
                        <p className="text-xs text-muted-foreground">Instant transfer 24x7</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                      <div className="mr-3 p-2 rounded-full bg-white">
                        <CheckCircle className="h-5 w-5 text-bank-success" />
                      </div>
                      <div>
                        <h4 className="font-medium">NEFT</h4>
                        <p className="text-xs text-muted-foreground">Batch processing transfer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                      <div className="mr-3 p-2 rounded-full bg-white">
                        <CheckCircle className="h-5 w-5 text-bank-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">RTGS</h4>
                        <p className="text-xs text-muted-foreground">Real-time high value transfer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                      <div className="mr-3 p-2 rounded-full bg-white">
                        <CheckCircle className="h-5 w-5 text-bank-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">UPI</h4>
                        <p className="text-xs text-muted-foreground">Transfer using UPI ID</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="international" className="space-y-4">
                    <div className="flex items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                      <div className="mr-3 p-2 rounded-full bg-white">
                        <CheckCircle className="h-5 w-5 text-bank-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">SWIFT Transfer</h4>
                        <p className="text-xs text-muted-foreground">International wire transfer</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer transition-colors">
                      <div className="mr-3 p-2 rounded-full bg-white">
                        <CheckCircle className="h-5 w-5 text-bank-blue" />
                      </div>
                      <div>
                        <h4 className="font-medium">Remittance</h4>
                        <p className="text-xs text-muted-foreground">Send money abroad</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-3 flex items-center">
                <RotateCcw className="h-4 w-4 mr-2 text-bank-blue" />
                Scheduled Transfers
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Set up recurring transfers for bills and subscriptions.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Schedule a Transfer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transfer;
