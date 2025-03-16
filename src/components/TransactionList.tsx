
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { ArrowDownLeft, ArrowUpRight, CreditCard, Smartphone, Building, Coffee, ShoppingBag } from 'lucide-react';

export type Transaction = {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  recipient: string;
  date: string;
  category: 'transfer' | 'shopping' | 'food' | 'bill' | 'other';
};

type TransactionListProps = {
  transactions: Transaction[];
  currency?: string;
};

export const TransactionList: React.FC<TransactionListProps> = ({ 
  transactions,
  currency = '₹'
}) => {
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'transfer':
        return <CreditCard className="h-4 w-4" />;
      case 'shopping':
        return <ShoppingBag className="h-4 w-4" />;
      case 'food':
        return <Coffee className="h-4 w-4" />;
      case 'bill':
        return <Building className="h-4 w-4" />;
      default:
        return <Smartphone className="h-4 w-4" />;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', { 
      day: 'numeric', 
      month: 'short',
      hour: '2-digit', 
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your recent financial activity</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'credit' 
                      ? 'bg-bank-success/10 text-bank-success' 
                      : 'bg-bank-error/10 text-bank-error'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownLeft className="h-5 w-5" />
                    ) : (
                      <ArrowUpRight className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{transaction.recipient}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(transaction.date)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`font-medium ${
                    transaction.type === 'credit' ? 'text-bank-success' : 'text-bank-error'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'} {currency} {transaction.amount.toLocaleString('en-IN')}
                  </span>
                  <div className="ml-4 bg-muted rounded-full p-1">
                    {getCategoryIcon(transaction.category)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-6 text-center text-muted-foreground">
              No transactions to display
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
