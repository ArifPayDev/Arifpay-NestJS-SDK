import {
  BadRequestException,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { v4 as uuid9 } from 'uuid';
import { ICreateCheckOutSession } from './interfaces/checkout-session.interface';
import { CreateCheckOutSessionDto } from './dto/checkout-session.dto';
import { TransactionUrls } from './enums/transactionUrls.enum';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ArifPayService {
  constructor(
    private arifpayApiKey: string,
    private readonly httpService: HttpService
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
      let { phone, email, paymentMethods, items, beneficiaries, expireDate } =
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
        expireDate: expireDate,
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
        }
      );

      return response?.data;
    } catch (error: any) {
      if (error instanceof BadRequestException) {
        throw error;
      } else {
        if (error.response?.data.msg === 'Validation Error') {
          throw new HttpException(
            {
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              error: 'There was an error processing the request',
              message: error.response?.data?.msg,
              data: error.response?.data?.data,
            },
            HttpStatus.INTERNAL_SERVER_ERROR
          );
        } else {
          // console.error(error);
          throw new HttpException(
            {
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              error: 'There was an error processing the request',
              message: error.response?.data?.msg,
            },
            HttpStatus.INTERNAL_SERVER_ERROR
          );
        }
      }
    }
  }
}
