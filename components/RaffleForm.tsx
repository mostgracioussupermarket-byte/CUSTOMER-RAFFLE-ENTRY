import React, { useState } from 'react';
import { CustomerData } from '../types';
import { Loader2, Ticket as TicketIcon } from 'lucide-react';

interface RaffleFormProps {
  onSubmit: (data: CustomerData) => void;
  isLoading: boolean;
}

const RaffleForm: React.FC<RaffleFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<CustomerData>({
    firstName: '',
    secondName: '',
    surname: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-emerald-900 py-6 px-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-amber-400 tracking-wider">ENTER THE DRAW</h2>
        <p className="text-emerald-100 text-sm mt-1 opacity-80">Complete your details to generate your ticket</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name</label>
            <input
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
              placeholder="e.g. John"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Middle Name</label>
            <input
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
              placeholder="e.g. David"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Surname</label>
            <input
              required
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
              placeholder="e.g. Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">WhatsApp Number</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
              placeholder="+234..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                <span>Processing Ticket...</span>
              </>
            ) : (
              <>
                <TicketIcon className="h-5 w-5" />
                <span>Generate Official Ticket</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RaffleForm;
