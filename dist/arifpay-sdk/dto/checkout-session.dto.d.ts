import { z } from 'zod';
export declare const ArifpayCheckoutItemDto: z.ZodObject<{
    name: z.ZodEffects<z.ZodString, string, string>;
    quantity: z.ZodNumber;
    price: z.ZodNumber;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    quantity?: number;
    price?: number;
    description?: string;
    image?: string;
}, {
    name?: string;
    quantity?: number;
    price?: number;
    description?: string;
    image?: string;
}>;
export declare const ArifpayBeneficiariesDto: z.ZodObject<{
    accountNumber: z.ZodEffects<z.ZodString, string, string>;
    bank: z.ZodEffects<z.ZodString, string, string>;
    amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    accountNumber?: string;
    bank?: string;
    amount?: number;
}, {
    accountNumber?: string;
    bank?: string;
    amount?: number;
}>;
export declare const CreateCheckOutSessionDto: z.ZodObject<{
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    paymentMethods: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    items: z.ZodArray<z.ZodObject<{
        name: z.ZodEffects<z.ZodString, string, string>;
        quantity: z.ZodNumber;
        price: z.ZodNumber;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        quantity?: number;
        price?: number;
        description?: string;
        image?: string;
    }, {
        name?: string;
        quantity?: number;
        price?: number;
        description?: string;
        image?: string;
    }>, "many">;
    beneficiaries: z.ZodArray<z.ZodObject<{
        accountNumber: z.ZodEffects<z.ZodString, string, string>;
        bank: z.ZodEffects<z.ZodString, string, string>;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        accountNumber?: string;
        bank?: string;
        amount?: number;
    }, {
        accountNumber?: string;
        bank?: string;
        amount?: number;
    }>, "many">;
    expireDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone?: string;
    email?: string;
    paymentMethods?: string[];
    items?: {
        name?: string;
        quantity?: number;
        price?: number;
        description?: string;
        image?: string;
    }[];
    beneficiaries?: {
        accountNumber?: string;
        bank?: string;
        amount?: number;
    }[];
    expireDate?: string;
}, {
    phone?: string;
    email?: string;
    paymentMethods?: string[];
    items?: {
        name?: string;
        quantity?: number;
        price?: number;
        description?: string;
        image?: string;
    }[];
    beneficiaries?: {
        accountNumber?: string;
        bank?: string;
        amount?: number;
    }[];
    expireDate?: string;
}>;
