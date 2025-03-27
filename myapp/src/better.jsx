import React, { useState } from 'react';
import { RadioGroup, Radio } from '@/components/ui/radio-group'; // Assuming a UI library
import { Button, Card, CardContent } from '@/components/ui';

function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const paymentOptions = [
    { id: 'mpesa', label: 'M-Pesa' },
    { id: 'airtel_money', label: 'Airtel Money' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'credit_card', label: 'Credit Card' },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePayment = () => {
    alert(`Proceeding with ${selectedOption} payment`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-white">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Choose Your Payment Method</h1>
          <RadioGroup value={selectedOption} onValueChange={handleOptionChange}>
            {paymentOptions.map((option) => (
              <Radio key={option.id} value={option.id} className="mb-2">
                {option.label}
              </Radio>
            ))}
          </RadioGroup>

          {selectedOption && (
            <div className="p-4 mt-4 bg-blue-100 rounded-lg shadow-md">
              <p className="text-sm text-blue-800">
                You selected <strong>{paymentOptions.find(o => o.id === selectedOption).label}</strong>. Proceed to payment?
              </p>
            </div>
          )}

          <Button
            disabled={!selectedOption}
            onClick={handlePayment}
            className="w-full mt-6"
          >
            Proceed to Payment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default PaymentPage;
