import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { ArrowUp, ArrowDown, CheckCircle, AlertCircle, Shield } from 'lucide-react';

type TransferFormProps = {
  onSuccess?: () => void;
};

export const TransferForm: React.FC<TransferFormProps> = ({ onSuccess }) => {
  const [transferType, setTransferType] = useState<'send' | 'receive'>('send');
  const [amount, setAmount] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [accountType, setAccountType] = useState<string>('savings');
  const [note, setNote] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !recipient) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (transferType === 'send') {
        toast({
          title: "Transfer Successful",
          description: `₹${amount} has been sent to ${recipient}`,
          variant: "default"
        });
      } else {
        toast({
          title: "Request Sent",
          description: `Request for ₹${amount} has been sent to ${recipient}`,
          variant: "default"
        });
      }
      
      // Reset form
      setAmount('');
      setRecipient('');
      setNote('');
      
      if (onSuccess) {
        onSuccess();
      }
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-md mx-auto glass-card rounded-xl overflow-hidden">
      <Tabs defaultValue="send" onValueChange={(value) => setTransferType(value as 'send' | 'receive')}>
        <div className="bg-primary/5 px-4 py-3">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="send" className="data-[state=active]:bg-white">
              <ArrowUp className="h-4 w-4 mr-2" />
              Send Money
            </TabsTrigger>
            <TabsTrigger value="receive" className="data-[state=active]:bg-white">
              <ArrowDown className="h-4 w-4 mr-2" />
              Request Money
            </TabsTrigger>
          </TabsList>
        </div>
        
        <div className="p-6">
          <TabsContent value="send" className="mt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient</Label>
                <Input 
                  id="recipient" 
                  placeholder="Account number, UPI ID, or name" 
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                    <Input 
                      id="amount" 
                      type="number" 
                      min="1" 
                      step="0.01"
                      className="pl-7" 
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="account-type">From Account</Label>
                  <Select value={accountType} onValueChange={setAccountType}>
                    <SelectTrigger id="account-type">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings Account</SelectItem>
                      <SelectItem value="current">Current Account</SelectItem>
                      <SelectItem value="credit">Credit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="note">Note (Optional)</Label>
                <Input 
                  id="note" 
                  placeholder="What's this payment for?" 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Send Money'}
              </Button>
              
              <div className="text-xs text-muted-foreground flex items-center justify-center mt-4">
                <Shield className="h-3 w-3 mr-1 text-bank-success" />
                Secured by advanced encryption
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="receive" className="mt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient-request">Request From</Label>
                <Input 
                  id="recipient-request" 
                  placeholder="Account number, UPI ID, or name" 
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount-request">Amount</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                    <Input 
                      id="amount-request" 
                      type="number" 
                      min="1" 
                      step="0.01"
                      className="pl-7" 
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="account-type-request">To Account</Label>
                  <Select value={accountType} onValueChange={setAccountType}>
                    <SelectTrigger id="account-type-request">
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="savings">Savings Account</SelectItem>
                      <SelectItem value="current">Current Account</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="note-request">Note (Optional)</Label>
                <Input 
                  id="note-request" 
                  placeholder="What's this request for?" 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Request Money'}
              </Button>
            </form>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
