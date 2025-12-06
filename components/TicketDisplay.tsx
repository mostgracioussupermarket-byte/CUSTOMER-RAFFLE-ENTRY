import React from 'react';
import { TicketData } from '../types';
import { Printer, Share2, Sparkles, CheckCircle2 } from 'lucide-react';

interface TicketDisplayProps {
  data: TicketData;
  onReset: () => void;
}

const TicketDisplay: React.FC<TicketDisplayProps> = ({ data, onReset }) => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Success Banner */}
      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-3">
        <CheckCircle2 className="h-5 w-5 text-green-600" />
        <p className="text-sm font-medium">Ticket generated successfully! Please save a copy for your records.</p>
      </div>

      {/* The Ticket */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 relative print:shadow-none">
        
        {/* Decorative Top Border */}
        <div className="h-2 w-full bg-gradient-to-r from-emerald-800 via-amber-400 to-emerald-800"></div>

        {/* Header Section */}
        <div className="text-center pt-8 pb-6 px-8 border-b-2 border-dashed border-gray-300 relative">
          <div className="absolute top-4 right-4 opacity-10">
            <Sparkles className="h-24 w-24 text-amber-500" />
          </div>
          <div className="absolute top-4 left-4 opacity-10">
             <Sparkles className="h-24 w-24 text-amber-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-black text-emerald-950 uppercase tracking-tight mb-2">
            Mostgracious Supermarket
          </h1>
          <p className="text-gray-600 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            28 Ado Road Ajah Lagos, Amak Plaza<br/>
            beside Our Mother of Perpetual Catholic Church
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100">
            <span className="text-xs font-bold text-emerald-800 tracking-wider">WHATSAPP: +234 911 045 2279</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8 md:p-12 relative">
           {/* Watermark */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <span className="text-9xl font-black rotate-[-15deg]">TICKET</span>
           </div>

           <div className="text-center mb-10">
             <div className="inline-block border-2 border-emerald-900 px-6 py-2 rounded mb-4 bg-emerald-900 text-amber-400">
                <span className="font-bold tracking-[0.2em] uppercase text-sm">Official Entry</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 tabular-nums tracking-tight">
               #{data.ticketNumber}
             </h2>
             <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Ticket Number</p>
           </div>

           <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
             <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Event Details</h3>
                <div className="space-y-1">
                  <p className="text-emerald-900 font-bold text-lg">Promotional Raffle Draw</p>
                  <p className="text-gray-600 text-sm">Dec 2025 - Dec 31, 2026</p>
                </div>
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Prizes</h4>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="bg-amber-400 text-emerald-900 text-[10px] font-bold px-1.5 rounded">1st</span>
                      <span>200 Liter Refrigerator</span>
                    </li>
                    <li className="flex items-center gap-2">
                       <span className="bg-gray-300 text-gray-800 text-[10px] font-bold px-1.5 rounded">2nd</span>
                      <span>Rechargeable Standard Fan</span>
                    </li>
                    <li className="flex items-center gap-2">
                       <span className="bg-orange-300 text-orange-900 text-[10px] font-bold px-1.5 rounded">3rd</span>
                      <span>Panasonic Blender</span>
                    </li>
                  </ul>
                </div>
             </div>

             <div className="space-y-6">
                <div>
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Customer Name</h3>
                   <p className="text-xl font-serif text-gray-900 border-b border-gray-200 pb-1">
                     {data.firstName} {data.secondName} {data.surname}
                   </p>
                </div>
                <div>
                   <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Contact Details</h3>
                   <p className="text-sm text-gray-700">{data.phone}</p>
                   <p className="text-sm text-gray-700">{data.email}</p>
                </div>
                <div className="pt-2">
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg relative overflow-hidden">
                    <div className="absolute -right-2 -top-2">
                      <Sparkles className="h-8 w-8 text-amber-200" />
                    </div>
                    <p className="text-amber-800 text-sm italic font-medium leading-relaxed">
                      "{data.luckyMessage}"
                    </p>
                  </div>
                </div>
             </div>
           </div>
        </div>

        {/* Footer Stub */}
        <div className="bg-emerald-950 text-white p-4 text-center text-xs opacity-90">
          <p>Issued by Mostgracious Supermarket • {new Date().getFullYear()}</p>
          <p className="text-emerald-400 text-[10px] mt-1">Please retain this ticket to claim your prize.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-8 justify-center print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg font-medium"
        >
          <Printer className="h-4 w-4" />
          Print Ticket
        </button>
        <button 
          onClick={onReset}
          className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow font-medium"
        >
          Issue New Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketDisplay;
