import { DynamicModule, Global, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios'; // import HttpModule
import { ArifPayService } from './arifpay.service';

@Module({
  imports: [HttpModule], // add HttpModule to the imports array
})
export class ArifpaySDKModule {
  static register(options: string): DynamicModule {
    return {
      module: ArifpaySDKModule,
      providers: [
        {
          provide: ArifPayService,
          useFactory: (httpService: HttpService) => {
            return new ArifPayService(options, httpService);
          },
          inject: [HttpService], // add this line to inject HttpService into the factory function
        },
      ],
      exports: [ArifPayService],
    };
  }
}
