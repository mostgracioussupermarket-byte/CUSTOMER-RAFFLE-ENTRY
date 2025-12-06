import React, { useState } from 'react';
import RaffleForm from './components/RaffleForm';
import TicketDisplay from './components/TicketDisplay';
import { CustomerData, TicketData } from './types';
import { generateLuckyMessage } from './services/geminiService';
import { ShoppingBag } from 'lucide-react';

const App: React.FC = () => {
  const [ticket, setTicket] = useState<TicketData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data: CustomerData) => {
    setIsLoading(true);
    
    // Simulate API delay for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 800));

    // Generate Lucky Message via Gemini
    const luckyMessage = await generateLuckyMessage(data.firstName);

    // Generate Ticket Number (Random 6 digit number)
    const ticketNumber = Math.floor(100000 + Math.random() * 900000).toString();

    const newTicket: TicketData = {
      ...data,
      ticketNumber,
      timestamp: new Date().toISOString(),
      luckyMessage
    };

    setTicket(newTicket);
    setIsLoading(false);
  };

  const handleReset = () => {
    setTicket(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pb-20">
      {/* App Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-gray-900">Mostgracious</span>
          </div>
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Official Raffle System
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!ticket ? (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950">
                Win Big with <br/><span className="text-emerald-600">Mostgracious</span>
              </h1>
              <p className="text-lg text-gray-600">
                Enter our exclusive promotional draw for a chance to win premium household appliances. 
                Secure your ticket today!
              </p>
              
              {/* Prize Preview Pills */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                 <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                   ❄️ 200L Refrigerator
                 </span>
                 <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                   💨 Standard Fan
                 </span>
                 <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                   🍹 Panasonic Blender
                 </span>
              </div>
            </div>

            <RaffleForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          </div>
        ) : (
          <TicketDisplay data={ticket} onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        <p>&copy; 2025 Mostgracious Supermarket. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
