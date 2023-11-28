import { Module } from '@nestjs/common';
import { ArifpayController } from './arifpay.controller';
import { ArifpaySDKModule } from 'src/arifpay-sdk.module';

@Module({
  imports: [
    ArifpaySDKModule.register(
      'm2ocgQ8pADsYlM4KUz7x2TKM6FEj5J6F', // apiKey
      '2025-02-01T03:45:27', // expiryDate
    ),
  ],
  controllers: [ArifpayController],
})
export class ArifpayModule {}
