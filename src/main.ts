import { NestFactory } from '@nestjs/core';
import { ArifpayModule } from './arifpay-client/arifpay.module';

async function bootstrap() {
  const app = await NestFactory.create(ArifpayModule);
  await app.listen(7000);
}
bootstrap();
