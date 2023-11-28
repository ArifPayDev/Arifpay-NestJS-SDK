"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArifpayProviders = void 0;
const arifpay_constants_1 = require("./arifpay.constants");
const arifpay_service_1 = require("./arifpay.service");
function createArifpayProviders(options) {
    return [
        {
            provide: arifpay_constants_1.ARIFPAY_API_KEY,
            useValue: options,
        },
        arifpay_service_1.ArifPayService,
    ];
}
exports.createArifpayProviders = createArifpayProviders;
//# sourceMappingURL=arifpay.provider.js.map