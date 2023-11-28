import { z } from 'zod';

const IsNotEmptyString = z.string().refine((value) => value !== '', {
  message: 'String cannot be empty',
});
export const ArifpayCheckoutItemDto = z.object({
  name: IsNotEmptyString,
  quantity: z.number(),
  price: z.number(),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const ArifpayBeneficiariesDto = z.object({
  accountNumber: IsNotEmptyString,
  bank: IsNotEmptyString,
  amount: z.number(),
});

export const CreateCheckOutSessionDto = z.object({
  phone: z.string().optional(),
  email: z.string().email().optional(),
  paymentMethods: z.array(IsNotEmptyString),
  items: z.array(ArifpayCheckoutItemDto),
  beneficiaries: z.array(ArifpayBeneficiariesDto),
  expireDate: z.string(),
});
