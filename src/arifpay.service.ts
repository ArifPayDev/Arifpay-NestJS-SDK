import {
  BadRequestException,
  Inject,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ARIFPAY_API_KEY,
  SESSION_EXPIRY_DATE,
} from './arifpay-sdk/arifpay.constants';
import { ICreateCheckOutSession } from './arifpay-sdk/interfaces/checkout-session.interface';
import { v4 as uuid9 } from 'uuid';
import { CreateCheckOutSessionDto } from './arifpay-sdk/dto/checkout-session.dto';
import { TransactionUrls } from './arifpay-sdk/enums/transactionUrls.enum';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ArifPayService {
  constructor(
    @Inject(ARIFPAY_API_KEY) private arifpayApiKey: string,
    @Inject(SESSION_EXPIRY_DATE) private sessionExpiryDate: string,
    private readonly httpService?: HttpService,
  ) {}
  async generateNewNonce() {
    return uuid9();
  }
  async validateUserInput(checkoutObj: ICreateCheckOutSession) {
    const result = CreateCheckOutSessionDto.safeParse(checkoutObj);
    if (result.success === false) {
      const error = result.error;
      throw new BadRequestException({
        success: false,
        message: 'Validation failed',
        errors: error.flatten().fieldErrors,
      });
    }

    const data = result.data;
    return data;
  }

  async createCheckoutSession(createCheckoutSession: ICreateCheckOutSession) {
    try {
      await this.validateUserInput(createCheckoutSession);
      let { phone, email, paymentMethods, items, beneficiaries } =
        createCheckoutSession;
      let data = {
        cancelUrl: TransactionUrls.CANCEL,
        phone: phone,
        email: email,
        nonce: await this.generateNewNonce(),
        errorUrl: TransactionUrls.ERROR,
        notifyUrl: TransactionUrls.NOTIFY,
        successUrl: TransactionUrls.SUCCESS,
        paymentMethods: paymentMethods,
        expireDate: this.sessionExpiryDate,
        items: items,
        beneficiaries: beneficiaries,
        lang: 'EN',
      };
      const response = await this.httpService.axiosRef.post(
        TransactionUrls.CHECKOUT,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-arifpay-key': this.arifpayApiKey,
          },
        },
      );
      return response.data;
    } catch (error: any) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        if (error.response?.data.msg === 'Validation Error') {
          throw new HttpException(
            {
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              error: 'There was an error processing the request',
              message: error.response.data.msg,
              data: error.response.data.data,
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        } else {
          throw new HttpException(
            {
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              error: 'There was an error processing the request',
              message: error.response.data.msg,
            },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }
    }
  }
}
