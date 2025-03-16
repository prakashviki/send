
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { TransactionList, Transaction } from '@/components/TransactionList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Download, 
  ArrowUpDown,
  Calendar,
  CircleDollarSign
} from 'lucide-react';

// Generate more mock transactions
const generateMockTransactions = (): Transaction[] => {
  const types = ['credit', 'debit'] as const;
  const categories = ['transfer', 'shopping', 'food', 'bill', 'other'] as const;
  const names = [
    'Salary Deposit', 'Rent Payment', 'Grocery Shopping', 'Online Transfer',
    'Restaurant Bill', 'Electricity Bill', 'Mobile Recharge', 'Movie Tickets',
    'Bus Ticket', 'Medical Expenses', 'School Fees', 'Internet Bill',
    'Amazon Purchase', 'Swiggy Order', 'Uber Ride', 'Netflix Subscription'
  ];
  const recipients = [
    'ABC Company', 'Landlord', 'Grocery Store', 'Rahul Sharma',
    'Restaurant XYZ', 'State Electric Board', 'Airtel', 'PVR Cinemas',
    'City Bus Service', 'Apollo Hospital', 'DPS School', 'Jio Fiber',
    'Amazon Pay', 'Swiggy', 'Uber', 'Netflix India'
  ];
  
  const transactions: Transaction[] = [];
  
  // Last 3 months of transactions
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(today.getDate() - Math.floor(Math.random() * 90)); // Random date in last 90 days
    
    const type = types[Math.floor(Math.random() * types.length)];
    const nameIndex = Math.floor(Math.random() * names.length);
    
    transactions.push({
      id: `tx-${i}`,
      type,
      amount: type === 'credit' 
        ? Math.floor(Math.random() * 50000) + 1000 
        : Math.floor(Math.random() * 10000) + 100,
      description: names[nameIndex],
      recipient: recipients[nameIndex],
      date: date.toISOString(),
      category: categories[Math.floor(Math.random() * categories.length)]
    });
  }
  
  // Sort by date (newest first)
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const MOCK_TRANSACTIONS = generateMockTransactions();

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery) {
      setTransactions(MOCK_TRANSACTIONS);
      return;
    }
    
    const filtered = MOCK_TRANSACTIONS.filter(
      tx => tx.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
           tx.recipient.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setTransactions(filtered);
  };
  
  const handleFilterChange = (value: string) => {
    setFilterType(value);
    
    if (value === 'all') {
      setTransactions(MOCK_TRANSACTIONS);
      return;
    }
    
    const filtered = MOCK_TRANSACTIONS.filter(tx => tx.type === value);
    setTransactions(filtered);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold">Transactions</h1>
            <p className="text-muted-foreground">View and manage your transaction history</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <form onSubmit={handleSearch} className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search transactions" 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
              
              <div className="flex gap-3">
                <Select value={filterType} onValueChange={handleFilterChange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Transactions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Transactions</SelectItem>
                    <SelectItem value="credit">Credits Only</SelectItem>
                    <SelectItem value="debit">Debits Only</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="icon">
                  <ArrowUpDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <TransactionList transactions={transactions} />
                
                {transactions.length > 0 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" className="w-9 h-9 p-0 font-medium">
                        1
                      </Button>
                      <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                        2
                      </Button>
                      <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                        3
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                )}
                
                {transactions.length === 0 && (
                  <div className="text-center py-12 bg-muted/20 rounded-xl">
                    <CircleDollarSign className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-medium">No transactions found</h3>
                    <p className="text-muted-foreground mt-1">Try changing your search or filter criteria</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="recent" className="mt-0">
                <TransactionList transactions={transactions.slice(0, 5)} />
              </TabsContent>
              
              <TabsContent value="pending" className="mt-0">
                <div className="text-center py-12 bg-muted/20 rounded-xl">
                  <CircleDollarSign className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium">No pending transactions</h3>
                  <p className="text-muted-foreground mt-1">All your transactions have been processed</p>
                </div>
              </TabsContent>
              
              <TabsContent value="scheduled" className="mt-0">
                <div className="text-center py-12 bg-muted/20 rounded-xl">
                  <Calendar className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium">No scheduled transactions</h3>
                  <p className="text-muted-foreground mt-1">You don't have any scheduled payments</p>
                  <Button variant="outline" className="mt-4">
                    Schedule a Payment
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-4">Transaction Summary</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">This Month Credits</span>
                    <span className="font-medium text-bank-success">₹ 48,750</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-bank-success w-[65%]"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">This Month Debits</span>
                    <span className="font-medium text-bank-error">₹ 32,480</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-bank-error w-[45%]"></div>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Net Change</span>
                    <span className="font-bold text-bank-success">+₹ 16,270</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-4">Spending Categories</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Bills & Utilities', percentage: 35, color: 'bg-bank-blue' },
                  { name: 'Shopping', percentage: 25, color: 'bg-bank-lightBlue' },
                  { name: 'Food & Dining', percentage: 20, color: 'bg-bank-success' },
                  { name: 'Transportation', percentage: 15, color: 'bg-bank-warning' },
                  { name: 'Others', percentage: 5, color: 'bg-bank-darkGray' }
                ].map((category, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{category.name}</span>
                      <span>{category.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${category.color}`} 
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Detailed Analytics
              </Button>
            </div>
            
            <div className="border rounded-xl p-5 bg-bank-blue/5">
              <h3 className="font-semibold mb-3">Tax Report</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Generate your tax report for income tax filing purposes.
              </p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Financial Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023-2024">2023-2024</SelectItem>
                  <SelectItem value="2022-2023">2022-2023</SelectItem>
                  <SelectItem value="2021-2022">2021-2022</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full mt-4">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
