
import React from 'react';
import { Layout } from '@/components/Layout';
import { AccountCard } from '@/components/AccountCard';
import { TransactionList, Transaction } from '@/components/TransactionList';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowRight, PlusCircle, BarChart3, Bell, Clock } from 'lucide-react';

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: 'debit',
    amount: 4500,
    description: 'Online Transfer',
    recipient: 'Rahul Sharma',
    date: '2023-09-15T14:23:00',
    category: 'transfer'
  },
  {
    id: '2',
    type: 'credit',
    amount: 23500,
    description: 'Salary Deposit',
    recipient: 'ABC Company',
    date: '2023-09-10T09:10:00',
    category: 'transfer'
  },
  {
    id: '3',
    type: 'debit',
    amount: 1299,
    description: 'Amazon Purchase',
    recipient: 'Amazon Pay',
    date: '2023-09-08T16:45:00',
    category: 'shopping'
  },
  {
    id: '4',
    type: 'debit',
    amount: 450,
    description: 'Food Delivery',
    recipient: 'Swiggy',
    date: '2023-09-07T20:30:00',
    category: 'food'
  },
  {
    id: '5',
    type: 'debit',
    amount: 1499,
    description: 'Electricity Bill',
    recipient: 'State Electric Board',
    date: '2023-09-05T11:15:00',
    category: 'bill'
  }
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="flex flex-col gap-1 mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-display font-bold">Welcome, Amit</h1>
          <p className="text-muted-foreground">Here's an overview of your finances</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content - Accounts & Transactions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <AccountCard 
                type="savings" 
                accountNumber="1234567890" 
                balance={125478.35} 
              />
              <AccountCard 
                type="current" 
                accountNumber="9876543210" 
                balance={48750.60} 
              />
            </div>
            
            <div className="flex justify-between items-center mt-8 mb-4">
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <Button variant="ghost" size="sm" className="text-sm">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Send Money', icon: <ArrowRight className="h-5 w-5" />, link: '/transfer', color: 'bg-bank-blue/10 text-bank-blue' },
                { name: 'Add Money', icon: <PlusCircle className="h-5 w-5" />, link: '#', color: 'bg-bank-success/10 text-bank-success' },
                { name: 'Bill Payment', icon: <Clock className="h-5 w-5" />, link: '#', color: 'bg-bank-warning/10 text-bank-warning' },
                { name: 'View Reports', icon: <BarChart3 className="h-5 w-5" />, link: '#', color: 'bg-bank-lightBlue/10 text-bank-lightBlue' }
              ].map((action, index) => (
                <Link to={action.link} key={index}>
                  <div className="border rounded-xl p-4 flex flex-col items-center text-center hover:border-primary/50 hover:shadow-sm transition-all duration-200">
                    <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mb-3`}>
                      {action.icon}
                    </div>
                    <span className="text-sm font-medium">{action.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8">
              <TransactionList transactions={MOCK_TRANSACTIONS} />
              <div className="flex justify-center mt-4">
                <Button variant="outline" asChild>
                  <Link to="/transactions">
                    View All Transactions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Additional Information */}
          <div className="space-y-6">
            <div className="p-5 border rounded-xl bg-primary/5">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold">Financial Summary</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <BarChart3 className="h-5 w-5" />
                </Button>
              </div>
              
              <Tabs defaultValue="month">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                
                <TabsContent value="week" className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Income</span>
                      <span className="font-medium">₹ 23,500</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-bank-success w-[60%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expenses</span>
                      <span className="font-medium">₹ 7,748</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-bank-error w-[25%]"></div>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="font-medium">Savings</span>
                      <span className="font-bold text-bank-success">₹ 15,752</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="month" className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Income</span>
                      <span className="font-medium">₹ 94,000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-bank-success w-[75%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expenses</span>
                      <span className="font-medium">₹ 45,325</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-bank-error w-[40%]"></div>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="font-medium">Savings</span>
                      <span className="font-bold text-bank-success">₹ 48,675</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="year" className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Income</span>
                      <span className="font-medium">₹ 11,28,000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-bank-success w-[85%]"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expenses</span>
                      <span className="font-medium">₹ 6,52,450</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-bank-error w-[55%]"></div>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between">
                      <span className="font-medium">Savings</span>
                      <span className="font-bold text-bank-success">₹ 4,75,550</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="border rounded-xl overflow-hidden">
              <div className="bg-bank-blue/10 p-4">
                <h3 className="font-semibold flex items-center">
                  <Bell className="h-4 w-4 mr-2 text-bank-blue" />
                  Notifications
                </h3>
              </div>
              <div className="p-4 space-y-4">
                {[
                  { title: 'Salary Credited', desc: 'Your account has been credited with ₹23,500', time: '2 days ago' },
                  { title: 'Bill Payment Due', desc: 'Electricity bill payment is due in 3 days', time: '3 days ago' },
                  { title: 'Security Alert', desc: 'A new device was used to access your account', time: '5 days ago' }
                ].map((notification, index) => (
                  <div 
                    key={index} 
                    className="pb-3 border-b last:border-b-0 last:pb-0"
                  >
                    <div className="flex justify-between">
                      <h4 className="font-medium">{notification.title}</h4>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.desc}</p>
                  </div>
                ))}
                <Button variant="ghost" size="sm" className="w-full text-sm">
                  View all notifications
                </Button>
              </div>
            </div>
            
            <div className="border rounded-xl p-5 bg-primary/5">
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our customer support team is available 24/7 to assist you with any questions or concerns.
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
