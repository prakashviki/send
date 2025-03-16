
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CreditCard, 
  DollarSign, 
  ChevronRight, 
  Eye, 
  EyeOff,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type AccountCardProps = {
  type: 'savings' | 'current' | 'credit';
  accountNumber: string;
  balance: number;
  currency?: string;
};

export const AccountCard: React.FC<AccountCardProps> = ({ 
  type, 
  accountNumber, 
  balance, 
  currency = '₹'
}) => {
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(true);
  
  const formatAccountNumber = (number: string) => {
    return `XXXX XXXX ${number.slice(-4)}`;
  };
  
  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };
  
  const getAccountTypeDetails = () => {
    switch (type) {
      case 'savings':
        return {
          name: 'Savings Account',
          color: 'bg-gradient-to-r from-bank-blue to-bank-lightBlue',
          textColor: 'text-white'
        };
      case 'current':
        return {
          name: 'Current Account',
          color: 'bg-gradient-to-r from-neutral-700 to-neutral-800',
          textColor: 'text-white'
        };
      case 'credit':
        return {
          name: 'Credit Card',
          color: 'bg-gradient-to-r from-bank-darkBlue to-bank-blue',
          textColor: 'text-white'
        };
      default:
        return {
          name: 'Account',
          color: 'bg-gradient-to-r from-bank-blue to-bank-lightBlue',
          textColor: 'text-white'
        };
    }
  };
  
  const { name, color, textColor } = getAccountTypeDetails();
  
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <div className={`${color} ${textColor} p-5`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm opacity-80">{name}</p>
            <h3 className="text-lg font-medium mt-1">{formatAccountNumber(accountNumber)}</h3>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <CreditCard className="h-5 w-5" />
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-xs opacity-80">Available Balance</p>
            <div className="flex items-center mt-1">
              <span className="text-lg font-semibold flex items-center">
                {currency} {isBalanceVisible ? balance.toLocaleString('en-IN') : 'XXXX.XX'}
              </span>
              <button 
                onClick={toggleBalanceVisibility}
                className="ml-2 opacity-70 hover:opacity-100 transition-opacity"
                aria-label={isBalanceVisible ? 'Hide balance' : 'Show balance'}
              >
                {isBalanceVisible ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Shield className="h-4 w-4" />
            <span className="text-xs">Protected</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-9">
              <DollarSign className="h-4 w-4 mr-1" />
              Send
            </Button>
            <Button variant="outline" size="sm" className="h-9">
              Statement
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
