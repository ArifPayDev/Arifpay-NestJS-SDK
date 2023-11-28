"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCheckOutSessionDto = exports.ArifpayBeneficiariesDto = exports.ArifpayCheckoutItemDto = void 0;
const zod_1 = require("zod");
const IsNotEmptyString = zod_1.z.string().refine((value) => value !== '', {
    message: 'String cannot be empty',
});
exports.ArifpayCheckoutItemDto = zod_1.z.object({
    name: IsNotEmptyString,
    quantity: zod_1.z.number(),
    price: zod_1.z.number(),
    description: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
});
exports.ArifpayBeneficiariesDto = zod_1.z.object({
    accountNumber: IsNotEmptyString,
    bank: IsNotEmptyString,
    amount: zod_1.z.number(),
});
exports.CreateCheckOutSessionDto = zod_1.z.object({
    phone: zod_1.z.string().optional(),
    email: zod_1.z.string().email().optional(),
    paymentMethods: zod_1.z.array(IsNotEmptyString),
    items: zod_1.z.array(exports.ArifpayCheckoutItemDto),
    beneficiaries: zod_1.z.array(exports.ArifpayBeneficiariesDto),
    expireDate: zod_1.z.string(),
});
//# sourceMappingURL=checkout-session.dto.js.map