"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArifPayService = void 0;
const common_1 = require("@nestjs/common");
const arifpay_constants_1 = require("./arifpay-sdk/arifpay.constants");
const uuid_1 = require("uuid");
const checkout_session_dto_1 = require("./arifpay-sdk/dto/checkout-session.dto");
const transactionUrls_enum_1 = require("./arifpay-sdk/enums/transactionUrls.enum");
const axios_1 = require("@nestjs/axios");
let ArifPayService = class ArifPayService {
    constructor(arifpayApiKey, sessionExpiryDate, httpService) {
        this.arifpayApiKey = arifpayApiKey;
        this.sessionExpiryDate = sessionExpiryDate;
        this.httpService = httpService;
    }
    async generateNewNonce() {
        return (0, uuid_1.v4)();
    }
    async validateUserInput(checkoutObj) {
        const result = checkout_session_dto_1.CreateCheckOutSessionDto.safeParse(checkoutObj);
        if (result.success === false) {
            const error = result.error;
            throw new common_1.BadRequestException({
                success: false,
                message: 'Validation failed',
                errors: error.flatten().fieldErrors,
            });
        }
        const data = result.data;
        return data;
    }
    async createCheckoutSession(createCheckoutSession) {
        var _a;
        try {
            await this.validateUserInput(createCheckoutSession);
            let { phone, email, paymentMethods, items, beneficiaries } = createCheckoutSession;
            let data = {
                cancelUrl: transactionUrls_enum_1.TransactionUrls.CANCEL,
                phone: phone,
                email: email,
                nonce: await this.generateNewNonce(),
                errorUrl: transactionUrls_enum_1.TransactionUrls.ERROR,
                notifyUrl: transactionUrls_enum_1.TransactionUrls.NOTIFY,
                successUrl: transactionUrls_enum_1.TransactionUrls.SUCCESS,
                paymentMethods: paymentMethods,
                expireDate: this.sessionExpiryDate,
                items: items,
                beneficiaries: beneficiaries,
                lang: 'EN',
            };
            const response = await this.httpService.axiosRef.post(transactionUrls_enum_1.TransactionUrls.CHECKOUT, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-arifpay-key': this.arifpayApiKey,
                },
            });
            return response.data;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.msg) === 'Validation Error') {
                    throw new common_1.HttpException({
                        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                        error: 'There was an error processing the request',
                        message: error.response.data.msg,
                        data: error.response.data.data,
                    }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
                else {
                    throw new common_1.HttpException({
                        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                        error: 'There was an error processing the request',
                        message: error.response.data.msg,
                    }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        }
    }
};
exports.ArifPayService = ArifPayService;
exports.ArifPayService = ArifPayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(arifpay_constants_1.ARIFPAY_API_KEY)),
    __param(1, (0, common_1.Inject)(arifpay_constants_1.SESSION_EXPIRY_DATE)),
    __metadata("design:paramtypes", [String, String, axios_1.HttpService])
], ArifPayService);
//# sourceMappingURL=arifpay.service.js.map