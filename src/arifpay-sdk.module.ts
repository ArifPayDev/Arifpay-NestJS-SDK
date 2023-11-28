import { DynamicModule, Module } from '@nestjs/common';
import { ArifPayService } from './arifpay.service';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
})
export class ArifpaySDKModule {
  static register(apiKey: string, expiryDate: string): DynamicModule {
    return {
      module: ArifpaySDKModule,
      providers: [
        {
          provide: ArifPayService,
          useFactory: (httpService: HttpService) => {
            return new ArifPayService(apiKey, expiryDate, httpService);
          },
          inject: [HttpService],
        },
      ],
      exports: [ArifPayService],
    };
  }
}
