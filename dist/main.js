"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const arifpay_module_1 = require("./arifpay-client/arifpay.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(arifpay_module_1.ArifpayModule);
    await app.listen(7000);
}
bootstrap();
//# sourceMappingURL=main.js.map