import { Body, Controller, Post } from '@nestjs/common';
import { ArifPayService } from 'src/arifpay-sdk/arifpay.service';
import { ICreateCheckOutSession } from 'src/arifpay-sdk/interfaces/checkout-session.interface';

@Controller('arifpay')
export class ArifpayController {
  constructor(private readonly arifPayService: ArifPayService) {}

  @Post('create-checkout-session')
  async createCheckoutSession(
    @Body() createCheckoutSession: ICreateCheckOutSession,
  ) {
    return this.arifPayService.createCheckoutSession(createCheckoutSession);
  }
}
