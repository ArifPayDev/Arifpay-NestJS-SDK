import { ArifPayService } from '../arifpay.service';
import { ICreateCheckOutSession } from 'src/arifpay-sdk/interfaces/checkout-session.interface';
export declare class ArifpayController {
    private readonly arifPayService;
    constructor(arifPayService: ArifPayService);
    createCheckoutSession(createCheckoutSession: ICreateCheckOutSession): Promise<any>;
}
