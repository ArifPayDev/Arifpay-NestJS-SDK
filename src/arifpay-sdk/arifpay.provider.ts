import { ARIFPAY_API_KEY, SESSION_EXPIRY_DATE } from './arifpay.constants';

export function createArifpayProviders(apiKey: string, expiryDate: string) {
  return [
    {
      provide: ARIFPAY_API_KEY,
      useValue: apiKey,
    },
    {
      provide: SESSION_EXPIRY_DATE,
      useValue: expiryDate,
    },
  ];
}
