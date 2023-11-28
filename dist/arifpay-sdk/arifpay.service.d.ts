import { ICreateCheckOutSession } from './interfaces/checkout-session.interface';
import { HttpService } from '@nestjs/axios';
export declare class ArifPayService {
    private arifpayApiKey;
    private readonly httpService;
    constructor(arifpayApiKey: string, httpService: HttpService);
    generateNewNonce(): Promise<string>;
    validateUserInput(checkoutObj: ICreateCheckOutSession): Promise<{
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
    createCheckoutSession(createCheckoutSession: ICreateCheckOutSession): Promise<any>;
}
