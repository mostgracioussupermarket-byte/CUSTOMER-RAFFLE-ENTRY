export interface CustomerData {
  firstName: string;
  secondName: string;
  surname: string;
  phone: string;
  email: string;
}

export interface TicketData extends CustomerData {
  ticketNumber: string;
  timestamp: string;
  luckyMessage: string;
}
