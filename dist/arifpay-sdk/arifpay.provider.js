"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArifpayProviders = void 0;
const arifpay_constants_1 = require("./arifpay.constants");
function createArifpayProviders(apiKey, expiryDate) {
    return [
        {
            provide: arifpay_constants_1.ARIFPAY_API_KEY,
            useValue: apiKey,
        },
        {
            provide: arifpay_constants_1.SESSION_EXPIRY_DATE,
            useValue: expiryDate,
        },
    ];
}
exports.createArifpayProviders = createArifpayProviders;
//# sourceMappingURL=arifpay.provider.js.map