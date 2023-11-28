import { Module } from '@nestjs/common';
import { ArifpayController } from './arifpay.controller';
import { ArifpaySDKModule } from 'src/arifpay-sdk/arifpay-sdk.module';

@Module({
  imports: [ArifpaySDKModule.register('m2ocgQ8pADsYlM4KUz7x2TKM6FEj5J6F')],
  controllers: [ArifpayController],
})
export class ArifpayModule {}
