export interface ICreateCheckOutSession {
  phone: string;
  email: string;
  paymentMethods: string[];
  items: IArifpayCheckoutItem[];
  beneficiaries: IArifpayBeneficiaries[];
}

export interface IArifpayCheckoutItem {
  name: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
}

export interface IArifpayBeneficiaries {
  accountNumber: string;
  bank: string;
  amount: number;
}
